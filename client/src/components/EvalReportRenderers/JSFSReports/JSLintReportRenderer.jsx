import React from 'react';
import PropTypes from 'prop-types';

import EvalReportRendererContextUtil from '../EvalReportRendererContextUtil';
import JSEslintReportRenderer from './JSEslintReportRenderer';
import JSHtmlhintReportRenderer from './JSHtmlhintReportRenderer';
export default class JSTestsReportRenderer extends React.Component {

	static get contextTypes() {
  	return { evaluation: PropTypes.object.isRequired };
  }

  getTestReportRendererMap = () => {
    return {
      "eslint": <JSEslintReportRenderer/>,
      "tslint": <JSEslintReportRenderer/>,
      "smells": <JSEslintReportRenderer/>,
	    "htmlhint": <JSHtmlhintReportRenderer/>,
	    "pmd": <JSEslintReportRenderer/>
    };
  }

	render() {
		return (
			<div>
				{
					this.context.evaluation &&
					this.context.evaluation.evalFindings &&
					this.context.evaluation.evalFindings.lint &&
					Object.keys(this.context.evaluation.evalFindings.lint)
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
