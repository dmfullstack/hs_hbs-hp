import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

export default class UsersList extends React.Component {
	constructor(){
		super();
	  this.styles = {
	    chip: {
	      margin: 4,
	    },
	    wrapper: {
	      display: 'flex',
	      flexWrap: 'wrap'
	    },
	    background:{
	    	margin: "5px auto auto 5px",
	    	height: "150px",
	    	maxHeight: "100%",
	      minHeight: "80%",
	      background: "#efefef",
	      overflow: 'auto'
	    }
	  }
	}

	static propTypes = {
    userColln: PropTypes.array.isRequired,
    onUpdateSelect: PropTypes.func.isRequired,
    //onRemoveUser: PropTypes.func.isRequired
  }

  handleRemoveMemberInList = (index) => {

    this.props.onUpdateSelect(index);
  }

  getMembersInChip = () => {

   return this.props.userColln.map((users, index) => {
      return (
      	<Col style={this.styles.wrapper} key={index}>
	        <Chip
	          onRequestDelete={this.handleRemoveMemberInList.bind(this, index)}
	          style={this.styles.chip}
	        >
	          <Avatar src={(users && users.avatarUrl) ? users.avatarUrl : ""} />
	          { users.username }
	        </Chip>
      </Col>
      )
    })
  }

	render(){
		return(
			<div style={this.styles.background}>
			  <Grid fluid>
			    <Row>
			      { this.getMembersInChip()}
			    </Row>
			  </Grid>
		  </div>
		)
	}
}