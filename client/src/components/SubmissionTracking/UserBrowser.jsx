import React from 'react';
import PropTypes from 'prop-types';

import {RepoSelector, UsersList, SessionExpiredBlock, HTTPErrorNormalizer} from '../common';
import request from 'superagent';

import {Grid, Row, Col } from 'react-flexbox-grid';

import LinearProgress from 'material-ui/LinearProgress';

import Group from 'material-ui/svg-icons/social/group';


export default class UserBrowser extends React.Component {
  constructor(){
    super();

    this.state = {
      unauthorized: false,
      userGitGroups : [],
      selectedGroup : '',
      groupMembers : [],
      error : undefined,
      progress : false
    }

    this.styles = {
      placeHolder : {
        fontSize: "20px",
        margin: "10px auto auto 5px",
        padding: "100px",
        height: "100%",
        background: "#efefef",
        color: "#949494",
        borderRadius: "3px"
      }
    }
  }

  static propTypes = {
    setUserNames: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({ progress : true})

   //this api returns collection of groups with details where user is a member
    request
     .get('/api/v1/repos/groups')
     .end((err, res) => {
         if (err) {

           let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
           this.setState({unauthorized: unauthorized, error: msg});
           return;
       } else {

         let userGitGroups = this.toRepoMap(res.body);
         this.setState({
           userGitGroups: userGitGroups,
           progress: false
         })
       }
     })
  }

  toRepoMap = (repos) => {
    let repoMap = repos.map((repo) => {
      //This is the format the repo selector expects
      let r = {
        text: (repo.name) ? repo.name : repo.path,
        value: repo.web_url,
        description: repo.description,
        repoId: repo.id
      }
      return r;
    });
    return repoMap;
  }

 //this function triggers  when groupName is selected by user
 //gets members from the selected group and writes into state variable
  handleSelectGroup = (group) => {

    let name = group.repoId;
    this.setState({ selectedGroup : group, progress : true})
    request
     .get(`/api/v1/repos/groups/${name}/members`)
     .end((err, res) => {
       if (err) {

         let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
         this.setState({ unauthorized: unauthorized, error: msg, progress : false});
         return;
       } else {
         let membersInfo = res.body;
         this.setState({ groupMembers : membersInfo, progress : false}, () => {
          //here we are sending members of selected group to parent
          //so that we can write members in user-selection field
           this.props.setUserNames(this.state.groupMembers);
         })
       }
     })
  }

  handleClearGroup = () => {
    this.setState({ selectedGroup : undefined});
  }

  // when a member is removed from list. this function will update the collection
  handleRemoveMemberInList = (index) => {

    let groupMemberInfo = this.state.groupMembers;
    groupMemberInfo.splice(index, 1);
    this.setState({
      groupMembers : groupMemberInfo
    }, () => {
      //here we are sending members of selected group to parent
      //so that we can write members in user-selection field
      // here updated collection also sending
      this.props.setUserNames(this.state.groupMembers);
    })
  }

 // this function called when group is not selected to show the text ( msg )
 // and when group is selected it will display the linear progress in place of text
  progressBlockAndIntialText = () => {
    return (
      <div style={this.styles.placeHolder}>
        <Row center="xs" middle="xs">
          <Col xs={11}>
            {(this.state.progress) ?  <LinearProgress mode="indeterminate"/> :  " Select the group to browse members of that group "}
          </Col>
        </Row>
      </div>
    )
  }

 //this returns progress bar when this function called
  renderingProgressBlock = () => {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row middle="xs">
              <Col xs={12} style={{"padding": "200px"}}>
                <LinearProgress mode="indeterminate"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }

 // this function returns content for dialog box, which allows to browse members of group
  getDialogContentBlock = () => {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <Row start="xs" middle="xs">

              <Col>
                {<Group color="#A7A7A7" style={{"marginTop" : "20px"}}/>}
              </Col>

              <Col xs={11}>
                <RepoSelector floatingLabel="Select group to browse users"
                  repoColln={this.state.userGitGroups}
                  onRepoSelect={this.handleSelectGroup}
                  onRepoClear={this.handleClearGroup}
                />
                <small style={{fontSize:'0.8em'}}>{ (this.state.groupMembers.length <= 0) ? `you are a member in ${this.state.userGitGroups.length} groups`  : ` ${this.state.selectedGroup.value}` }</small>
              </Col>
            </Row>
            <Row end="xs" middle="xs">
                {/*displaying total number of members in selected group*/}
              <Col xs={4}>
                { (this.state.groupMembers.length <= 0) ? '' : ` ${this.state.groupMembers.length} members `}
              </Col>
            </Row>
            <Row start="xs" middle="xs">

              <Col xs={11}>
                  {/*displaying the members list in a chip*/}
                { (this.state.groupMembers.length <= 0) ?
                    this.progressBlockAndIntialText() :
                    <UsersList
                      userColln={this.state.groupMembers}
                      onUpdateSelect={this.handleRemoveMemberInList}
                    />
                  }
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }

  render() {

    if(this.state.unauthorized) {
      return <SessionExpiredBlock />;
    }

    if(this.state.error){
      return(
        <div>
          <Grid fluid>
            <Row center="xs" middle="xs">
              <Col xs={12}>
                <div>
                  <p style={{'color': 'red'}}>{this.state.errorMsg}</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }

    return(
      <div style={{ 'height': '300px'}}>
        { (this.state.userGitGroups.length > 0) ? this.getDialogContentBlock() : this.renderingProgressBlock()}
      </div>
    )
  }
}
