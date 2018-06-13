import React from 'react';
import SubmissionHistory from '../../components/SubmissionHistory';

export default class SubmissionHistoryView extends React.Component{
  render(){
    return(
      <SubmissionHistory username={this.props.params.username} repoUrl={this.props.params.repoUrl}/>
    )
  }
}
