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


export default class JSSmellsReportRenderer extends React.Component {

	static get contextTypes() {
  	return { evaluation: PropTypes.object.isRequired };
   }

   transformSmellsOutput = () => {

   	let smellsResults = [];

		const getRuleIndex = (ruleId) => {
		  let index = smellsResults.findIndex((elem, index) => {
		    return (elem.ruleId === ruleId);
		  });
		  return index;
		}

		const addMsgToRule = ({ruleId, severity, desc}, filePath, msg) => {
		  let index = getRuleIndex(ruleId);

		  if(index < 0) {
		    smellsResults.push({ruleId:ruleId,
		      desc: desc,
		      severity: severity,
		      total: 0,
		      files: []});

		    index = getRuleIndex(ruleId);
		  }

		  let ruleObj = smellsResults[index];
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

		  smellsResults[index] = ruleObj;
		  return;
		}

		let details = this.context.evaluation.evalFindings.lint;
		let smellsOutput = details.smells.output;
		smellsOutput.forEach( (srcFile) => {
		  srcFile.messages.forEach( (msg) => {
		    msg['filePath'] = srcFile.filePath;
		    addMsgToRule({ruleId: msg.ruleId, severity: msg.severity, desc: msg.message},
		    srcFile.filePath,
		    msg);
		  });
		});

		return smellsResults;
   }

   getRuleMessageBlock = (ruleMessage) => {
   		return (
   			<small>{ruleMessage.total} violations</small>
   		)
   }

	  getReport = () => {
	  	let smellsResults = this.transformSmellsOutput();
  		return (
	  		<Card initiallyExpanded={true} style={{margin: '5px 0'}}>
		      <CardHeader
		        style={{background: '#202020'}}
		        title="Code Smells"
		        titleColor={grey50}
		        titleStyle={{fontSize: "24px"}}
		        subtitle="validation against accepted best practices"
		        subtitleColor={"#fff"}
		        actAsExpander={true}
		        showExpandableButton={true}>
		      </CardHeader>
		      <CardText expandable={true}>
		      {smellsResults.map( (ruleMessage, ruleIndex) => {
		      	return (
		      		<List key={ruleIndex}>
	                <ListItem
	                  primaryText={ruleMessage.desc + ( ruleMessage.ruleId ? '(' + ruleMessage.ruleId + ')' : '' )}
	                  secondaryText={ruleMessage.total + ((ruleMessage.severity === 2)?' sever': '') + ' violations'}
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
								ruleMessage.files.map( (fileMsg) => {
									return (
                		<TableRow key={fileMsg.filePath}>
											<TableRowColumn>{fileMsg.filePath.replace(/.*\/submission\//, '')}</TableRowColumn>
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
		      })}
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
