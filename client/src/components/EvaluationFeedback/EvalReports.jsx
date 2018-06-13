import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import EvalReportContextUtil from './EvalReportContextUtil';
import
  {
    JSBuildReportRenderer,
    JSRunReportRenderer,
    JSLintReportRenderer,
    JSTestsReportRenderer,
    JSBuildStageReportRenderer} from '../EvalReportRenderers/JSFSReports';

export default class EvalReports extends React.Component {
	constructor(props) {
  	super(props);

    this.styles = {
      pgTitle : {
        fontSize: "18px",
        margin: "10px auto auto 5px",
        padding: "0px",
        fontWeight: "600"
      }
    };
  }

  static propTypes = {
    evaluation: PropTypes.object.isRequired
  }

  getReportSectionMap = () => {
    return {
      "build": <JSBuildReportRenderer />,
      "stage::build": <JSBuildStageReportRenderer />,
      "run": <JSRunReportRenderer />,
      "lint": <JSLintReportRenderer />,
      "tests": <JSTestsReportRenderer />
    };
  }

  getReportSections = () => {
    let reports = '';
    if(this.props.evaluation.evalFindings) {
      reports = Object
      .keys(this.props.evaluation.evalFindings)
      .map((sectionKey) => {
        return (
          <div key={sectionKey}>
            <EvalReportContextUtil evaluation={this.props.evaluation}>
              { (this.getReportSectionMap()[sectionKey]) || <small>{' '}</small> }
            </EvalReportContextUtil>
          </div>
        );
      });
    }
    return reports;
  }

	render() {
		return (
			<Paper>
        {this.getReportSections()}
      </Paper>
	  )
	}
}
