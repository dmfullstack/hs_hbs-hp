import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
// import cookie from 'react-cookie';
import { hashHistory } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionTrackChanges from 'material-ui/svg-icons/action/track-changes';
import ActionTrackAssignment from 'material-ui/svg-icons/action/view-list'
import MultiLineChart from 'material-ui/svg-icons/editor/multiline-chart';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
      popopen: false
    };
    this.grantsToNavMap = {
      'ASSIGNMENT_SELF_SUBMIT': {
        name: "Submission",
        linkTo: "/submission",
        icon: () => { return <ActionDashboard /> }
      },
      'EVALUATION_SELF_READ': {
        name: "Feedback",
        linkTo: "/feedback/",
        icon: () => { return <ActionAssignment /> }
      },
      'EVALUATION_SELF_LIST':{
        name: "My Past Submissions",
        linkTo: "/pastsubmissions",
        icon: () => { return <ActionTrackAssignment />}
      },
      'EVALUATION_CADET_READ': {
        name: "Track Submissions",
        linkTo: "/tracksubmissions/",
        icon: () => { return <ActionTrackChanges /> }
      },
      'VIEW_SUBMISSION_WORKFLOW_STATS': {
        name: "Submission Stats",
        linkTo: "/stats/",
        icon: () => { return <MultiLineChart /> }
      }
    };
    this.styles = {
      avatarTitle: {
        margin: "auto 10px auto auto",
        color: "#fff",
        verticalAlign: "super"
      }
    };
  }

  static propTypes = {
    userprofile: PropTypes.object.isRequired
  }

  handleDrawerClose = () => this.setState({drawerOpen:false});

  getMyAvatar = () => {
    if(!this.props.userprofile) {
      return <small>{' '}</small>
    }
    return (
      <div>
          <span style={this.styles.avatarTitle}>{this.props.userprofile.name}</span>
          <IconMenu
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
            iconButtonElement={
              <FloatingActionButton mini={true}>
                <img src={this.props.userprofile.avatar} style={{width: '100%'}} alt={'user avatar'}/>
              </FloatingActionButton>}>
              <Link to="/logout" style={{textDecoration:"none"}} onTouchTap={this.handleDrawerClose}>
                <MenuItem leftIcon={<ActionExitToApp />}>
                  Logout
                </MenuItem>
              </Link>
          </IconMenu>
      </div>    )
  }

  getMyAvtarCard = () => {
    return <Card>
      <CardMedia
        overlay={<CardHeader
                  subtitle={this.props.userprofile.email}
                  title={this.props.userprofile.name}
                  avatar={this.props.userprofile.avatar}/>}>
        <img src={this.props.userprofile.avatar} style={{width: '100%'}} alt={'user avatar'}/>
      </CardMedia>
    </Card>
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={{cursor: 'pointer'}} onTouchTap={() => {hashHistory.push('/submission')}}>Hobbes</span>}
          onLeftIconButtonTouchTap={() => { this.setState({drawerOpen: true}); }}
          iconElementRight={ this.getMyAvatar() }
        />
        {this.state.drawerOpen}
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={() => { this.setState({drawerOpen: false}); }} >

            <div>
              { this.props.userprofile ? this.getMyAvtarCard() : null }
            </div>
            <Divider />
            {
              this.props.userprofile.grants.map( (grant, index) => {
                return (
                  <Link key={index} to={this.grantsToNavMap[grant].linkTo} style={{textDecoration:"none"}} onTouchTap={this.handleDrawerClose}>
                    <MenuItem leftIcon={this.grantsToNavMap[grant].icon()}>
                      {this.grantsToNavMap[grant].name}
                    </MenuItem>
                  </Link>
                )
              })
            }

        </Drawer>
      </div>
    );
  }
}
