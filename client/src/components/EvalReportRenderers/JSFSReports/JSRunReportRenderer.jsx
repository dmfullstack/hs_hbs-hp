import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class JSRunReportRenderer extends React.Component {

	static get contextTypes() {
  	return { evaluation: PropTypes.object.isRequired };
  }

	getReport = () => {
  	let details = this.context.evaluation.evalFindings.run;
  	return (
	  		<Card initiallyExpanded={true} style={{margin: '5px 0'}}>
		      <CardHeader
		        style={{background: '#F0DB4F'}}
		        title="Project execution"
		        titleColor={"#000"}
		        titleStyle={{fontSize: "24px"}}
		        subtitle="verifies project can run"
		        subtitleColor={"#6b6b6b"}
		        actAsExpander={true}
		        showExpandableButton={true}>

		      </CardHeader>

		      <CardText expandable={true}>
			  		<div>
				  		<div>
				  			<p style={{fontFamily: "courier"}}>STDOUT: {details.output.replace(/workspaces\/[^/]+\/submission/g, '')}</p>
				  		</div>
				  		<div>
				  			<p style={{fontFamily: "courier"}}>{ (details.errors)? 'STDERR: ' + details.errors.replace(/workspaces\/[^/]+\/submission/g, ''): ''}</p>
				  		</div>
			  		</div>
		  		</CardText>
	  		</Card>

        )
    }

	render() {
		return (
			<div>
				{this.context.evaluation &&
				this.context.evaluation.evalFindings &&
				this.context.evaluation.evalFindings.run && this.getReport()}
			</div>
		)
	}
}