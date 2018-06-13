import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

export default class LetterAvatar extends React.Component {
  state = {
    searchText: this.props.searchText,
  };

  static propTypes = {
    data: PropTypes.string.isRequired
  }

	hashCode = (str) => {
  	let hash = 0;
    for (let i = 0; i < str.length; i++) {
    	hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB = (i) =>{
  	let c = (i & 0x00FFFFFF)
  	.toString(16)
  	.toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }

	render() {
		let avatarColor = this.intToRGB(this.hashCode(this.props.data));

		return(
			<Avatar style={{"background":"#"+avatarColor}} title={this.props.data}>
			 {(this.props.data).substring(0,2).toUpperCase()}
      </Avatar>
		)
	}
}