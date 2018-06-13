import React from 'react';
import PropTypes from 'prop-types';

export default class EvalReportContextUtil extends React.Component {
  static propTypes = {
    evaluation: PropTypes.object,
    children: PropTypes.node
  }

  static childContextTypes = {
    evaluation: PropTypes.object.isRequired
  };

  getChildContext() {
    return {evaluation: this.props.evaluation};
  }

  render() {
    return this.props.children;
  }
}
