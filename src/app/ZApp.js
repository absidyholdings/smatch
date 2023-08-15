import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'

import './ZApp.css'
import Shell from './shell/Shell';
import Login from './login/Login';
import {types, actions} from './ZActions';
import {fetchToken} from './ZClient';

class ZApp extends React.Component {

  getLoginRender() {
    return (
      <Login onLogin={this.props.getToken} pending={this.props.status === types.STATUS.PENDING}/>
    );
  }

  getShellRender() {
    return (
      <Shell token={this.props.token}/>
    );
  }

  getSpinner() {
    return (
      <div id="spinner">
        <Spinner animation="border" variant="primary" role="status"/>
      </div>
    );
  }

  render() {
    const {status, error, token} = this.props;
    console.log(`ZApp::status:${status}, error:${error}, token:${token}`);

    switch (status) {
      case types.STATUS.STANDBY:
        if (token) {
          return this.getShellRender();
        } else {
          return this.getLoginRender();
        }
      case types.STATUS.PENDING:
        return this.getSpinner();
      case types.STATUS.ERROR:
        console.error(error);
        return this.getLoginRender();
      default:
        console.error(`Status: ${status} not recognized.`);
        return this.getLoginRender();
    }
  }
};

const mapStateToProps = (state) => {
  return Object.assign({}, {
    status: state.app.status,
    error: state.app.error,
    token: state.app.token
  });
};

const mapDispatchToProps = (dispatch) => {
  return Object.assign({}, {
    getToken: (email, password) => {
      dispatch(actions.getTokenPending());
      fetchToken(email, password).then((token) => {
        dispatch(actions.getTokenSuccess(token));
      }).catch((error) => {
        dispatch(actions.getTokenFailure("fetchToken failed."));
      });
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ZApp);
