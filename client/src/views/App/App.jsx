import React from 'react';
import NavBar from './NavBar'
// import request from 'superagent';
import cookie from 'react-cookie';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myprofile: undefined
    };
  }

  componentDidMount() {
    let userProfile = this.getUserProfile();
    this.setState({myprofile: userProfile});
  }

  getUserProfile = () => {
    let token = cookie.load('jwt', {path:'/'});
    let tokenStr = token.split('.')[1];
    tokenStr = tokenStr.replace('-', '+').replace('_', '/');
    let userProfile = JSON.parse(window.atob(tokenStr));
    return userProfile;
  }

  gotoRoleBasedDashboard = () => {
    switch (this.state.myprofile.role) {
      case 'CADET':
        this.props.router.push('/submission');
        break;
      case 'COMMANDER':
        this.props.router.push('/submission');
        break;
      default:
        this.props.router.push('/');
        break;
    }
  }

	render() {
		return (
			<div>
				{ (this.state.myprofile) ? <NavBar userprofile={this.state.myprofile}/> : '' }
        <div>
          {this.props.children}
        </div>
        <div>
          {
            /*(this.state.myprofile) ? this.gotoRoleBasedDashboard() : ''*/
          }
        </div>
				{/*<footer>
					<div>
						@StackRoute
					</div>
				</footer>*/}
			</div>
		);
	}
}