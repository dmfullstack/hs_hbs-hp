import React from 'react';

import request from 'superagent';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

import { Grid, Row, Col } from 'react-flexbox-grid';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';

//import LetterAvatar from '../common/LetterAvatar';
import {LetterAvatar, SessionExpiredBlock, HTTPErrorNormalizer} from '../common';
import EvalFeedbackSheet from '../EvaluationFeedback/EvalFeedbackSheet';

//This is to ensure time shown along with seconds component
moment.updateLocale('en', {
    longDateFormat : {
        LT: "h:mm:ss A", // <----------- add :ss
        L: "MM/DD/YYYY",
        l: "M/D/YYYY",
        LL: "MMMM Do YYYY",
        ll: "MMM D YYYY",
        LLL: "MMMM Do YYYY LT",
        lll: "MMM D YYYY LT",
        LLLL: "dddd, MMMM Do YYYY LT",
        llll: "ddd, MMM D YYYY LT"
    }
});

export default class SubmissonList extends React.Component{
  constructor(){
  	super();

  	this.state={
      unauthorized: false,
      submissionColln:[],
      selectedSubmissionId: undefined,
      totalSubmissions: 0,
      pageStrat: 1,
      hasMore: true,
      collnQueryInProgress: false,
      feedbackDialogOpen: false,
      error: undefined,
      evaluation: undefined,
      repoUrl: null,
      username: null,
      repoRef: null
  	}

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
      primaryText : {
        fontSize: "18px",
        fontWeight: "400"
      },
      secondaryText: {
      },
      dialogTitle: {
        background: "#ececec",
        fontSize: "18px",
        fontWeight: "500"
      },
      scoreChip : {
        background: "#ffd968",
        fontWeight: "600",
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
      },
      span :{
        margin: "10px 25px"
      }
    };
  }

	componentDidMount() {
		this.setState({collnQueryInProgress: true});

		this.loadSubmissions();
	}

	loadNextPage = (page) => {
		this.loadSubmissions(page);
	}

  loadSubmissions = (page) => {
    if(!page) {
      page = 1;
    }

    let now = new Date();  //this date format give midnyt time so by giving +2 it show till midnight
    let dayTS = new Date (now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+2).getTime() / 1000;

    request
    .get(`/api/v1/evaluations/submissions/report/${dayTS}?q=before&page=${page}`)
    .end((err, res) => {
      if(err){
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        return this.setState({unauthorized: unauthorized, collnQueryInProgress: false,
          error: msg});
      } else {
        let submissions = this.state.submissionColln;
        submissions = submissions.concat(res.body.evaluations)

         this.setState({
          submissionColln: submissions,
          collnQueryInProgress: false,
          totalSubmissions: res.body.total,
          pageStart: page,
          hasMore: (submissions.length < res.body.total)
        });
      }
    });
  }

	handleSubmissionSelect = (submissionId) => {
		this.setState({selectedSubmissionId: submissionId})

		request
		.get(`/api/v1/evaluations/submission/${submissionId}`)
		.end((err, res) => {
			if(err){
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
				return this.setState({unauthorized: unauthorized, error: msg});
			} else {
				 return this.setState({evaluation:res.body,
          feedbackDialogOpen:true})
			}
		})
	}

  handleFeedbackDialogClose = () => {
    this.setState({feedbackDialogOpen: false,
      selectedSubmissionId: undefined,
      evaluation: undefined});
  }

  getFeedbackDialogBlock = () => {
    if(!this.state.evaluation) {
      return '';
    }

  	return(
  		<Dialog
			  title={ <div>{this.state.evaluation.repoUrl} # {this.state.evaluation.repoRef}<small>{'(' + this.state.evaluation.username + ')'}</small></div>}
        titleStyle={this.styles.dialogTitle}
	      actions={[<FlatButton label="Close" primary={true} onTouchTap={this.handleFeedbackDialogClose}/>]}
	      modal={true}
	      contentStyle={this.styles.customStyle}
	      open={this.state.feedbackDialogOpen}
	      onRequestClose={this.handleFeedbackDialogClose}
	      autoScrollBodyContent={true}>
	          { <EvalFeedbackSheet evaluation={this.state.evaluation} showStatusMessage={true}/> }
	    </Dialog>
	  )
  }

  getEvalStatusBadge = (status) => {
  	return(
  		<Row>
  		  <Col xs={1} sm={1}>
  		    <Chip style={this.styles.scoreChipZero}> { 0 + "%"}</Chip>
  		  </Col>
  		</Row>
  	)
  }

  getSubmissionListBlock = () => {
    if(this.state.submissionColln.length <= 0) {
      return '';
    }

    let cadetReports = this.state.submissionColln
      .map((submission, index) => {
        return (
          <Row key={index}>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ListItem
                leftAvatar={<span><LetterAvatar data={submission.username}/></span>}
                rightAvatar={
                  <span style={this.styles.span}>
                    { (!!submission.evalScores && submission.evalScores.finalScore)? <Chip style={this.styles.scoreChip}>{Math.floor(submission.evalScores.finalScore) + "%"}</Chip> : this.getEvalStatusBadge(submission.status) }
                  </span>
                }
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

  getSubmissionsNotFoundBlock = () => {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <Row middle="xs">
              <Col xs={12}>
                <div style={this.styles.placeHolder}>
                  {"Not found any submissions to list..!"}
                </div>
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

  	if(this.state.submissionColln.length <= 0){
  		return this.getSubmissionsNotFoundBlock();
  	}

    if(this.state.error) {
      return (
        <div>
          <b>Error</b>
          <p style={this.styles.errorMsg}>{this.state.error}</p>
        </div>
      )
    }

		return(
			<div>
			{ (this.state.feedbackDialogOpen) ? this.getFeedbackDialogBlock() : ''}
      <Grid fluid style={{marginBottom: "30px"}}>
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={11}>

            <Row start="xs">
              <Col>
                <div style={this.styles.pgTitle}>
                  {"Past Submissions "} <small>{" (" + this.state.totalSubmissions + " submissions)"}</small>
                </div>
              </Col>
            </Row>

            <Row end="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Subheader>
                  { (this.state.totalSubmissions) ? 'Showing ' + this.state.submissionColln.length + ' of ' +  this.state.totalSubmissions: '' }
                </Subheader>
              </Col>
            </Row>

            <Row start="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <List>
                  {this.getSubmissionListBlock()}
                </List>
              </Col>
            </Row>

            <Row center="xs">
              <Col>
                <Subheader>
                  { (this.state.totalSubmissions) ? 'Showing ' + this.state.submissionColln.length + ' of ' +  this.state.totalSubmissions: '' }
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
{/*      <div>
        <Snackbar
          open={this.state.errorSnackOpen}
          message={this.state.snackErrorMsg}
          autoHideDuration={4000}
          onRequestClose={this.handleSnackClose}>
        </Snackbar>
      </div>*/}
      </div>
		)
	}
}