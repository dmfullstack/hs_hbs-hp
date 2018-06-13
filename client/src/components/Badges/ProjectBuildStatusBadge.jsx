import React,{Component} from 'react';
import PropTypes from 'prop-types';
import StatusBadge from './StatusBadge';

export default class ProjectBuildStatusBadge extends Component{
  constructor(props) {
    super(props);

    this.colorCodes = {
      completed: '#05da05',
      failed:'#f44336',
      somefailed: '#ff9987'
    }

    this.statusMap = {
      'completed': 'building',
      'failed': 'failing',
      'somefailed': 'some-failing',
      'someunknown': 'some-unknown'
    }
  }

  static propTypes = {
    status: PropTypes.string.isRequired
  }

  getStatusValue = () => {
    let statusText = this.statusMap[this.props.status.toLowerCase()];

    if(!statusText) {
      statusText = 'unknown';
    }

    let status = {text: statusText, value: this.props.status.toLowerCase()};

    return status;
  }

  render() {
    return(
        <StatusBadge colors={this.colorCodes} label={'build'} status={this.getStatusValue()}/>
    )
  }
}
