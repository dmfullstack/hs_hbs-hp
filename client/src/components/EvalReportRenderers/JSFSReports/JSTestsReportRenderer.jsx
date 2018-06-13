import React from 'react';
import PropTypes from 'prop-types';

import EvalReportRendererContextUtil from '../EvalReportRendererContextUtil';
import JSMochaTestsReportRenderer from './JSMochaTestsReportRenderer';

export default class JSTestsReportRenderer extends React.Component {

	static get contextTypes() {
  	return { evaluation: PropTypes.object.isRequired };
  }

  getTestReportRendererMap = () => {
    return {
      "cadetTests": <JSMochaTestsReportRenderer />,
      "cadetUIUnitTests": <JSMochaTestsReportRenderer />,
		  "commanderUIUnitTests": <JSMochaTestsReportRenderer />,
      "cadete2etests": <JSMochaTestsReportRenderer />,
		  "commandere2etests": <JSMochaTestsReportRenderer />,
      "commanderTests": <JSMochaTestsReportRenderer />,
	    "cadetUITests": <JSMochaTestsReportRenderer />,
      "commanderUITests": <JSMochaTestsReportRenderer />,
    };
  }

	render() {
		return (
			<div>
				{
					this.context.evaluation &&
					this.context.evaluation.evalFindings &&
					this.context.evaluation.evalFindings.tests &&
					Object.keys(this.context.evaluation.evalFindings.tests)
					.map( (testSetName, index) => {
						return (
							<div key={index}>
							<EvalReportRendererContextUtil
								options={{setName: testSetName}}
								evaluation={this.context.evaluation}>

								{ (this.getTestReportRendererMap()[testSetName]) || <small>{''}</small> }

							</EvalReportRendererContextUtil>
							</div>
						)
					})
				}
			</div>
		)
	}
}
