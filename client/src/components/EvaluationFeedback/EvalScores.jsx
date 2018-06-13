import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
	TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
//import lodash from 'lodash';
import Lookup from '../common/Lookup';

export default class EvalScores extends React.Component {
	constructor(props) {
  	super(props);
     this.state={
		 }

    this.styles = {
      tableHead : {
      	background: "#ececec",
      	textAlign: "center"
      },
      tableColumnBorder: {
      	borderCollapse: "collapse",
      	border: "1px solid gray"
      },
      tablRowColumn: {
      	textAlign: "center"
      },
      finalScoreCell: {
      	textAlign: "center",
      	background: "#ffd968",
      	fontSize: "",
      	fontWeight: "600",
      	borderCollapse: "collapse",
      	border: "1px solid gray"
      }
    };
  }

	static propTypes = {
		evalScores: PropTypes.object.isRequired
	}

	render() {
		return (
		 <Paper>
				<Table
					height={'100%'}
					fixedHeader={true}
					fixedFooter={true}
					displayBorder={true}
					allRowsSelected={false}
					selectable={false}>

					<TableHeader
						displaySelectAll={false}
						adjustForCheckbox={false}
						enableSelectAll={false}
						style={this.styles.tableHead}>

						<TableRow displayBorder={true}>
							<TableHeaderColumn style={this.styles.tableHead}>Areas</TableHeaderColumn>
							<TableHeaderColumn style={this.styles.tableHead}>Total Checks</TableHeaderColumn>
							<TableHeaderColumn style={this.styles.tableHead}>Passed</TableHeaderColumn>
							<TableHeaderColumn style={this.styles.tableHead}>Failed</TableHeaderColumn>
							<TableHeaderColumn style={this.styles.tableHead}>Score</TableHeaderColumn>
						</TableRow>
					</TableHeader>

					<TableBody
						displayRowCheckbox={false}
						deselectOnClickaway={false}
						showRowHover={false}
						stripedRows={false}>

						{
							this.props.evalScores.sections.map( (section, index) => (
								<TableRow key={index}>
									<TableRowColumn style={{}}>{Lookup.toScoreSectionNames(section.name)}</TableRowColumn>
									<TableRowColumn style={this.styles.tablRowColumn}>{section.total}</TableRowColumn>
									<TableRowColumn style={this.styles.tablRowColumn}>{section.passes}</TableRowColumn>
									<TableRowColumn style={this.styles.tablRowColumn}>{section.failed}</TableRowColumn>
									<TableRowColumn style={this.styles.tablRowColumn}>{section.score}%</TableRowColumn>
								</TableRow>
					    ))
						}

						<TableRow>
							<TableRowColumn style={{}} colSpan="4">Final Score</TableRowColumn>
							<TableRowColumn style={this.styles.finalScoreCell}>{this.props.evalScores.finalScore}%</TableRowColumn>
						</TableRow>

			  		</TableBody>
					<TableFooter>
				</TableFooter>
			</Table>
		</Paper>
	  )
	}}
