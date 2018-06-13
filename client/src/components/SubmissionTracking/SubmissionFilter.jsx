import React from 'react';
import PropTypes from 'prop-types';

import {RepoSelector, SessionExpiredBlock, HTTPErrorNormalizer, UsersList} from '../common';
import UserBrowser from './UserBrowser';
import request from 'superagent';
import lodash from 'lodash';

import {Grid, Row, Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
//import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import LinearProgress from 'material-ui/LinearProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AutoComplete from 'material-ui/AutoComplete';

import DateRange from 'material-ui/svg-icons/action/date-range';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Close from 'material-ui/svg-icons/navigation/close';
import SwapVert from 'material-ui/svg-icons/action/swap-vert';
import Person from 'material-ui/svg-icons/social/person';
import GroupWork from 'material-ui/svg-icons/action/group-work';

export default class SubmissionFilter extends React.Component {
  constructor() {
    super();

  // fields required for filtering are taken inside filter object
    this.state = {
      assignment: { name: undefined, url: undefined},
      defaultDate: undefined,
      selectedDate: undefined,
      value: "before",
      userInfo: "",
      unauthorized: false,
      assignmentList: [],
      //membersColln:[],
      error: null,
      collnQueryInProgress: false,
      openUserSelection: false,
      selectedUsers: [],
      matchingUsers: [],
      matchinguserColln: [],
      userSelectionProgress: false,
      buttonDisable: true,
      browsedUsers:[],
      selectedWorkflow: "",
      WorkflowColln: [],
      userFieldError: "",
      searchtext: "",
      searchQueryInProgress: false
    }

    this.styles = {
      customStyle : {
        width: '80%',
        maxWidth: '100%'
      },
      dialogTitle: {
        background: "#ececec",
        fontSize: "18px",
        fontWeight: "500"
      },placeHolder : {
        fontSize: "15px",
        margin: "5px auto auto 5px",
        padding: "50px",
        height: "20%",
        background: "#efefef",
        color: "#949494",
        borderRadius: "3px"
      }
    }
  }

  static propTypes = {
    onFilterChange:PropTypes.func.isRequired,
    onFilterClose:PropTypes.func.isRequired
  }

  componentDidMount() {
    let now = new Date();
    now.setFullYear(now.getFullYear());
    now.setHours(0, 0, 0, 0);
    let selectedDate = new Date(now);
    let dayTS = new Date (selectedDate.getUTCFullYear(), selectedDate.getUTCMonth(), selectedDate.getUTCDate()+2).getTime() / 1000;
    //defaultDate is for displaying current date. which has to be an object
    // selectedDate is used to filter based on date and time which converted TimeStamp
    this.setState({defaultDate: now, selectedDate: dayTS});
    this.getAssignmentRepo();
    this.getEvaluationWorkflows();
  }

 // this api gets the all the rpos from the server
 // which gives collection of standrad repos from the groups which logged in mentor is member
  getAssignmentRepo = () => {

    this.setState({collnQueryInProgress: true})
    // passing this param so that it fetch repos from groups starts with stack_. instead of fetching all groups
    let stackReposPreffix = "stack_";

    request
    .get(`/api/v1/repos/groups/stackrepos/?gp=${stackReposPreffix}`)
    .end((err, res) => {
      if (err) {

        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        this.setState({
          unauthorized: unauthorized,
          error: msg
        });
      } else {
          let groupRepos = res.body;
          let repoColln = [];
          let allRepos = [];
          if(groupRepos.length >= 0) {
            groupRepos.forEach((group) => {
              allRepos = lodash.concat(allRepos, group.repos);
            })
            repoColln = this.toRepoMap(allRepos);
          }
          this.setState({
            assignmentList: repoColln,
            collnQueryInProgress: false
          });
      }
    });
  }

  toRepoMap = (repos) => {
    let repoMap = repos.map((repo) => {
      //This is the format the repo selector expects
      let r = {
        //text: repo.name,
        text: (repo.nameWithNameSpace) ? repo.nameWithNameSpace : repo.name,
        value: repo.ssh,
        description: repo.description,
        repoId: repo.id,
        repoRef: repo.defaultBranch
      }
      return r;
    });
    return repoMap;
  }

  handleSelectAssignment = (repo) => {
    this.setState({
      assignment: {
        name: repo.text,
        url: repo.value
      },
    });
  };

  handleClearAssignment = () => {
    this.setState({
      assignment: {
        name: undefined,
        url: undefined
      },
    });
  }

  //when a component is loaded it will fetches all workflows from server
  getEvaluationWorkflows = () => {
    request
     .get(`/api/v1/evaluations/workflows`)
     .end((err, res) => {
        if(err){

          let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
          this.setState({
            unauthorized: unauthorized,
            error: msg
          });
        } else {
          this.setState({
            WorkflowColln: res.body
          })
        }
     })
  }

  handleDatePicker = (event, date) => {
    let now = new Date(date);
    let dayTS = new Date (now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+2).getTime() / 1000;

    this.setState({selectedDate: dayTS})
  }

  applyFilter = () => {

    let date = this.state.selectedDate;
    let value = this.state.value;
    let solRepoUrl =  this.state.assignment.url;
    // from the selected users taking the username into array and  converting into "," separated
    let userInfo = this.state.selectedUsers.map((user) => {
      return user.username;
    });
    userInfo = userInfo.toString(); //converts array into "," saparated string
    let workflow = this.state.selectedWorkflow;

    this.props.onFilterChange({date, value, solRepoUrl, userInfo, workflow});
  }

  handleClearFilter = () => {
    this.props.onFilterClose();
  }

  handleChange = (event, index, value) => {
    this.setState({value: value})
  }

  //fetch users matches to the input string from server
  handleUserInfo = (searchtext) => {

    this.setState({
      searchtext: searchtext
    })

    if(searchtext.length > 2 && !(this.state.searchQueryInProgress)){

      this.setState({
        searchQueryInProgress: true
      })

      request
        .get(`/api/v1/repos/git/users/?search=${searchtext}`)
        .end((err, res) => {
          if(err){
            let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
            //console.log("status", status);
            this.setState({
              unauthorized: unauthorized,
              error: msg,
              userFieldError: msg,
              searchQueryInProgress: false
            });
          } else {

            if(res.body.length <= 0){
                this.setState({
                  userFieldError: `No users found with given name ${searchtext}`,
                  searchQueryInProgress: false
                })
              return;
            }
            // this collection consit with avatar_url and name , username for display chips
            let userColln = res.body;
            //taking only usernames to show as list in autocomplete
            let matchingUsernames = [];
            matchingUsernames = res.body.map((user) => {
              //return matchingUsernames.push(user.username);
              return user.username
            })

            this.setState({
              userFieldError: '',
              matchingUsers : matchingUsernames,
              matchinguserColln: userColln,
              searchQueryInProgress: false
            })
          }
        })
    } else {
      this.setState({
        userFieldError: '',
        matchingUsers : [],
        matchinguserColln: []
      })
    }
  }

  // sorting the selected userslist into allphabatical order
  sortSelectedUsers = (users) => {
    users.sort(function(a, b){
      // converting names to lowercase and sorting
      let previousName = a.username.toLowerCase(); // ignoring the capital case
      let currentName = b.username.toLowerCase();
      if (previousName < currentName) {
        return -1;
      }
      if (previousName > currentName) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    return users;
  }

  // when a user selected username for list this function triggers
  handleSelectUser = (username, index) => {
    if(this.state.matchinguserColln.length > 0 && !(this.state.searchQueryInProgress) && username){
      
      this.setState({
        userSelectionProgress: true
      })
      //check the selected username index in the main collection and send that object to userlist
      //let userDetail = this.state.matchinguserColln[index];
      let userDetail = lodash.find(this.state.matchinguserColln, {'username': username});
      let selectedUser = this.state.selectedUsers;
      selectedUser.push(userDetail);
      // taking the unique user and sorting based on alphabatical order
      selectedUser = lodash.uniqBy(selectedUser, 'username');
      selectedUser = this.sortSelectedUsers(selectedUser);

      this.setState({
        selectedUsers: selectedUser,
        userSelectionProgress: false,
        userInfo: ""
      })
    }
  }

  //when user clicks on cancel (or) to remove user from list
  // this function gets index of selected user to remove
  handleRemoveMemberInList = (index) => {
    //takes a original selectedUsers collection ad with the index it removes from collection
    let removeSelectedUser = this.state.selectedUsers;
    removeSelectedUser.splice(index, 1);
    this.setState({
      selectedUsers: removeSelectedUser
    })
  }

   // this function called when group is not selected to show the text ( msg )
 // and when group is selected it will display the linear progress in place of text
  progressBlockAndIntialText = () => {
    return (
      <div style={this.styles.placeHolder}>
        <Row center="xs" middle="xs">
          <Col xs={11}>
            {(this.state.userSelectionProgress) ?  <LinearProgress mode="indeterminate"/> :  " Select Users to filter "}
          </Col>
        </Row>
      </div>
    )
  }

  userSelection = () => {
    this.setState({ openUserSelection : true})
  }

  closeUserSlectionDialog = () => {
    this.setState({ openUserSelection : false})
  }

  // when close the dialog after selecting group
  // it clears the loaded members of selected group
  CloseDialogAndClearUserInfo = () => {
    this.setState({ openUserSelection : false, userInfo : ""})
  }

  // this function takes params from child component
  // which gets selected group members and display in usernames field
  setUserNames = (members) => {
    this.setState({
      browsedUsers: members
    }, () => {
      this.setState({
        buttonDisable: false
      })
    })
  }

  // when user clicks on submit this function triggers
  // this will take the browsed  users and add those users to selectedUser collction which list as chips
  setUserNamesToUserList = () => {
    let membersColln = this.state.selectedUsers;
    let browsedUserColln = this.state.browsedUsers;
    // taking each user object and pushing to selectedUser collection
    // this will add extra users instaed of overwriting collection with browsed users
    browsedUserColln.map((user) => {
      membersColln.push(user);
      return user;
    })
    //taking unique users and sorting them in alphabatical order
    membersColln = lodash.uniqBy(membersColln, 'username')
    membersColln = this.sortSelectedUsers(membersColln);
    this.setState({
      selectedUsers: membersColln,
      userSelectionProgress : false,
      openUserSelection : false
    })
  }

 //this function which opens a dialog for selecting git groups of user
 // which list the users in that group
  getGroupSelectionDialog = () => {
    return (
      <Dialog
        title="Browse and select users from git group"
        titleStyle={this.styles.dialogTitle}
        actions={[
          <FlatButton
            disabled={this.state.buttonDisable}
            label="Submit"
            primary={true}
            onTouchTap={this.setUserNamesToUserList}
          />,
          <FlatButton label="Cancel" onTouchTap={this.CloseDialogAndClearUserInfo}/>
        ]}
        contentStyle={this.styles.customStyle}
        modal={false}
        open={this.state.openUserSelection}
        onRequestClose={this.closeUserSlectionDialog}
        autoScrollBodyContent={true}>
          { <UserBrowser setUserNames={this.setUserNames} /> }
      </Dialog>
    )
  }

  // this function triggers when reset button clicked
  //this function will reset user selection list block to initial state
  resetUserSelectionBlock = () => {
    return this.setState({
      selectedUsers: [],
      userInfo: ""
    })
  }
  // this function is triggered when user select a workflow in filtersection
  handleSelectWorkflow = (workflow) => {
    // selected workflow is set to state variable selectedWorkflow
    // untill selected workflow is in collection
    if(workflow.length < 2){
      this.setState({
        selectedWorkflow: ""
      })
      return;
    }

    if(!(this.state.WorkflowColln.indexOf(workflow) === -1)){
      this.setState({
        selectedWorkflow: workflow
      })
    }
  }

  render(){

    if(this.state.unauthorized) {
      return <SessionExpiredBlock />;
    }

    if(this.state.collnQueryInProgress) {
      return(
        <Grid fluid>
          <Row center="xs">
            <Col xs={8}>
              <div style={{padding: "70px"}}>
                <LinearProgress mode="indeterminate"/>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    }

    return(
      <div>
      {(this.state.openUserSelection) ? this.getGroupSelectionDialog() : ''}
      <Row center="xs">

        <Col xs={10}>
          <Row start="xs" middle="xs">

            <Col>
              <SwapVert color="#A7A7A7" style={{"marginTop": "10px"}}/>
            </Col>

            <Col>
              <SelectField value={(this.state.value) ? this.state.value : "before"} onChange={this.handleChange} style={{"marginTop": "10px"}}>
                <MenuItem value={"before"} primaryText="Submissions made before" />
                <MenuItem value={"for"} primaryText="Submissions made on" />
                <MenuItem value={"after"} primaryText="Submissions made after" />
              </SelectField>
            </Col>

            <Col>
              <DateRange color="#A7A7A7"/>
            </Col>

            <Col xs={3}>
              <DatePicker
                fullWidth={true}
                hintText="Select Date"
                mode="landscape"
                defaultDate={this.state.defaultDate}
                onChange={this.handleDatePicker}
                firstDayOfWeek={0}
              />
            </Col>
            {/*this GroupWork icon is used in specifing evaluation workflow. so reused here*/}
            <Col style={{"marginTop": "5px"}}>
              <GroupWork color="#A7A7A7"/>
            </Col>

            <Col xs={4}>
              <AutoComplete
                hintText="Refine Submissions For Specific Workflow"
                searchText={this.state.selectedWorkflow}
                dataSource={this.state.WorkflowColln}
                fullWidth={true}
                onUpdateInput={this.handleSelectWorkflow}
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                listStyle={{ maxHeight: 200, overflow: 'auto'}}
              />
            </Col>
          </Row>

          <Row start="xs" middle="xs">
            <Col>
              {<Person color="#A7A7A7" style={{"marginTop": "15px"}}/>}
            </Col>

            {/*
              * handleUserInfo which takes username or email as input
              * which is to get the collection based on given UserName or by give userEmail
              */}

            <Col xs={5}>
              <AutoComplete
                hintText="Specify username or useremail (use comma for multiple)"
                searchText={this.state.searchtext}
                fullWidth={true}
                dataSource={this.state.matchingUsers}
                onUpdateInput={this.handleUserInfo}
                onNewRequest={this.handleSelectUser}
                filter={AutoComplete.caseInsensitiveFilter}
                listStyle={{ maxHeight: 200, overflow: 'auto' }}
              />
              {/*<small style={{fontSize:'0.6em'}}>{ (this.state.userInfo === "") ? this.state.userInfo : (this.state.membersColln.length + " members selected ") }</small><br/>*/}
            </Col>
            <Col xs={4} style={{"padding" : "5px"}}>
              <RaisedButton fullWidth={true} label="Browse users" onTouchTap={this.userSelection}/>
            </Col>
            <Col xs={2}>
                <RaisedButton
                  label={"Reset users"}
                  disabled={(this.state.selectedUsers.length > 0) ? false : true}
                  fullWidth={true}
                  onTouchTap={this.resetUserSelectionBlock}
                />
            </Col>
          </Row>

          <Row>
            <Col xs={8}>
              <Row start="xs">
                <p style={{"color": "#949494", "marginTop": "5px"}}>{` ${this.state.userFieldError}`}</p>
              </Row>
            </Col>
            <Col xs={4}>
              <Row end="xs">
                <p style={{"color": "#949494", "marginBottom": "10px"}}>{` ${this.state.selectedUsers.length} users`}</p>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              {(this.state.selectedUsers.length <= 0) ?
                this.progressBlockAndIntialText() :
              <UsersList
                userColln={this.state.selectedUsers}
                onUpdateSelect={this.handleRemoveMemberInList}
              />}
            </Col>
          </Row>
          <Row start="xs" middle="xs">
            <Col>
              {<Assignment color="#A7A7A7" style={{"marginTop": "20px"}}/>}
            </Col>

            <Col xs={9}>
              <RepoSelector floatingLabel="Select Assignment repo"
                repoColln={this.state.assignmentList}
                onRepoSelect={this.handleSelectAssignment}
                onRepoClear={this.handleClearAssignment}
              />
              <small style={{fontSize:'0.6em'}}>{ (this.state.assignment.url) ? this.state.assignment.url : (this.state.assignmentList.length + " repositories available ") }</small><br/>
            </Col>
          </Row>

          <Row middle="xs">
            <Col xs={12}>
              <RaisedButton
                disabled={ (!this.state.defaultDate) ? true : false }
                primary={true}
                fullWidth={true}
                label="Apply"
                onTouchTap={this.applyFilter}
                style={{"marginTop": "15px"}}/>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row end="xs" middle="xs">
            <FloatingActionButton onTouchTap={this.handleClearFilter} mini={true} secondary={true} style={{"marginTop": "15px"}}>
              <Close color="#A7A7A7" />
            </FloatingActionButton>
          </Row>
        </Col>
      </Row>
      </div>
    )
  }
}
