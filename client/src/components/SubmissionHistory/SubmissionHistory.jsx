import React from 'react';

import Chip from 'material-ui/Chip';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Person from 'material-ui/svg-icons/social/person';
import FolderSpecial from 'material-ui/svg-icons/notification/folder-special';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import Subheader from 'material-ui/Subheader';

import request from 'superagent';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

import LetterAvatar from '../common/LetterAvatar';
import EvalFeedbackSheet from '../EvaluationFeedback/EvalFeedbackSheet';
import {SessionExpiredBlock, HTTPErrorNormalizer} from '../common';

export default class SubmissionHistory extends React.Component{
  constructor(){
    super();
    this.state = {
      unauthorized: false,
      error: undefined,
      submissionList:[],
      submissionColln:undefined,
      evaluation: undefined,
      open: false,
      collnQueryInProgress: true,
      totalSubmissions: undefined,
      pageStart: 1
    }

    this.styles = {
      pgTitle : {
        fontSize: "18px",
        margin: "10px auto auto 5px",
        padding: "0px",
        fontWeight: "600"
      },
      pgDesc : {
        margin: "10px auto auto 5px",
        padding: "0px"
      },
      errorMsg: {
        color: 'red'
      },
      primaryText : {
        fontSize: "15px",
        fontWeight: "400"
      },
      dialogTitle: {
        background: "#ececec",
        fontSize: "18px"
      },
      scoreChip : {
        background: "#ffd968",
        fontWeight: "600"
      },
      scoreChipZero : {
        background: "#cecece",
        fontWeight: "600"
      },
      customStyle : {
        width: '80%',
        maxWidth: '100%'
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

  componentDidMount = () => {
    this.loadRepoSubmissions();
  }

  loadRepoSubmissions = (page) => {
    if(!page) {
      page = 1;
    }

    let now = new Date();  //this date format give midnyt time so by giving +2 it show till midnight
    let dayTS = new Date (now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+2).getTime() / 1000;

    let Url = '/api/v1/evaluations/report/'+dayTS+'?q=before&users='+this.props.username+'&submission='+this.props.repoUrl+'&page='+page;

    request
    .get(Url)
    .end((err, res) => {
      if (err) {
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        return this.setState({unauthorized: unauthorized, error: msg});
      } else {
        let submissions = this.state.submissionList;
        submissions = submissions.concat(res.body.evaluations);

        this.setState({
          submissionColln: res.body,
          submissionList: submissions,
          totalSubmissions: res.body.total,
          collnQueryInProgress: false,
          pagerStart: page,
          hasMore: (submissions.length < res.body.total)
        });
      }
    });
  }

  loadNextPage = (page) =>{
    this.loadRepoSubmissions(page);
  }

  handleSubmissionSelect = (submissionId) => {
    request
    .get(`/api/v1/evaluations/submission/${submissionId}`)
    .end((err, res) => {
      if (err) {
        
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        return this.setState({unauthorized: unauthorized, error: msg});
      } else {
        this.setState({
          evaluation:res.body,
          open:true
        })
      }
    })
  }

  getSubmissionListBlock = () => {
    if(this.state.submissionList.length <= 0) {
      return '';
    }

    let cadetReports = this.state.submissionList
      .map((submission, index) => {
        return (
          <Row key={index}>
            <Col xs={12}>
              <ListItem
                leftAvatar={<span><LetterAvatar data={submission.username}/></span>}
                rightAvatar={
                  <span>
                    { (!!submission.evalScores && submission.evalScores.finalScore)? <Chip style={this.styles.scoreChip}>{Math.floor(submission.evalScores.finalScore) + "%"}</Chip> : <Chip style={this.styles.scoreChipZero}>{ 0 + "%"}</Chip> }
                  </span>}
                primaryText={
                  <span style={this.styles.primaryText}>{submission.repoUrl} # {submission.repoRef}</span>
                }
                secondaryTextLines={2}
                secondaryText={
                  <span style={this.styles.secondaryText}>
                    <span>{/*submission.username*/}</span>
                    <span title="submitted on" >
                      <ActionDone color="#A7A7A7" /> {moment(submission.submittedOn).calendar()}
                    </span>
                    <span style={{margin: "auto 25px"}} title="status updated on" >
                      <ActionDoneAll color="#A7A7A7" /> {moment(submission.statusUpdateOn).calendar()}
                    </span>
                  </span>
                }
                onTouchTap={this.handleSubmissionSelect.bind(this, submission.submissionId) }>
              </ListItem>
              <Divider inset={true}/>
            </Col>
          </Row>
        );
      })
    return cadetReports;
  }

  handleDialogClose = () => {
    this.setState({open: false})
  }

  getFeedbackDialogBlock = () => {
    if(!this.state.evaluation) {
      return '';
    }

    return(
      <Dialog
      title={<div>{this.state.evaluation.repoUrl} # {this.state.evaluation.repoRef} <small>{'(' + this.state.evaluation.username + ')'}</small></div>}
      titleStyle={this.styles.dialogTitle}
      actions={[<FlatButton label="Close" primary={true} onTouchTap={this.handleDialogClose}/>]}
      contentStyle={this.styles.customStyle}
      modal={true}
      open={this.state.open}
      onRequestClose={this.handleDialogClose}
      autoScrollBodyContent={true}
      >
        <EvalFeedbackSheet evaluation={this.state.evaluation}/>
      </Dialog>
    )
  }

  render(){

    if(this.state.unauthorized) {
      return <SessionExpiredBlock />;
    }

    if(this.state.collnQueryInProgress) {
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

    return(
      <div>
       {(this.state.open) ? this.getFeedbackDialogBlock() : ''}
          <Grid fluid style={{marginBottom: "30px"}}>
            <Row center="xs">
              <Col xs={12} sm={12} md={10} lg={10}>

                <Row start="xs">
                  <Col xs={12}>
                      <div style={this.styles.pgTitle}>{'Submission History'}</div>
                  </Col>
                </Row>

                <Row start="xs" bottom="xs">
                  <Col xs={12}>
                    <div style={this.styles.pgDesc}>
                      <FolderSpecial color="#A7A7A7" style={{verticalAlign: "middle"}} />
                      <span style={{margin: "auto auto auto 5px"}}>
                        {this.props.repoUrl}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row start="xs" bottom="xs">
                  <Col xs={12}>
                    <div style={this.styles.pgDesc}>
                      <Person color="#A7A7A7" style={{verticalAlign: "middle"}} />
                      <span style={{margin: "auto auto auto 5px"}}>
                        {this.props.username}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row end="xs">
                  <Col xs={12}>
                    <Subheader>
                      { (this.state.totalSubmissions) ? 'Showing ' + this.state.submissionList.length + ' of ' +  this.state.totalSubmissions: '' }
                    </Subheader>
                  </Col>
                </Row>

                <Row start="xs">
                  <Col xs={12}>
                    <List>
                      {this.getSubmissionListBlock()}
                    </List>
                  </Col>
                </Row>

                <Row center="xs">
                  <Col>
                    <Subheader>
                      { (this.state.submissionList.length >= this.state.totalSubmissions) ? 'All Submissions listed' : 'Showing ' + this.state.submissionList.length + ' of ' +  this.state.totalSubmissions}
                    </Subheader>
                  </Col>
                </Row>

                <InfiniteScroll
                  pageStart={this.state.pageStart}
                  loadMore={this.loadNextPage.bind(this)}
                  hasMore={this.state.hasMore}
                  loader={<div style={{padding: "50px"}}><LinearProgress mode="indeterminate"/></div>}>
                    { <div></div> }
                </InfiniteScroll>

              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}
