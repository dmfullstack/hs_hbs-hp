import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {grey50} from 'material-ui/styles/colors';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Lookup from '../../common/Lookup';

export default class JSMochaTestsReportRenderer extends React.Component {
	constructor(props) {
  	super(props);
     this.state={
		 }

    this.styles = {
    	commanderTests: {
    		background: '#8d6748'
    	},
    	cadetTests: {
    		background: '#ad4e00'
    	},
      cadetUITests: {
        background: '#1b8a91'
      },
      commanderUITests: {
        background: '#2ecbd6'
      },
      cadetUIUnitTests: {
      	background: '#42beae'
      },
      commanderUIUnitTests: {
      	background: '#0f6d61'
      },
      cadete2etests: {
      	background: '#e33e38'
      },
      commandere2etests: {
      	background: '#9e0a05'
      }
    };
  }

	static get contextTypes() {
  	return {
  		evaluation: PropTypes.object.isRequired,
  		options: PropTypes.object.isRequired
  	};
  }

  removeEvaluationDetailsInMessage = (errorMessage) => {
  	let replacedString =  "";
  	if(errorMessage && errorMessage.length) {
  		// Remove any evaluation specific details from error message
  		replacedString = errorMessage.replace(/workspaces\/[^/]+\/submission/g, '');
  	}

  	return(
  		<span style={{"background": "#f7f3d6"}}>{ replacedString }</span>
  	)
  }

  getReportBlock = (details) => {
  	if( !details.output || details.output.tests ) {

  	}
  	return <CardText expandable={true}>
				  		<div>
							{(!! details && details.output && !!details.output.tests && !!details.output.tests.length > 0) ?
	  				 	<Table
	  				 	    height={'100%'}
							fixedHeader={true}
							fixedFooter={true}
							displayBorder={true}
							allRowsSelected={false}
							selectable={false}
							wrapperStyle={{overflowWrap: "break-word"}}>

	  				 	  <TableHeader
	  				 	  	displaySelectAll={false}
									adjustForCheckbox={false}
									enableSelectAll={false}>

									<TableRow style={{"textalign":"center"}}>
									  <TableHeaderColumn style={{width: 20}}>No of</TableHeaderColumn>
									  <TableHeaderColumn>Test case</TableHeaderColumn>
									  <TableHeaderColumn>Status</TableHeaderColumn>
									</TableRow>

	  				    </TableHeader>

	  				      <TableBody
	  				        displayRowCheckbox={false}
										deselectOnClickaway={false}
										showRowHover={false}
										stripedRows={false}>
										{
										  (!! details.output && !!details.output.tests.length) ?
										    details.output.tests.map((testResult, index) => {
											 return (
											 	<TableRow key={index}>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap", width: 20}}>
											 			<span>{index+1}</span>
											 		</TableRowColumn>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap"}}>
											 			<h3>{testResult.fullTitle}</h3>
											 			<p>{testResult.title}</p>
											 		</TableRowColumn>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap"}}>
											 			  <p>{ (testResult.err) ? <span style={{"color":"red"}}> FAILED</span> : <span>PASSED</span> }</p>
                              <p>{(testResult.err) ? this.removeEvaluationDetailsInMessage(testResult.err.message) : ""}</p>
											 		</TableRowColumn>
                        </TableRow>
											)}) :
									    (!! details.output && !!details.output.failures && !!details.output.failures.length) &&
									    	details.output.failures.map((testResult, index) => {
											 return (
											 	<TableRow key={index}>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap", width: 15}}>
											 			<span>{index+1}</span>
											 		</TableRowColumn>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap"}}>
											 			<h3>{testResult.fullTitle}</h3>
											 			<p>{testResult.title}</p>
											 		</TableRowColumn>
											 		<TableRowColumn style={{whiteSpace: "pre-wrap"}}>
											 			  <p>{ (testResult.err) ? <span style={{"color":"red"}}> FAILED</span> : <span>PASSED</span> }</p>
                              <p>{(testResult.err) ? this.removeEvaluationDetailsInMessage(testResult.err.message) : ""}</p>
											 		</TableRowColumn>
                        </TableRow>
											)})
										}
									</TableBody>

	  				 	</Table>: "No test cases found or error occurred..!"}
				  		</div>
			  		</CardText>
  }

  parseErrorMsg = (error) => {
  	let parsedError = error.replace(/workspaces\/[^/]+\/submission/g, '');
  	// this will trim untill ':' . why because end of the path it is giving file name
  	// so instead of taking each file directly taking to last semi collon or we can take kill(/languagepack(.*)\/[^/]+\/*:/g)
  	//takin "kill" string will be error specific so taken semi-colon
  	parsedError = parsedError.replace(/languagepack(.*)\/[^/]+\/*:/g, "");
  	return parsedError;
  }

  getReport = () => {
  	let details = this.context.evaluation.evalFindings.tests[this.context.options.setName];
  	return (
          <Card initiallyExpanded={true} style={{margin: '5px 0'}}>
			      <CardHeader
			        style={this.styles[this.context.options.setName]}
			        title={"Test cases " + Lookup.toScoreSectionNames(this.context.options.setName)}
			        titleColor={grey50}
			        titleStyle={{fontSize: "24px"}}
			        subtitle="verification against expected functional scenarios"
			        subtitleColor={grey50}
			        actAsExpander={true}
			        showExpandableButton={true}>

			      </CardHeader>
			      { (details.errors !== "" && details.output.tests) ?
			      	<CardText expandable={true}>
			      	{this.getReportBlock(details)}
			      		<div>
			  					<p style={{fontFamily: "courier"}}>STDERR: {this.parseErrorMsg(details.errors)}</p>
			      		</div>
			      	</CardText>
			      	: (details.errors !== "") ?
			      	<CardText expandable={true}>
			      		<div>
			  					<p style={{fontFamily: "courier"}}>STDERR: {this.parseErrorMsg(details.errors)}</p>
			      		</div>
			      	</CardText> : this.getReportBlock(details)
			  		}
		  		</Card>
  	    )
    }

	render() {
		return (
			<div>
				{this.context.evaluation &&
				this.context.evaluation.evalFindings &&
				this.context.evaluation.evalFindings.tests && this.getReport()}
			</div>
		)
	}
}
