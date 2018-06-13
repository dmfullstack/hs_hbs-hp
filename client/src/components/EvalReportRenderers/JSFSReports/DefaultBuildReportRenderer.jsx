import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {grey50} from 'material-ui/styles/colors';
import Lookup from '../../common/Lookup';

export default class DefaultBuildReportRenderer extends React.Component {
constructor(props){
  super(props);
  this.styles={
    build:{
      background: "#2c8ebb"
    },
    UIAppbuild:{
      background: "#0549E7"
    },
    javabuild:{
      background: "#4D7A97"
    },
    "install-packages":{
    	background: "#442e6f"
    },
    dotnetBuild:{
      background: "#2c8ebb"
    },
    "assert-folder-structure":{
    	background: "#534d61"
    }
  };
}
  static get contextTypes() {
  	return {
  		evaluation: PropTypes.object.isRequired,
  	  options: PropTypes.object.isRequired
  	};
  }

  getReport = () => {
  	let details = this.context.evaluation.evalFindings['stage::build'][this.context.options.setName];
  	return (
  		<Card initiallyExpanded={true} style={{margin: '5px 0'}}>
	      <CardHeader
	        style={this.styles[this.context.options.setName]}
	        title={Lookup.toScoreSectionNames(this.context.options.setName)}
	        titleStyle={{fontSize: "24px"}}
	        titleColor={grey50}
	        subtitle="validating project build and dependency management"
	        subtitleColor={"#bbbbbb"}
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
				this.context.evaluation.evalFindings['stage::build'] &&
				 this.getReport()}
			</div>
		)
	}
}
