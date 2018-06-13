import React from 'react';
import {RepoSelector, SessionExpiredBlock, HTTPErrorNormalizer} from '../common';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import request from 'superagent';
import {Link} from 'react-router';
import FolderSpecial from 'material-ui/svg-icons/notification/folder-special';
import DeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import Assignment from 'material-ui/svg-icons/action/assignment';
import cookie from 'react-cookie';
import _ from 'lodash';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class AssignmentSubmission extends React.Component {
  state = {
    unauthorized: false,
    submission: { name: undefined, url: undefined},
    assignment: { name: undefined, url: undefined},
    assignmentRepoColln: [],
    submissionRepoColln:[],
    submitInProgress: false,
    error: undefined,
    userMessage: undefined,
    submissionRef: undefined,
    queryAssignmentInProgress: false,
    queryInProgress: false,
    myprofile: {},
    solutionRepoRefColln: [],
    submissionRepoRefColln: [],
    floatingLabelText: "Branch",
    solutionRepoRef: undefined,
    repoRef: undefined
  };

  constructor(props) {
    super(props);

    this.styles = {
      pgTitle : {
        fontSize: "18px",
        margin: "10px auto auto 5px",
        padding: "0px",
        fontWeight: "600"
      },
      title : {
        fontSize: "14px",
        marginRight: "5px",
        padding: "0px"
      },
      userMsgPlaceHolder : {
        fontSize: "20px",
        margin: "10px auto auto 5px",
        padding: "100px",
        height: "100%",
        background: "#f7f7f7",
        color: "#0a52ff",
        borderRadius: "3px"
      },
      errorMsgPlaceHolder : {
        fontSize: "20px",
        margin: "10px auto auto 5px",
        padding: "50px",
        height: "100%",
        background: "#f7f7f7",
        color: "#ff0000",
        borderRadius: "3px"
      }
    };
  }

  handleSelectAssignment = (repo) => {
    this.setState({
        assignment: {
          name: repo.text,
          url: repo.value
        },
      repoId: repo.repoId,
      solutionRepoRef: repo.repoRef,
    },()=>{ this.getSolutionRepoBranches(repo.repoId)});
  };

  handleClearAssignment = () => {
    this.setState({
        assignment: {
          name: undefined,
          url: undefined,
          solutionRepoRef: undefined
        },
    });
  }

  handleSelectSubmission = (repo) => {
    this.setState({
        submission: {
          name: repo.text,
          url: repo.value,
        },
        repoId: repo.repoId,
        repoRef: repo.repoRef
    },()=>{ this.getSubmissionRepoBranches(repo.repoId)});
  };

  getSolutionRepoBranches = (projectId) => {
    request
    .get(`/api/v1/repos/stackprojects/${projectId}/repository/branches`)
    .then((res,err) =>{
      if(err){
        throw err;
      }else{
        this.setState({
          solutionRepoRefColln: res.body
        });
      }
    });
  };

  getSubmissionRepoBranches = (projectId) => {
    request
    .get(`/api/v1/repos/projects/${projectId}/repository/branches`)
    .then((res,err) =>{
      if(err){
        throw err;
      }else{
        this.setState({
          submissionRepoRefColln: res.body
        });
      }
    });
  };

  handleSelectSolutionRepoRef = (event, index, value) => {
    this.setState({solutionRepoRef: value})
  };

  handleSelectSubmissionRepoRef = (event, index, value) => {
    this.setState({repoRef: value})
  };

  componentDidMount(){
    this.setState({
      queryAssignmentInProgress: true,
      queryInProgress: true
    });

    let userProfile = this.getUserProfile();
    this.setState({myprofile: userProfile});
    // passing this param so that it fetch repos from groups starts with stack_. instead of fetching all groups
    let stackReposPreffix = "stack_";

    // @TODO this should not be hardcoded, instead it should be taken from server side, based on user accounts
    request
    .get(`/api/v1/repos/groups/stackrepos/?gp=${stackReposPreffix}`)
    .end((err, res) => {
      if (err) {
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        this.setState({
          unauthorized: unauthorized,
          error: msg,
          queryAssignmentInProgress: false
        });
      } else {
        let groupRepos = res.body;
        let repoColln = [];
        let allRepos = [];

        if(groupRepos.length >= 0) {
          groupRepos.forEach((group) => {
            if(group.repos.length >=0)
            allRepos = _.concat(allRepos, group.repos);
          })
          repoColln = this.toRepoMap(allRepos);
        }
        this.setState({
          assignmentRepoColln: repoColln,
          queryAssignmentInProgress: false
        });
      }
    });

    request
    .get('/api/v1/repos/')
    .end((err, res) => {
      if (err) {
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        this.setState({
          unauthorized: unauthorized,
          error: msg,
          queryInProgress: false
        });
      } else {
        let userRepos = res.body;
        let repoColln = this.toRepoMap(userRepos.repos);
        this.setState({
          submissionRepoColln: repoColln,
          queryInProgress: false
        })
      }
    })
  }

  getUserProfile = () => {
    let token = cookie.load('jwt', {path:'/'});
    let tokenStr = token.split('.')[1];
    tokenStr = tokenStr.replace('-', '+').replace('_', '/');
    let userProfile = JSON.parse(window.atob(tokenStr));
    return userProfile;
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

  handleSubmitToEvaluate = () => {
    // Announce the status, so that no other action is allowed
    this.setState({
      error: undefined,
      userMessage: undefined,
      submitInProgress: true
    });

    if(this.state.submission.url && this.state.assignment.url) {
      request
      .post('/api/v1/evaluations/')
      .send({repoUrl: this.state.submission.url,
        solutionRepoUrl: this.state.assignment.url,
        solutionRepoRef: (this.state.solutionRepoRef) ? this.state.solutionRepoRef : "master",
        repoRef: (this.state.repoRef) ? this.state.repoRef : "master",
        repoReftype: 'branch',
        solutionRepoReftype: 'branch'})
        .end((err, res) => {
          if(err) {
            // let msg = (res && res.body) ? res.body.error : `${err.response} (${err.status})`;
            let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
            this.setState({
              unauthorized: unauthorized,
              msg: msg,
              userMessage: undefined,
              submissionRef: undefined,
              submitInProgress: false,
              error: `Submission not completed due to ${msg}`
            });
            return;
          }

          this.setState({
            userMessage: 'Submitted successfully for evaluation',
            submissionRef: res.body,
            submitInProgress: false,
            error: undefined,
          });
          return;
        });
      } else {
        console.log('Trying to submit without valid repository selection');
      }
    }

    handleClearSubmission = () => {
      this.setState({
        submission: {
          name: undefined,
          url: undefined,
          repoRef: undefined
        },
      });
    }

    handleResetForNewSubmission = () => {
      this.setState({
        submission: { name: undefined, url: undefined},
        assignment: { name: undefined, url: undefined},
        submitInProgress: false,
        error: undefined,
        userMessage: undefined,
        submissionRef: undefined,
        solutionRepoRef: undefined,
        repoRef: undefined
      });
    }

    getActionBlock = () => {
      if(this.state.error) {
        return(
          <Grid fluid>
            <Row center="xs">
              <Col xs={12}>

                <Row middle="xs">
                  <Col xs={12}>
                    <div style={this.styles.errorMsgPlaceHolder}>
                      {this.state.error}
                    </div>
                  </Col>
                </Row>

                <Row middle="xs">
                  <Col xs={12}>
                    <FlatButton primary={true} label="Submit new one" onClick={this.handleResetForNewSubmission}/>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Grid>
        )
      }

      if(this.state.submissionRef && this.state.submission.url && this.state.assignment.url) {
        //Assuming user has just completed submitting one
        return(
          <Grid fluid>
            <Row center="xs">
              <Col xs={12}>

                <Row middle="xs">
                  <Col xs={12}>
                    <div style={this.styles.userMsgPlaceHolder}>
                      {this.state.userMessage}
                    </div>
                  </Col>
                </Row>

                <Row middle="xs">
                  <Col xs={12}>
                    <div>
                      <p>
                        <Link to={"/feedback/" + encodeURIComponent(this.state.submission.url) + "/" +(this.state.repoRef)}> click here </Link> to view feedback
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row middle="xs">
                    <Col xs={12}>
                      <FlatButton primary={true} label="Submit One More" onClick={this.handleResetForNewSubmission}/>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Grid>
          )
        } else {
          return (
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <small>Read the guidelines before submitting</small>
                <RaisedButton primary={true} label="Submit"
                  disabled={!(this.state.submission.url && this.state.assignment.url && this.state.repoRef && this.state.solutionRepoRef)}
                  fullWidth={true}
                  onClick={this.handleSubmitToEvaluate}/>
              </Col>
            </Row>
          )
        }
      }

      render() {
        if(this.state.unauthorized) {
          return <SessionExpiredBlock />;
        }

        if(this.state.submitInProgress || this.state.queryAssignmentInProgress || this.state.queryInProgress) {
          return(
            <Grid fluid>
              <Row center="xs" middle="xs">
                <Col xs={12}>
                  <div style={{padding: "200px"}}>
                    <LinearProgress mode="indeterminate"/>
                  </div>
                </Col>
              </Row>
            </Grid>
          )
        }

        return (
          <Grid fluid>
            <Row center="xs">
              <Col sm={12} md={10} lg={9}>

                <Row start="xs">
                  <Col>
                    <div style={this.styles.pgTitle}>Submit for evaluation</div>
                  </Col>
                </Row>

                <Row start="xs" middle="xs">
                  <Col>
                    {/*<Subheader style={this.styles.title}>Assignments</Subheader>*/}
                    {<Assignment color="#A7A7A7" />}
                  </Col>
                  <Col xs={8}>
                    <RepoSelector floatingLabel="Assignment repository"
                      repoColln={this.state.assignmentRepoColln}
                      onRepoSelect={this.handleSelectAssignment}
                      onRepoClear={this.handleClearAssignment}
                      />

                    <small style={{fontSize:'0.6em'}}>{ (this.state.assignment.url) ? this.state.assignment.url : (this.state.assignmentRepoColln.length + " repositories available ") }{ (this.state.solutionRepoRef) ? "#"+this.state.solutionRepoRef : " " }</small><br/>
                  </Col>
                  <Col>
                    {<DeviceHub color="#A7A7A7" style={{marginLeft:'20px'}}/>}
                  </Col>
                  <Col xs={2}>
                    <SelectField
                      value={this.state.solutionRepoRef}
                      style={{marginBottom:'18px',width:'200px'}}
                      floatingLabelText={this.state.floatingLabelText}
                      hintText={this.state.floatingLabelText}
                      maxHeight={200}
                      disabled={!(this.state.assignment.url)}
                      onChange={this.handleSelectSolutionRepoRef.bind(this)}
                      children={this.state.solutionRepoRefColln.map((branch, index)=>{
                        return (<MenuItem key={index} value={branch} primaryText={branch}></MenuItem>)})}>
                    </SelectField>
                </Col>
              </Row>

              <Row start="xs" middle="xs">
                <Col>
                  {/*<Subheader style={this.styles.title}>Repositories</Subheader>*/}
                  {<FolderSpecial color="#A7A7A7" />}
                </Col>
                <Col xs={8}>
                  <RepoSelector floatingLabel="Your solution repository"
                    repoColln={this.state.submissionRepoColln}
                    onRepoSelect={this.handleSelectSubmission}
                    onRepoClear={this.handleClearSubmission}
                    />
                  <small style={{fontSize:'0.6em'}}>{ (this.state.submission.url) ? this.state.submission.url : (this.state.submissionRepoColln.length + " repositories available ") }{ (this.state.repoRef) ? "#"+this.state.repoRef : " " }</small><br/>
                </Col>
                <Col>
                  {<DeviceHub color="#A7A7A7" style={{marginLeft:'20px'}}/>}
                </Col>
                <Col xs={2}>
                  <SelectField
                    value={this.state.repoRef}
                    style={{marginBottom:'18px',width:'200px'}}
                    floatingLabelText={this.state.floatingLabelText}
                    hintText="branch"
                    maxHeight={200}
                    disabled={!(this.state.submission.url)}
                    onChange={this.handleSelectSubmissionRepoRef.bind(this)}
                    children={this.state.submissionRepoRefColln.map((branch, index)=>{
                      return (<MenuItem key={index} value={branch} primaryText={branch}></MenuItem>)})}>
                  </SelectField>
                </Col>
              </Row>

              <br />
              <br />

              {this.getActionBlock()}

              <br />
              <br />

              <Row start="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Subheader>Guidelines</Subheader>
                  <Divider/>
                </Col>
              </Row>

              <Row start="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <ul>
                    <li>Ensure you have followed the project structure specified in the problem statement</li>
                    <li>Ensure you have committed all your latest changes are pushed to the repository</li>
                    <li>Ensure you have followed best coding practices</li>
                  </ul>
                </Col>
              </Row>

            </Col>
          </Row>
        </Grid>
      )
    }
  }
