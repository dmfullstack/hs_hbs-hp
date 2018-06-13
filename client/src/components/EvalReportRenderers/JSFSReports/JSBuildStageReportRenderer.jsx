import React from 'react';
import PropTypes from 'prop-types';

import EvalReportRendererContextUtil from '../EvalReportRendererContextUtil';
import DefaultBuildReportRenderer from './DefaultBuildReportRenderer';

export default class JSBuildStageReportRenderer extends React.Component {

	static get contextTypes() {
  	return { evaluation: PropTypes.object.isRequired };
  }

  getBuildReportRendererMap = () => {
    return {
      "build": <DefaultBuildReportRenderer/>,
      "UIAppbuild": <DefaultBuildReportRenderer/>,
      "javabuild": <DefaultBuildReportRenderer/>,
      "install-packages": <DefaultBuildReportRenderer/>,
      "assert-folder-structure": <DefaultBuildReportRenderer/>,
      "dotnetBuild": <DefaultBuildReportRenderer/>
    };
  }

	render() {
		return (
			<div>
				{
					this.context.evaluation &&
					this.context.evaluation.evalFindings &&
					this.context.evaluation.evalFindings['stage::build'] &&
					Object.keys(this.context.evaluation.evalFindings['stage::build'])
					.map( (buildSetName, index) => {
						return (
							<div key={index}>
							<EvalReportRendererContextUtil
								options={{setName: buildSetName}}
								evaluation={this.context.evaluation}>

								{ (this.getBuildReportRendererMap()[buildSetName]) || <small>{''}</small> }

							</EvalReportRendererContextUtil>
							</div>
						)
					})
				}
			</div>
		)
	}
}
