import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {grey600,black500} from 'material-ui/styles/colors';
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

export default class JSHtmlhintReportRenderer extends React.Component {

  static get contextTypes() {
    return { evaluation: PropTypes.object.isRequired,
      options: PropTypes.object.isRequired
    };
  }

  transformHtmlhintOutput = () => {
    let htmlhintResluts = [];
    const getRuleIndex = (ruleId) => {
      let index = htmlhintResluts.findIndex((elem, index) => {
        return (elem.ruleId === ruleId);
      });
      return index;
    }

    const addMsgToRule = ({ruleId, severity, desc}, filePath, msg) => {
      let index = getRuleIndex(ruleId);

      if(index < 0) {
        htmlhintResluts.push({ruleId:ruleId,
          desc: desc,
          severity: severity,
          total: 0,
          files: []});
        index = getRuleIndex(ruleId);
      }

      let ruleObj = htmlhintResluts[index];
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

      htmlhintResluts[index] = ruleObj;
      return;
    }

    let details = this.context.evaluation.evalFindings.lint;
    let htmlhintOutput = details.htmlhint.output;

    htmlhintOutput.forEach( (srcFile) => {
      srcFile.messages.forEach((msg) => {
        msg['file'] = srcFile.file;
        addMsgToRule({ruleId: msg.rule.id ,desc: msg.rule.description, severity:msg.type },
          srcFile.file,
          msg)
      })
    });

    return htmlhintResluts;
  }

  getRuleMessageBlock = (ruleMessage) => {
    return (
      <small>{ruleMessage.total} violations</small>
      )
  }

  getReport = () => {
    let htmlhintResluts = this.transformHtmlhintOutput();
    return (
      <Card initiallyExpanded={true} style={{margin: '5px 0'}}>
      <CardHeader
      style={{background: '#eee56d'}}
      title={"Code quality checks "+ Lookup.toScoreSectionNames(this.context.options.setName)}
      titleColor={black500}
      titleStyle={{fontSize: "24px"}}
      subtitle="validation against accepted best practices"
      subtitleColor={grey600}
      actAsExpander={true}
      showExpandableButton={true}>
      </CardHeader>
      <CardText expandable={true}>
      { (htmlhintResluts) ?
        htmlhintResluts.map( (ruleMessage, ruleIndex,srcFile) => {
        return (
          <List key={ruleIndex}>
          <ListItem
          primaryText={ruleMessage.desc + ( ruleMessage.ruleId ? '(' + ruleMessage.ruleId + ')' : '' )}
          secondaryText={ruleMessage.total + ((ruleMessage.severity === 'error')?' severe': '') + ' violations'}
          leftIcon={<EditorInsertDriveFile/>}
          style={ (ruleMessage.severity === 'error') ? {color:'red'} : {}}
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
                      return <li key={index}> Line {msg.line}, Column {msg.col}</li>
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
      }) : "Awesome..! no errors or violations detected"}
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
