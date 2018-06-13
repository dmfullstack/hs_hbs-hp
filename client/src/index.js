import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import cookie from 'react-cookie';
// import request from 'superagent';

import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginView from './views/Login';
import App from './views/App';
import SubmissionDashboard from './views/Submission';
import FeedbackDashboard from './views/Feedback';
import SubmissionListDashboard from './views/SubmissionList';
import SubmissionHistoryView from './views/SubmissionHistoryView';
import SubmissionListView from './views/MySubmissionView';
import SubmissionTimelineStatsView from './views/Graphs';

injectTapEventPlugin();

let redirectIfLoggedIn = function(nextState, replace, next) {
  const jwt = cookie.load('jwt', {path:'/'});

  if(jwt) {
    //Redirect to dashboard if already logged in
    replace('/app');
  }
  next();
}

let authCheck = function(nextState, replace, next) {
  const jwt = cookie.load('jwt');
  if(!jwt) {
    replace('/'); //redirect for login
    return;
  } else {
    //Check if token is still valid or need to be refreshed
  }
  next();
}

let logout = function(nextState, replace, next) {
  const jwt = cookie.load('jwt');
  if(jwt) {
    replace('/');
    cookie.remove('jwt');
  }
  next();
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <Router history={hashHistory}>
        <Route path="/" component={LoginView} onEnter={redirectIfLoggedIn}/>
        <Route path="/logout" component={LoginView} onEnter={logout}/>
        <Route path="/app" component={App} onEnter={authCheck}>
            <IndexRoute component={SubmissionDashboard} />
            <Route path="/submission" component={SubmissionDashboard} onEnter={authCheck}/>
            <Route path="/submissionHistory/:username/:repoUrl" component={SubmissionHistoryView} onEnter={authCheck}/>
            <Route path="/feedback(/:repoUrl)(/:repoRef)(/:repoReftype)" component={FeedbackDashboard} onEnter={authCheck}/>
            <Route path="/feedbackreport/:repoUrl(/:uname)(/:repoRef)(/:repoReftype)" component={FeedbackDashboard} onEnter={authCheck}/>
            <Route path="/pastsubmissions" component={SubmissionListView} onEnter={authCheck}/>
            <Route path="/tracksubmissions" component={SubmissionListDashboard} onEnter={authCheck}/>
            <Route path="/stats" component={SubmissionTimelineStatsView} onEnter={authCheck}/>
        </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
