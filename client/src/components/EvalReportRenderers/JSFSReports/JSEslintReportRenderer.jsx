import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {grey50} from 'material-ui/styles/colors';
import EditorInsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Lookup from '../../common/Lookup';

export default class JSEslintReportRenderer extends React.Component {
constructor(props){
  super(props);
  this.styles={
    eslint:{
      background: "#4b32c3"
    },
    pmd:{
      background: "#B71C1C"
    },
    tslint:{
    	background: "#155799"
    }
  };
}
	static get contextTypes() {
  	return {
      evaluation: PropTypes.object.isRequired,
      options: PropTypes.object.isRequired
    };
  }

   transformESLintOutput = () => {

   	let eslintResults = [];

		const getRuleIndex = (ruleId) => {
		  let index = eslintResults.findIndex((elem, index) => {
		    return (elem.ruleId === ruleId);
		  });
		  return index;
		}

		const addMsgToRule = ({ruleId, severity, desc}, filePath, msg) => {
		  let index = getRuleIndex(ruleId);

		  if(index < 0) {
		    eslintResults.push({ruleId:ruleId,
		      desc: desc,
		      severity: severity,
		      total: 0,
		      files: []});

		    index = getRuleIndex(ruleId);
		  }

		  let ruleObj = eslintResults[index];
		  ruleObj.total = ++ruleObj.total;

		  let fileIndex = ruleObj.files.findIndex( (elem, index) => { return (elem.filePath === filePath); });
		  if(fileIndex < 0) {
		    ruleObj.files.push({
		        filePath: filePath,
		        violations: [msg]
		      })
		  } else {
		    ruleObj.files[fileIndex].violations.push(msg);
		  }

		  eslintResults[index] = ruleObj;
		  return;
		}

		let details = this.context.evaluation.evalFindings.lint[this.context.options.setName];
		let eslintOutput = details.output;

    if(Array.isArray(eslintOutput) && eslintOutput.length > 0) {
			eslintOutput.forEach( (srcFile) => {
			  srcFile.messages.forEach( (msg) => {
			    msg['filePath'] = srcFile.filePath;
			    addMsgToRule({ruleId: msg.ruleId, severity: msg.severity, desc: msg.message},
			    srcFile.filePath,
			    msg);
			  });
			});
	  }

		return eslintResults;
   }

   getRuleMessageBlock = (ruleMessage) => {
   		return (
   			<small>{ruleMessage.total} violations</small>
   		)
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

	  getReport = () => {
	  	let eslintResults = this.transformESLintOutput();
	  	let eslintDetails = this.context.evaluation.evalFindings.lint[this.context.options.setName];
	  	let errorMsg = (eslintDetails.errors) ? eslintDetails.errors : '';
  		return (
	  		<Card initiallyExpanded={true} style={{margin: '5px 0'}}>
		      <CardHeader
		        style={this.styles[this.context.options.setName]}
		        title={"Code quality checks "+ Lookup.toScoreSectionNames(this.context.options.setName)}
		        titleColor={grey50}
		        titleStyle={{fontSize: "24px"}}
		        subtitle="validation against accepted best practices"
		        subtitleColor={"#bbbbbb"}
		        actAsExpander={true}
		        showExpandableButton={true}>
		      </CardHeader>
		      <CardText expandable={true}>
		      {(eslintResults.length > 0) ?
		        eslintResults.map( (ruleMessage, ruleIndex) => {
		      	return (
		      		<List key={ruleIndex}>
	                <ListItem
                    key={ruleIndex}
	                  primaryText={ruleMessage.desc + ( ruleMessage.ruleId ? '(' + ruleMessage.ruleId + ')' : '' )}
	                  secondaryText={ruleMessage.total + ((ruleMessage.severity === 2)?' severe': '') + ' violations'}
	                  leftIcon={<EditorInsertDriveFile/>}
	                  style={ (ruleMessage.severity === 2) ? {color:'red'} : {}}
	                  initiallyOpen={false}
	                  primaryTogglesNestedList={true}
	                  nestedItems={[
		      	<Table key={ruleMessage.desc}>
		      		<TableHeader displaySelectAll={false}>
		      			<TableRow>
		      				<TableHeaderColumn>{'File'}</TableHeaderColumn>
	                <TableHeaderColumn>{'Occurances'}</TableHeaderColumn>
	              </TableRow>
	            </TableHeader>
	            <TableBody displayRowCheckbox={false}>
							{
								ruleMessage.files.map( (fileMsg, index) => {
									return (
                		<TableRow key={(fileMsg.filePath) ? fileMsg.filePath : index }>
                      <TableRowColumn>{ (fileMsg.filePath) ? fileMsg.filePath.replace(/.*\/submission\//, ''):fileMsg.filePath }</TableRowColumn>
											<TableRowColumn>
												<ul>
												{
													fileMsg.violations.map( (msg, index) => {
														return <li key={index}> Line {msg.line}, Column {msg.column}</li>
													})
												}
												</ul>
											</TableRowColumn>
										</TableRow>
	                )
								})
	            }
	            </TableBody>
            </Table>
            ]}/>
            </List>
            )
		      }) : (errorMsg !== '') ? this.removeEvaluationDetailsInMessage(errorMsg) : "Awesome..! no errors or violations detected"}
        	</CardText>
	  	</Card>
  	)
  }
	render() {
		return (
			<div>
				{this.context.evaluation &&
				this.context.evaluation.evalFindings &&
				this.context.evaluation.evalFindings.lint && this.getReport()}
			</div>
		)
	}
}
