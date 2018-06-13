import React from 'react';
import {RepoSelector, SessionExpiredBlock, HTTPErrorNormalizer} from '../common';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router';

import LinearProgress from 'material-ui/LinearProgress';
import FolderSpecial from 'material-ui/svg-icons/notification/folder-special';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DeviceHub from 'material-ui/svg-icons/hardware/device-hub';

import request from 'superagent';

import EvalFeedbackSheet from './EvalFeedbackSheet';

export default class EvalFeedback extends React.Component {
  state = {
    unauthorized: false,
    error: undefined,
    submission: { name: undefined, url: undefined},
    submissionRepoColln: [],
    queryInProgress: false,
    evalDetails: undefined,
    evalDoc: undefined,
    feedbackQueryInProgress: false,
    open: false,
    submissionRepoRefColln: [],
    repoRef: undefined
  }

  constructor(props) {
    super(props);

    this.styles = {
      errorMsg: {
        color: 'red'
      },
      pgTitle : {
        fontSize: "18px",
        margin: "10px auto auto 5px",
        padding: "0px",
        fontWeight: "600"
      },
      placeHolder : {
        fontSize: "20px",
        margin: "10px auto auto 5px",
        padding: "100px",
        height: "100%",
        background: "#efefef",
        color: "#949494",
        borderRadius: "3px"
      }
    };
  }

componentDidMount(){
    if(this.props.repoUrl) {
      //Whether the repoUrl is selected by the user or passed as parameter
      //handle it from one and same place, so that there is a consistency in the way feedback results are fetched and handled

      this.getEvaluationFeedbackForRepo(this.props.repoUrl, this.props.repoRef, this.props.repoReftype);
    }

    this.setState({
      queryInProgress: true,
      submissionRepoColln: undefined
    })

    request
      .get('/api/v1/repos/')
      .end((err, res) => {
        if (err) {

          let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
          this.setState({
            unauthorized: unauthorized,
            error: msg,
            queryInProgress: false
          })
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

  toRepoMap = (repos) => {
    let repoMap = repos.map((repo) => {
      //This is the format the repo selector expects
      let r = {
        text: repo.nameWithNameSpace,
        value: repo.ssh,
        description: repo.description,
        repoId: repo.id,
        repoRef: repo.defaultBranch
      }
      return r;
    });

    return repoMap;
  }

  handleSelectSubmission = (repo) => {
    this.setState({
      submission: {
        name: repo.text,
        url: repo.value,
      },
      repoId: repo.repoId,
      repoRef: repo.repoRef
    }, () => { this.getSubmissionRepoRef(repo.repoId); })    //Ensure getEvaluationFeedbackRepo is called after state change has happened
  };

  handleClearSubmission = () => {
    this.setState({
        submission: {
          name: undefined,
          url: undefined,
          evalDetails: undefined,
          evalDoc: undefined,
          repoRef: undefined
        },
    });
  }

  handleSelectSubmissionRepoRef = (event, index, value) => {
    this.setState({
      repoRef: value
    })
  };

  handleViewEvaluationFeedback = () => {
    this.getEvaluationFeedbackForRepo(this.state.submission.url, this.state.repoRef, this.state.repoReftype);
  }

  getEvaluationFeedbackForRepo = (repoUrl, repoRef, repoReftype) => {
    if(!repoRef)
      repoRef = 'master';

    if(!repoReftype)
      repoReftype = 'branch';

    if(repoUrl) {
      let reqUrl = `/api/v1/evaluations/feedback/${encodeURIComponent(repoUrl)}?repoRef=${repoRef}&repoReftype=${repoReftype}`;

      if(this.props.uname)
        reqUrl = `${reqUrl}&uname=${this.props.uname}`;

      request
      .get(reqUrl)
      .end((err, res) => {
        if (err) {
          
          let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
          return this.setState({unauthorized: unauthorized, error: msg, feedbackQueryInProgress: false });
        } else {
           return this.setState({
            feedbackQueryInProgress: false,
            evalDetails: res.body,
            evalDoc: (!!res.body.evaluations && !!res.body.evaluations.length && res.body.evaluations[0]) || undefined});
        }
      });
    }//end of checking if repoUrl is set
  }

  getSubmissionRepoRef = (projectId) => {
      request
      .get(`/api/v1/repos/projects/${projectId}/repository/branches`)
      .end((err, res) =>{
        if(err){

          let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
          return this.setState({ unauthorized: unauthorized, error:msg})
        }else{
          this.setState({
            submissionRepoRefColln: res.body
          });
        }
      });
  };

  getFeedbackNotfoundBlock = () => {
    return (
        <Grid fluid>
          <Row center="xs">
            <Col xs={12}>
              <Row middle="xs">
                <Col xs={12}>
                  <div style={this.styles.placeHolder}>
                    <span style={this.styles.errorMsg}>{"Are you sure, that was submitted for evaluation...!"}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      )
  }

  getFeedbackReportSheet = () => {
    if(this.state.feedbackQueryInProgress) {
      return <LinearProgress mode="indeterminate"/>
    }

    if(!this.isFeedbackAvailable()) {
      return this.getFeedbackNotfoundBlock();
    }

    if(this.state.evalDoc) {
      return <EvalFeedbackSheet evaluation={this.state.evalDoc}/>
    }
  }

  isFeedbackAvailable = () => {
    if(this.state.evalDetails) {
      if(this.state.evalDetails.total > 0) {
        if(this.state.evalDoc) {
          return true;
        }
      }
    }
    return false;
  }

  getReportPlaceHolder = () => {
    return (
      <div style={this.styles.placeHolder}>
        select a repository to view feedback
      </div>
    )
  }

  getSubmissionSSH = () => {
    let ssh = "";

    ssh = (this.state.submission.url) ? this.state.submission.url : this.props.repoUrl;

    if(ssh) {
      ssh += ("#" + ((this.state.repoRef) ? this.state.repoRef : this.props.repoRef));
    }

    return ssh;
  }

  render() {

    if(this.state.unauthorized) {
      return <SessionExpiredBlock />;
    }

    if(this.state.queryInProgress) {
      return(
        <Grid fluid>
          <Row center="xs">
            <Col xs={12}>
              <div style={{padding: "200px"}}>
                <LinearProgress mode="indeterminate"/>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    }

    if(this.state.error) {
      return (
        <div>
          <b>Error</b>
          <p style={this.styles.errorMsg}>{this.state.error}</p>
        </div>
      )
    }

    return (
      <Grid fluid style={{marginBottom: "30px"}}>
        <Row center="xs">
          <Col xs={10} md={10} lg={9}>

            <Row start="xs">
              <Col>
                <div style={this.styles.pgTitle}>Evaluation feedback</div>
              </Col>
            </Row>

            <Row start="xs" middle="xs">
              <Col>
                {<FolderSpecial color="#A7A7A7" />}
              </Col>

              <Col xs={7}>
                <RepoSelector floatingLabel="Repository"
                  repoColln={this.state.submissionRepoColln}
                  onRepoSelect={this.handleSelectSubmission}
                  onRepoClear={this.handleClearSubmission}
                  />
                <small style={{fontSize:'0.6em'}}><b>SSH:</b> { this.getSubmissionSSH() }</small>
              </Col>

              <Col>
                {<DeviceHub color="#A7A7A7" style={{marginLeft:'20px'}}/>}
              </Col>

              <Col xs={2}>
                <SelectField
                  value={this.state.repoRef}
                  style={{marginBottom:'18px',width:'200px'}}
                  floatingLabelText="Branch"
                  hintText="Branch"
                  disabled={!(this.state.submission.url)}
                  onChange={this.handleSelectSubmissionRepoRef.bind(this)}
                  children={this.state.submissionRepoRefColln.map((branch, index) => {
                    return(<MenuItem key={index} value={branch} primaryText={branch}/>)})}>
                </SelectField>
              </Col>

              <Col>
                <RaisedButton
                  disabled={!(this.state.submission.url && this.state.repoRef)}
                  label="View"
                  primary={true}
                  style={{marginLeft:'60px'}}
                  onClick={this.handleViewEvaluationFeedback.bind(this)}/>
              </Col>
            </Row>

            <Row middle="xs">
              <Col xs={12}>
                { (!this.state.evalDetails ) ? this.getReportPlaceHolder() : '' }
              </Col>
            </Row>

            <Row between="xs" middle="xs">
              <Col>
              </Col>
              <Col>
                { (!!this.state.evalDetails && this.state.evalDetails.total) ?
                  <span>showing <b style={{fontSize: "16px"}}>{this.state.evalDetails.total}</b> of <Link style={{'textDecoration': 'none'}} to={'/submissionHistory/'+encodeURIComponent(this.state.evalDetails.query.username)+'/'+encodeURIComponent(this.state.evalDetails.query.repoUrl)}> {this.state.evalDetails.total} submissions </Link></span>
                  : ''
                }
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                { (this.state.evalDetails) ? this.getFeedbackReportSheet() : '' }
              </Col>
            </Row>
            <br />
            <br />
            <Row start="xs">
              <Col xs={12}>
                <small><b>PS:</b></small>
              </Col>
            </Row>
            <Row start="xs">
              <Col xs={12}>
                <ul>
                  <li>This is an automated test report</li>
                  <li>If you see some areas, that are not showing any checks/results, probably you did not follow the expected structure</li>
                  <li>Please refer to problem instructions, before submitting for evaluation</li>
                  <li>Please report any issues/errors to coordinator</li>
                </ul>
              </Col>
            </Row>

          </Col>
        </Row>
      </Grid>
    )
  }
}
