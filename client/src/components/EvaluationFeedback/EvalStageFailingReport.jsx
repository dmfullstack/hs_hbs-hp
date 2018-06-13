import React from 'react';

import lodash from 'lodash';

import { Row, Col } from 'react-flexbox-grid';
import ReportProblem from 'material-ui/svg-icons/action/report-problem';

export default class EvalStageFailingReport extends React.Component {

  showFailureStages = () => {

  	let submissionStageStatusArray = [];
  	let buildFailedMessage = "";
  	let testFailedMessage = "";
  	let submissionStageNotRunning = "";

  	if(lodash.has(this.props, ['evaluation', 'evalFindings', 'stage::build'])) {
  		lodash.forIn(this.props.evaluation.evalFindings['stage::build'], (stageValue, stageName) => {
				let status = lodash.get(stageValue, 'status', 'unknown');
				if ( status !== 'Completed') {
					buildFailedMessage = 'Project build has issues, please fix and try again ..!';
				}
			});
  	} else if(lodash.has(this.props, 'evaluation.evalFindings.build')) {
			let status = this.props.evaluation.evalFindings.build.status;
			if ( status !== 'Completed') {
				buildFailedMessage = 'Project build has issues, please fix and try again ..!';
			}
		}

		//checking for buildFailedMessage if build is failed no need to check for test cases
		 if ( buildFailedMessage === "" && lodash.has(this.props, ['evaluation', 'evalFindings', 'tests'])) {
			lodash.forIn(this.props.evaluation.evalFindings['tests'], (stageValue, stageName) => {
				//let currentStatus = lodash.get(stageValue, 'status', 'unknown');
				if(stageValue && stageValue.summary) {
					if(lodash.get(stageValue.summary.checks, 'failed', "0" )*1 > 0){
				    submissionStageStatusArray.push(stageName);
				  } else if (lodash.get(stageValue.summary.checks, 'total', "0" )*1 === 0) {
				  	submissionStageNotRunning = "Something went wrong in running test-cases, please report this ..!";
				  }
				} else if (stageValue && stageValue.output && stageValue.output.stats) {
					if(lodash.get(stageValue.output.stats, 'failures', '0')*1 > 0){
						submissionStageStatusArray.push(stageName);
					} else if(lodash.get(stageValue.output.stats, 'tests', '0')*1 === 0) {
						submissionStageNotRunning = "Something went wrong in running test-cases, please report this ..!";
					}
				}
			});
		}

		if(submissionStageStatusArray.length > 0) {
			testFailedMessage = "TestCases are failing, please fix and try again ..!";
			return testFailedMessage;
		} else if(buildFailedMessage !== "") {
			return buildFailedMessage;
		} else {
			return submissionStageNotRunning
		}
  }

	render() {
		if(this.showFailureStages() !== ""){
			return (
				<Row>
				  <Col style={{ padding: "10px", marginTop: "5px"}}>
	          <ReportProblem color="#A7A7A7" />
	        </Col>
					<Col>
					  <h3 style={{color: "red"}}>{this.showFailureStages()}</h3>
					</Col>
				</Row>
			)
		} else {
			return (
				<Col>
				</Col>
			)
		}
	}
}