import React,{Component} from 'react';
import PropTypes from 'prop-types';
import StatusBadge from './StatusBadge';

export default class EvaluationWorkFlowBadge extends Component{
  constructor(props) {
    super(props);

    this.colorCodes = {
      Completed: '#05da05',
      Blocked: '#ffc107',
      Failed: '#FF9988',
    }

    this.statusMap = {
      'Blocked': 'blocked',
      'Completed': 'completed',
      'Failed':'failed'
    }
  }

  static propTypes = {
    status: PropTypes.string.isRequired
  }

  getStatusValue = () => {

    let statusText = this.statusMap[this.props.status];

    if(!statusText) {
      statusText = 'unknown';
    }

    let status = {text: statusText, value: this.props.status};

    return status;
  }

  render() {
    return(
      <div>
        <StatusBadge colors={this.colorCodes} label={'status'} status={this.getStatusValue()}/>
      </div>
    )
  }
}
