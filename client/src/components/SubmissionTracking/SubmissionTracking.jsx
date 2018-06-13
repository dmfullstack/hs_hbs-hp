import React from 'react';

import request from 'superagent';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ImageTune from 'material-ui/svg-icons/image/tune';

import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import History from 'material-ui/svg-icons/action/history';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Replay from 'material-ui/svg-icons/av/replay';
import FolderSpecial from 'material-ui/svg-icons/notification/folder-special';
import DeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import Assignment from 'material-ui/svg-icons/action/assignment';

//import LetterAvatar from '../common/LetterAvatar';
import {LetterAvatar, SessionExpiredBlock, HTTPErrorNormalizer} from '../common';
import EvalFeedbackSheet from '../EvaluationFeedback/EvalFeedbackSheet';
import {EvaluationStatusBadge} from '../Badges';
import EvaluationStages from '../EvaluationWorkFlow';
import SubmissionFilter from './SubmissionFilter';

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

export default class SubmissionTracking extends React.Component {
  constructor(){
  	super();

  	this.state={
      unauthorized: false,
      submissionColln:[],
      selectedSubmissionId: undefined,
      totalSubmissions: 0,
      pageStart: 0,
      hasMore: true,
      collnQueryInProgress: false,
      feedbackDialogOpen: false,
      error: undefined,
      evaluation: undefined,
      evaluationStages:[],
      errorSnackOpen:false,
      snackErrorMsg: "",
      stagesDialogOpen:false,
      evalworkflow:null,
      repoUrl: null,
      username: null,
      repoRef: null,
      reEvaluateCol : undefined,
      reEvaluateStatus: false,
      position: undefined,
      submissionsTrackingUrl: undefined,
      displayFilter: false
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
      IconMenu: {
        margin: '18px auto auto 10px'
      },
      span :{
        margin: "10px 25px"
      },
      title : {
        fontSize: "14px",
        marginRight: "5px",
        padding: "0px"
      },
      actions: {
        align: "center"
      }
    };

    this.iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left">
        <MoreVertIcon/>
      </IconButton>
    );
  }

	componentDidMount() {
		this.setState({collnQueryInProgress: true});

		this.loadSubmissions();
	}

  loadNextPage = (page) => {
    // after filtering infinity scroll not taking the state change of page
    // to load and loadNext on scroll. so state of that page is manually changing
    // this way is recomanded in issues for filtering data
    // Refer to https://github.com/CassetteRocks/react-infinite-scroller/issues/12
    let pages = this.state.pageStart + 1;
		this.loadSubmissions(pages);
	}

  loadSubmissions = (page) => {
    if(!page) {
      page = 1;
    }

    let now = new Date();  //this date format give midnyt time so by giving +2 it show till midnight
    let dayTS = new Date (now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+2).getTime() / 1000;

    let baseUrl = `/api/v1/evaluations/report/${dayTS}?q=before&page=${page}`;
    let url = (this.state.submissionsTrackingUrl) ? this.state.submissionsTrackingUrl.concat(`&page=${page}`) : baseUrl;

    request
    .get(url)
    .end((err, res) => {
      if(err){

        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        return this.setState({
          collnQueryInProgress: false,
          error: msg,
          unauthorized: unauthorized
        });
      } else {
        let submissions = this.state.submissionColln;
        // for pagination if the page number is one (or) first time it getting the collection
        // then it will remove the state colection which already exist
        if(page === 1){
          submissions = [];
        }
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
			  title={ <div> <LetterAvatar data={this.state.evaluation.username}/> {this.state.evaluation.repoUrl} # {this.state.evaluation.repoRef}</div>}
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

  getSubmissionListBlock = () => {
    if(this.state.submissionColln.length <= 0) {
      return '';
    }

    let cadetReports = this.state.submissionColln
      .map((submission, index) => {
        return (
          <Row key={index}>
            <Col xs={12}>
              <ListItem
                leftAvatar={<span><LetterAvatar data={submission.username}/></span>}
                rightAvatar={
                  <span style={this.styles.span}>
                    { (!!submission.evalScores && submission.evalScores.finalScore)? <Chip style={this.styles.scoreChip}>{Math.floor(submission.evalScores.finalScore) + "%"}</Chip> : <EvaluationStatusBadge status={ (submission.status || 'unknown') }/> }
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
                onTouchTap={this.handleSubmissionSelect.bind(this, submission.submissionId) }
                rightIconButton={
                 <IconMenu style={this.styles.IconMenu} iconButtonElement={this.iconButtonElement}>
                   <MenuItem
                    leftIcon={<GroupWork/>}
                    onTouchTap={this.getEvaluationStages.bind(this, submission) }>
                    {"Evaluation Workflow"}
                  </MenuItem>
                  <Link
                    style={{'textDecoration': 'none'}}
                    to={'/submissionHistory/' + encodeURIComponent(submission.username)+'/'+encodeURIComponent(submission.repoUrl)}
                    target="_blank">
                    <MenuItem leftIcon={<History/>}>{"Submission History"}</MenuItem>
                  </Link>
                  <MenuItem
                    leftIcon={<Replay/>}
                    onTouchTap={this.handleReEvaluate.bind(this, submission, index) }>
                    {"Re-Evaluate"}
                  </MenuItem>
                </IconMenu>}>
              </ListItem>
              <Divider inset={true}/>
            </Col>
          </Row>
        );
      })

    return cadetReports;
  }

  getEvaluationStages = (submission) => {
    let jobId = submission.jobId;
    let workflow = (submission.evalParams && submission.evalParams.workflow) ? submission.evalParams.workflow : null;
    let repoUrl = submission.repoUrl;
    let repoRef = submission.repoRef;
    let user = submission.username;

    request
    .get(`/api/v1/evalworkflow/jobs/${jobId}/stages`)
    .timeout({
      response: 5000,  // Wait 5 seconds for the server to start sending,
      deadline: 30000, // but allow 1/2 minute for the file to finish loading.
    })
    .end((err, res) => {
      if(err){

        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        return this.setState({
          unauthorized: unauthorized,
          error: msg,
          errorSnackOpen: true,
          snackErrorMsg: "Workflow stage details not available, please contact administrator..!"
        });
      } else {
        this.setState({
          stagesDialogOpen: true,
          evaluationStages: res.body.stages,
          evalworkflow: workflow,
          repoUrl : repoUrl,
          repoRef: repoRef,
          username: user
        })
      }
    })
  }

  getStagesDialogBlock = () => {
    return(
      <Dialog
        title={<div> <LetterAvatar data={this.state.username}/> {this.state.repoUrl} # {this.state.repoRef}</div>}
        titleStyle={this.styles.dialogTitle}
        actions={[<FlatButton label="Close" primary={true} onTouchTap={this.handleStagesDialogClose}/>]}
        modal={true}
        contentStyle={this.styles.customStyle}
        open={this.state.stagesDialogOpen}
        onRequestClose={this.handleStagesDialogClose}
        autoScrollBodyContent={true}>
        {
          <div style={{margin: "20px auto", color: '#A9A9A9'}}>
          <small>PS: Evaluated as {(this.state.evalworkflow === null) ? "Default" : this.state.evalworkflow}</small>
          </div>
        }
        { (this.state.evalworkflow === null) ? " Stages are not available for this submission" : <EvaluationStages evalStages={this.state.evaluationStages}/>}
      </Dialog>
    )
  }

  handleStagesDialogClose = () => {
    this.setState({
      stagesDialogOpen: false
    });
  }


  handleReEvaluate = (submission, position) => {
    this.setState({
      reEvaluateCol: submission,
      reEvaluateStatus: true,
      position: position
    })
  }


  getReEvaluationBlock = () => {
    return (
      <Dialog
        title={"Re-Evaluate existing submission"}
        titleStyle={this.styles.dialogTitle}
        actions={
          [
            <FlatButton label="Yes" primary={true} onTouchTap={this.submitForReEvaluate}/>,
            <FlatButton label="cancel" style={this.styles.actions} onTouchTap={this.reEvaluateClose}/>
          ]
        }
        actionsContainerStyle={this.styles.actions}
        modal={false}
        contentStyle={this.styles.customStyle}
        open={this.state.reEvaluateStatus}
        onRequestClose={this.reEvaluateClose}
        autoScrollBodyContent={true}>
        {
          this.displayReEvaluateColnDetails()
        }
      </Dialog>
    )
  }

  displayReEvaluateColnDetails = () => {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12} md={12} lg={12} style={{marginTop:'10px'}}>
            <Row center="xs">
              <Col>
                <div style={this.styles.pgTitle}>
                  <h3>{`Are you sure, you want to Re-Evaluate this submission?`}</h3>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row start="xs">
          <Col sm={12} md={12} lg={12}>

            <Row start="xs" style={{marginTop:"10px"}}>
              <Col>
                {<Assignment color="#A7A7A7" />}
              </Col>
              <Col xs={9} style={{marginTop:"5px", fontSize:'0.9em'}}>
                <span>{ (this.state.reEvaluateCol.payload.solutionRepoUrl) ? this.state.reEvaluateCol.payload.solutionRepoUrl : ""}</span><br/>
              </Col>
              <Col style={{marginTop:"5px"}}>
                {<DeviceHub color="#A7A7A7"/>}
              </Col>
              <Col style={{fontSize:'0.9em', margin:'10px 0px 0px 10px'}}>
               <span>{this.state.reEvaluateCol.payload.solutionRepoRef}</span>
              </Col>
            </Row>

            <Row start="xs" style={{marginTop:"10px"}}>
              <Col>

              </Col>
            </Row>

            <Row start="xs">
              <Col style={{marginTop:'10px'}}>
                {<FolderSpecial color="#A7A7A7" />}
              </Col>
              <Col xs={9} style={{marginTop:'15px', fontSize:'0.9em'}}>
                <span>{ (this.state.reEvaluateCol.repoUrl) ? this.state.reEvaluateCol.payload.solutionRepoUrl : ""}</span><br/>
              </Col>
              <Col style={{marginTop:"10px"}}>
                {<DeviceHub color="#A7A7A7"/>}
              </Col>
              <Col style={{fontSize:'0.9em', margin:'15px 0px 0px 10px'}}>
               <span>{this.state.reEvaluateCol.repoRef}</span>
              </Col>
            </Row>
            <Row>
              <Col>
              {(this.state.reEvaluateCol.pastEvaluations && this.state.reEvaluateCol.pastEvaluations.length) ?
                <div>
                <h4 style={{color: '#B49999'}}>{ 'Past Re-Evaluations :' }</h4>
                  <ul style={{ marginLeft : '10px'}}>
                    {
                      this.getPastEvaluationsByTime()
                    }
                  </ul>
                </div>
              : ''}
              </Col>
            </Row>
            <Row>
              <Col style={{fontSize:'0.9em', margin:'5px 0px 0px 10px'}}>
               <p>{'PS: Re-Evaluate only if you know why you are doing it, else KEEP AWAY..!'}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }

  getPastEvaluationsByTime = () => {
    let sortPastEvaluations = this.state.reEvaluateCol.pastEvaluations.sort((latestEval, previousEval) =>{
      return (new Date(previousEval.statusUpdateOn) - new Date(latestEval.statusUpdateOn));
    })

    let sortedPastEvaluation = sortPastEvaluations.map((pastInfo, index) => {
      return (
        <li style={{marginTop: '10px'}} key={index}>{`By `} {<span style={{ color : 'blue' }}> {pastInfo.submittedBy} </span>} { ` -  ${moment(pastInfo.statusUpdateOn).calendar()}`}</li>)
      })

    return sortedPastEvaluation;
  }

  submitForReEvaluate = () => {
    //this.setState({collnQueryInProgress: true});
     let submissionId = this.state.reEvaluateCol.submissionId;
     let position = this.state.position;
    request
      .patch(`/api/v1/evaluations/${submissionId}`)
      .end((err, res) => {
        if (err) {

        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
          return this.setState({
            unauthorized: unauthorized,
            error: msg,
            errorSnackOpen:true,
            snackErrorMsg:"Unable to submit for ReEvaluation, please try later..!"
          });
        }

        let submissions = this.state.submissionColln;
        submissions[position] = res.body;
        this.setState({
          submissionColln: submissions,
          reEvaluateStatus: false,
          reEvaluateCol : undefined,
          position: undefined
        });
        return;
      })
  }


  reEvaluateClose = () => {
    this.setState({
      reEvaluateCol : undefined,
      position: undefined,
      reEvaluateStatus: false
    })
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

  handleFilterToggel = () => {
    this.setState({
      displayFilter: true,
      iconBackgroundColor: 'white'
    })
  }

/*  this function will send as props to submissionFilter component
  this function gets params for chil component */
  handleFilterChange = ({date, value, solRepoUrl, userInfo, workflow}) => {
    let now = new Date();  //this date format give midnyt time so by giving +2 it show till midnight
    let dayTS = date ? date : new Date (now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()+2).getTime() / 1000;

    let apiUrl = `/api/v1/evaluations/report/${dayTS}`;
    apiUrl = apiUrl.concat(`?q=${value}`);
    apiUrl = (solRepoUrl) ? apiUrl.concat(`&assignment=${solRepoUrl}`): apiUrl;
    apiUrl = (userInfo !== "") ? apiUrl.concat(`&users=${userInfo.replace(/\s/g, '')}`) : apiUrl;
    apiUrl = (workflow !== "") ? apiUrl.concat(`&workflow=${workflow}`) : apiUrl;

    let page = 1;
    this.setState({
      submissionsTrackingUrl: apiUrl,
      pageStart: page
    }, () => {
      this.loadSubmissions()
    })
  }

/*  this function will send as props to SubmissionFilter component
  this function will trigger when filter section closed*/
  handleFilterClose = () => {
    this.setState({
      submissionsTrackingUrl: undefined,
      pageStart: 1,
      iconBackgroundColor: '#F5F5F6',
      displayFilter: false,
      collnQueryInProgress: true
    }, () => {
      this.loadSubmissions()
    })
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

/*  	if(this.state.error){
  		return this.getSubmissionsNotFoundBlock();
  	}*/

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
      { (this.state.stagesDialogOpen) ? this.getStagesDialogBlock() : ''}
      { (this.state.reEvaluateStatus) ? this.getReEvaluationBlock() : ''}
      <Grid fluid style={{marginBottom: "30px"}}>
        <Row center="xs">
          <Col xs={12} md={12} lg={11}>

            <Row start="xs">
              <Col>
                <div style={this.styles.pgTitle}>
                  {"Latest Submissions by Cadets "} <small>{" (" + this.state.totalSubmissions + " submissions)"}</small>
                </div>
              </Col>
            </Row>

            <Row start="xs">
              <Col>
                <IconButton onTouchTap={this.handleFilterToggel.bind(this)}>
                  <ImageTune color="#A7A7A7"/>
                </IconButton>
              </Col>
              <Col style={{"marginTop": "15px"}} >
                <small>{"Refine tracking"}</small>
              </Col>
              {/*to get the fields selected in filter section we are passing
              onFilterChange function as props to SubmissionFilter*/}
              <Col xs={12}>
                { (this.state.displayFilter) ?
                    <div style={{"backgroundColor": "#f7f7f7", "paddingBottom": "15px"}} >
                      <SubmissionFilter
                        onFilterChange={this.handleFilterChange}
                        onFilterClose={this.handleFilterClose}
                      />
                    </div>
                  : ''
                }
              </Col>
            </Row>

            <Row end="xs">
              <Col xs={12}>
                <Subheader>
                  { (this.state.totalSubmissions) ? 'Showing ' + this.state.submissionColln.length + ' of ' +  this.state.totalSubmissions: '' }
                </Subheader>
              </Col>
            </Row>

            <Row start="xs">
              <Col xs={12}>
                <List>
                  { (this.state.submissionColln.length > 0) ? this.getSubmissionListBlock() : this.getSubmissionsNotFoundBlock() }
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
	                loadMore={this.loadNextPage}
	                hasMore={this.state.hasMore}
	                loader={<div key={this.state.pageStart} style={{padding: "50px"}}><LinearProgress mode="indeterminate"/></div>}>
                  { <div></div> }
	          </InfiniteScroll>
					</Col>
			   </Row>
	    </Grid>
      <div>
        <Snackbar
          open={this.state.errorSnackOpen}
          message={this.state.snackErrorMsg}
          autoHideDuration={4000}
          onRequestClose={this.handleSnackClose}>
        </Snackbar>
      </div>
      </div>
		)
	}
}
