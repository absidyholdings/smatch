import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {TransitionGroup, CSSTransition} from 'react-transition-group'

import './Shell.css';
import Header from './header/Header'
import Dashboard from './dashboard/Dashboard'
import Sessions from './sessions/Sessions'
import Profile from './profile/Profile'

export default class Shell extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header token={this.props.token}/>
            <Dashboard/>
          </Route>
          <Route path="/sessions">
            <Header token={this.props.token}/>
            <Sessions/>
          </Route>
          <Route path="/profile">
            <Header token={this.props.token}/>
            <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
