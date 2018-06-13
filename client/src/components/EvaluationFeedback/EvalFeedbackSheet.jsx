import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import Assignment from 'material-ui/svg-icons/action/assignment';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import {Card, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import moment from 'moment';

import EvalBadges from './EvalBadges';
import EvalScores from './EvalScores';
import EvalReports from './EvalReports';
import EvalStageFailingReport from './EvalStageFailingReport';

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

export default class EvalFeedbackSheet extends React.Component {
  state = {
    expanede: false
  }

  constructor(props) {
    super(props);

    this.styles = {
    	errorMsg: {
    		color: 'red'
    	},
    	subHeader: {
    		paddingLeft: "0px"
    	},
      placeHolder : {
      	fontSize: "20px",
      	margin: "10px auto auto 5px",
      	padding: "100px",
      	height: "100%",
      	background: "#f7f7f7",
      	color: "#ff0000",
      	borderRadius: "3px"
      },
      workflow : {
        margin : "15px auto auto 5px",
        color : "#bbb"
      }
    };
  }

  static propTypes = {
    evaluation: PropTypes.object.isRequired
  }

  componentDidMount() {}

  handleToggle = (event, toggle) => {
    console.log("toggle", toggle);
    this.setState({expanded: toggle})
  }

  // handleExpandChange = (expanded) => {
  //   console.log("expanded", expanded);
  //    this.setState({expanded: expanded});
  // }

  displayStatusMessage = () =>{
    return(
      <div>
        <Card expanded={this.state.expanded} style={{margin: '5px 0'}}>
          <CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="View reason for failure"
              labelStyle={{color: "red"}}
              thumbSwitchedStyle={{backgroundColor:'red'}}
              trackSwitchedStyle={{backgroundColor:'#ff9d9d'}}
            />
          </CardText>
          <CardText expandable={true}>
            <p style={{fontFamily: "courier"}}>{this.props.evaluation.statusMessage}</p>
          </CardText>
        </Card>
      </div>
    )
  }

  render () {
  	return (
			<Grid fluid>
				<Row center="xs">
          <Col xs={12}>

		  			<Row start="xs" middle="xs" style={{margin: "20px auto"}}>
		        	<Col style={{color: '#A9A9A9'}}>
                {/*<Subheader style={this.styles.subHeader}>Submission for</Subheader>*/}
                <div>
		        		  {/*<Assignment color="#A7A7A7" />*/}
                  Submission for : {" "}{this.props.evaluation.payload.solutionRepoUrl} # {this.props.evaluation.payload.solutionRepoRef}
                </div>
                <div>
                  <ActionDone color="#A7A7A7"/>
                  {moment(this.props.evaluation.submittedOn).calendar()}
                  <span style={{margin: "auto 25px"}}>
                    <ActionDoneAll color="#A7A7A7"/>
                    {moment(this.props.evaluation.statusUpdateOn).calendar()}
                  </span>
                </div>
		        	</Col>
		        </Row>

		        <Row between="xs" start="xs" style={{margin: "20px auto"}}>
		        	<Col xs={1} sm={12}>
		        		<EvalBadges evaluation={this.props.evaluation}/>
		        	</Col>
		        </Row>

            <Row start="xs" style={{margin: "20px auto"}}>
              <Col>
                <EvalStageFailingReport evaluation={this.props.evaluation || {}} />
              </Col>
            </Row>

            <Row start="xs" >
              <Col xs={12}>
                {(this.props.showStatusMessage && this.props.evaluation.status === "EvalFailed" && this.props.evaluation.statusMessage.length) ? this.displayStatusMessage() : ""}
              </Col>
            </Row>

            {(this.props.evaluation.evalScores) ?
		        <Row start="xs" style={{margin: "20px auto"}}>
		        	<Col xs={12}>
		        		<Subheader style={this.styles.subHeader}>Results (scores)</Subheader>
		        		<Divider />
		        	</Col>
		        	<Col xs={12}>
		        		{ (this.props.evaluation.status === 'EvalCompleted') ? <EvalScores evalScores={this.props.evaluation.evalScores || {sections: []}}/> : <small>{'scores not yet available'}</small> }
		        	</Col>
		        </Row> : ""}

		        <Row start="xs" style={{margin: "20px auto"}}>
		        	<Col xs={12}>
		        		<Subheader style={this.styles.subHeader}>{'Report (click on below sections to view detailed findings)'}</Subheader>
		        		<Divider />
		        	</Col>
		        	<Col xs={12}>
		        		{ (this.props.evaluation.status === 'EvalCompleted') ? <EvalReports evaluation={this.props.evaluation || {}}/> : <small>{'report not yet available'}</small> }
		        	</Col>
		        </Row>

            <Row start="xs">
              <Col style={this.styles.workflow}>
                 <small>PS: Evaluated as {(this.props.evaluation.evalParams && this.props.evaluation.evalParams.workflow) ? this.props.evaluation.evalParams.workflow : "Default"}</small>
              </Col>
            </Row>

          </Col>
				</Row>
	    </Grid>
	  )
	}
}
