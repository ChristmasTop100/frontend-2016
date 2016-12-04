import React, { Component } from 'react';
import { connect } from 'react-redux'
import { requestLogin } from '../../actions'
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css'

class Login extends Component {
  handleLogin() {
    this.props.dispatch(requestLogin())
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="Login">
        <TextField
          floatingLabelText="Username"
          fullWidth={true}
        />
        <TextField
          floatingLabelText="Password"
          fullWidth={true}
        />
        <RaisedButton
          className="Submit"
          label="Login"
          primary={true}
          fullWidth={true}
          onClick={() => { this.handleLogin() }}
        />
      </div>
    );
  }
}

export default connect()(Login)
