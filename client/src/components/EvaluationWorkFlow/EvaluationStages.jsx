import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Grid, Row } from 'react-flexbox-grid';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import EvaluationWorkFlowBadge from '../Badges/EvaluationWorkFlowBadge';

export default class EvaluationStages extends React.Component{
	constructor(){
		super();
		this.styles = {
      scoreChip : {
      	background: "#ffd968",
      	fontWeight: "600",
      	display: "inline"
	    }
		}
	}

	static propTypes = {
		evalStages: PropTypes.array.isRequired
	}

	getStageDetail = (detail) => {
		let depends_on = "";
		let input = "";
		let result = "";

		if(detail.depends_on !== undefined){
		  depends_on = detail.depends_on
		  .map((dependOn, index) => {
		    const dependsOnRow = (
		      <Row style={{marginLeft: '10px'}}>{dependOn}</Row>
		    );

		    return(
		    	<div key={index}>
		      	{dependsOnRow}
		      </div>
		    )
		  })
		}

		if(detail.input !== undefined){
			let keys = Object.keys(detail.input);
			let values = Object.values(detail.input);
		  input = keys
		  .map((key, index) => {
		    const inputsRow = (
		      <Row style={{marginLeft: '10px'}}>{key} - {values[index]}</Row>
		    );

		    return(
		    	<div key={index}>
		      	{inputsRow}
		      </div>
		    )
		  })
		}

		if(detail.result !== undefined){
			// if(delete detail.result['stdout']){
			let resultkeys = Object.keys(detail.result);
			let resultvalues = Object.values(detail.result);
		  result = resultkeys
		  .map((resultkey, index) => {
		    const resultsRow = (
		      <Row style={{marginLeft: '10px'}}>
		      	<b>{resultkey.toUpperCase()} : </b><span style={{"background": "#f7f3d6"}}>{resultvalues[index]}</span>
		     	</Row>
		    );

		    return(
		    	<div key={index}>
		      	{resultsRow}
		      </div>
		    )
		  })
		// }
		}

		return(
			<Grid fluid>
        <Row>{<span><b>Type</b> - {detail.type}</span>}</Row>
        {(detail.depends_on !== undefined) ? <Row style={{marginTop: 5}}><span><b>Depends On</b> - {depends_on}</span></Row>:""}
        {(detail.input !== undefined) ? <Row style={{marginTop: 5}}><span><b>Inputs</b> - {input}</span></Row> : ""}
        {(detail.result !== undefined) ? <Row style={{marginTop: 5}}><span><b>Result</b> - {result}</span></Row> : ""}
      </Grid>
		)
	}

	getEvaluationStageList = (props) => {
		let stageExcutionFlow = this.props.evalStages.sort((stages, time) =>{
			return (moment(stages.ts_scheduled) - moment(time.ts_scheduled));
		})

		let evalStageList = stageExcutionFlow.map((stage, index) => {
			let startTime = moment(stage.ts_started);
			let end = moment(stage.ts_completed);
			let timeDifference = moment(end).diff(moment(startTime))
			let duration = moment.duration(timeDifference).asMinutes().toFixed(2);

			return(
				<Card key={index} style={{marginTop: 10}}>
			    <CardHeader textStyle={{width: '90%'}} style={{backgroundColor: '#F5F5F6'}}
			      title={
			      	<span style={{ display: 'flex', justifyContent: 'space-between' }}>
			      	  <span><span>{stage.name}</span><span> ({duration} minutes) </span></span>
			      	  <span style={{ alignSelf: 'flex-end'}}>
			            <EvaluationWorkFlowBadge status={ (stage.status || 'unknown') }/>
			          </span>
			        </span>			      }

			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true}>
			      {<div style={{fontWeight: 'normal'}}>{this.getStageDetail(stage)}</div>}
			    </CardText>
			  </Card>
    		);
    	});
    return evalStageList;
	}

	render(){
		return(
			<div>
				{this.getEvaluationStageList()}
			</div>
		)
	}
}
