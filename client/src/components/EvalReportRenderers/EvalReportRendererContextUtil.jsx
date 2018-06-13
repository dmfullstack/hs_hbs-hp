import React from 'react';
import PropTypes from 'prop-types';

export default class EvalReportRendererContextUtil extends React.Component {
  static propTypes = {
    evaluation: PropTypes.object,
    options: PropTypes.object,
    children: PropTypes.node
  }

  static childContextTypes = {
    evaluation: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      evaluation: this.props.evaluation,
      options: this.props.options
    };
  }

  render() {
    return this.props.children;
  }
}
