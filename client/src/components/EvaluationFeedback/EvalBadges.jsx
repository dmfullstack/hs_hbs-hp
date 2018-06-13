import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {FeedbackStatusBadge,
	ProjectBuildStatusBadge,
	EvaluationStatusBadge,
  ProjectTestStatusBadge} from '../Badges';
import lodash from 'lodash';

export default class EvalBadges extends React.Component {
	constructor(props) {
  	super(props);
     this.state={
		 }

    this.styles = {
    };
  }

	static propTypes = {
		evaluation: PropTypes.object.isRequired
	}

	getSubmissionBuildStatus = () => {
		// Check if it is single build or multiple stages of build
		if(lodash.has(this.props, 'evaluation.evalFindings.build')) {
			// Single build
			return lodash.get(this.props, 'evaluation.evalFindings.build.status', 'unknown');
			// intentionally kept blank to improve readability
		// } else if (lodash.has(this.props, 'evaluation.evalFindings.build.stage::build')) {
		} else if (lodash.has(this.props, ['evaluation', 'evalFindings', 'stage::build'])) {
			// Multiple builds
			// Iterate over all the builds to check the status of them
			let submissionBuildStatusArray = [];
			lodash.forIn(this.props.evaluation.evalFindings['stage::build'], (stageValue, stageName) => {
				let currentStatus = lodash.get(stageValue, 'status', 'unknown');
				submissionBuildStatusArray.push(currentStatus);
			});

			// Check if all are completed or exist any one failed or unknown but some have completed
			let buildStatus = 'unknown';
			if( submissionBuildStatusArray.every((status) => { return status === 'unknown'}) ) {
				buildStatus = 'unknown';
			} else if( submissionBuildStatusArray.every((status) => { return status === 'Completed'}) ) {
				buildStatus = 'Completed';
			} else if( submissionBuildStatusArray.every((status) => { return status === 'Failed'}) ) {
				buildStatus = 'Failed';
			} else if ( submissionBuildStatusArray.some((status) => { return status === 'Failed'}) ) {
				buildStatus = 'SomeFailed';
			} else if ( submissionBuildStatusArray.some((status) => { return status === 'unknown'}) ) {
				buildStatus = 'SomeUnknown';
			}

			return buildStatus;
		} else {
			return 'unknown';
		}
	}

	getSubmissionTestStatus = () => {
		let submissionTestStatusArray = [];
		if (lodash.has(this.props, ['evaluation', 'evalFindings', 'tests'])) {
			// Multiple builds
			// Iterate over all the builds to check the status of them
			lodash.forIn(this.props.evaluation.evalFindings['tests'], (stageValue, stageName) => {
				let currentStatus = lodash.get(stageValue, 'status', 'unknown');
				//let testCount = [];
				if(stageValue.summary && stageValue.summary.checks) {
					// taking object of stage name and failed count because showing error msg the stage name will help
					let failedInfo = {
						// multiplying with 1 converts into number. added because some count are coming in string
						// default total will come 0 if test cases not runing. so taking total to check
						"count" : lodash.get(stageValue.summary.checks, 'failed', "0" )*1,
						"total" : lodash.get(stageValue.summary.checks, 'total', "0" )*1,
						"stageName": stageName,
						"status" : currentStatus
					}
					//testCount.push(failedCount*1)
				  submissionTestStatusArray.push(failedInfo);
				  // this is considering javascript assignemnts
				} else if(stageValue.output && stageValue.output.stats) {
					let failedInfo = {
						"count" : lodash.get(stageValue.output.stats, 'failures', "0" )*1,
						"total" : lodash.get(stageValue.output.stats, 'tests', "0" )*1,
						"stageName": stageName,
						"status" : currentStatus
					}
					submissionTestStatusArray.push(failedInfo);
				}
			});
		}
					// Check if all are completed or exist any one failed or unknown but some have completed
			let testStatus = 'unknown';
			if( submissionTestStatusArray.every((stage) => { return (stage.status === 'unknown') }) ) {
				testStatus = 'unknown';
			} else if( submissionTestStatusArray.every((stage) => { return (stage.status === 'Completed' && stage.total === 0) }) ) {
				testStatus = 'Failed';
			} else if( submissionTestStatusArray.every((stage) => { return (stage.status === 'Completed' && stage.count === 0 && stage.total !== 0) }) ) {
				testStatus = 'Completed';
			} else if( submissionTestStatusArray.every((stage) => { return (stage.status === 'Failed') }) ) {
				testStatus = 'Failed';
			} else if ( submissionTestStatusArray.some((stage) => { return (stage.status === 'Failed' && stage.count !== 0 ) }) ) {
				testStatus = 'SomeFailed';
				// stage.count < 0 is considering in next check if negative score comes to consider that
			} else if ( submissionTestStatusArray.some((stage) => { return (stage.status === 'Completed' && stage.total === 0) }) ) {
				testStatus = 'Failed';
			} else if ( submissionTestStatusArray.some((stage) => { return (stage.status === 'Completed' && stage.count !== 0 )  }) ) {
				testStatus = 'SomeFailed';
			} else if ( submissionTestStatusArray.some((stage) => { return (stage.status === 'unknown' && stage.total === 0) }) ) {
				testStatus = 'SomeFailed';
			}

			return testStatus;
	}

	render() {
		return (
			<Grid fluid>
				<Row center="xs">
          <Col xs={12}>

						<Row between="xs">
		        	<Col xs={2}>
		        		{
		        			// <ProjectBuildStatusBadge
		        			// status={ (!!this.props.evaluation.evalFindings &&
		        			// 	!!this.props.evaluation.evalFindings.build &&
		        			// 	!!this.props.evaluation.evalFindings.build.status &&
		        			// 	this.props.evaluation.evalFindings.build.status) ||
		        			// (!!this.props.evaluation.evalFindings &&
		        			// 	!!this.props.evaluation.evalFindings['stage::build'] &&
		        			// 	!!this.props.evaluation.evalFindings['stage::build'].ngbuild &&
		        			// 	!!this.props.evaluation.evalFindings['stage::build'].ngbuild.status &&
		        			// 	this.props.evaluation.evalFindings['stage::build'].ngbuild.status) ||'unknown'}/>
		        		}
		        		<ProjectBuildStatusBadge status={this.getSubmissionBuildStatus()} />
		        	</Col>
{/*		        	<Col xs={2}>
		        		<ProjectRunStatusBadge
		        			status={ (!!this.props.evaluation.evalFindings &&
		        				!!this.props.evaluation.evalFindings.run &&
		        				!!this.props.evaluation.evalFindings.run.status &&
		        				this.props.evaluation.evalFindings.run.ProjectRunStatusBadgeus) || 'unknown'}/>
		        	</Col>*/}
		        	<Col xs={2}>
		        	  <ProjectTestStatusBadge status={this.getSubmissionTestStatus()} />
		        	</Col>
		        	<Col xs={2}>
		        		<EvaluationStatusBadge status={ (this.props.evaluation.status || 'unknown') }/>
		        	</Col>
		        	<Col xs={2}>
		        		<FeedbackStatusBadge status={ (this.props.evaluation.status || 'unknown') }/>
		        	</Col>
		        </Row>

		      </Col>
				</Row>
	    </Grid>
	  )
	}}
