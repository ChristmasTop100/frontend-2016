import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css'

class Login extends Component {
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
        />
      </div>
    );
  }
}

export default Login
