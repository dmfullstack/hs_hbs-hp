import React from 'react';
import EvalFeedback from '../../components/EvaluationFeedback';

export default class FeedbackDashboard extends React.Component {
	render() {
		return (
			<EvalFeedback
				repoUrl={this.props.params.repoUrl}
				repoRef={this.props.params.repoRef || 'master' }
				repoReftype={this.props.params.repoReftype || 'branch' }
				uname={this.props.params.uname || ''} />
		)
	}
}
