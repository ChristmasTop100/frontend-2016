import React, { Component } from 'react';
import { connect } from 'react-redux'
import { receiveLogin } from '../../actions'
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import XmasAPI from '../../utils/XmasAPI'
import CircularElements from '../Login/CircularElements'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      emailError: null,
      passwordError: null,
      formError: null,
      showCircularElement: false
    }
  }

  handleLogin() {
    const username = this.refs.username
    const password = this.refs.password

    this.setState({ showCircularElements: true })

    XmasAPI.loginUser(username.getValue(), password.getValue())
      .then(json => {
        if (json.data.CreateSession) {
          this.setState({
            loaded: true,
            emailError: null,
            passwordError: null,
            formError: null,
            showCircularElements: false
          })

          this.props.dispatch(receiveLogin(json.data.CreateSession.token))
          browserHistory.push('/')
        }
        else {
          this.setState({
            showCircularElements: false
          })
          // Bad. validation or result not found.
          if (json.errors.length) {
            for (var i=0; i < json.errors.length; i++) {
              var error = json.errors[i];
              if (error.validation) {
                if (error.validation.email) {
                  this.setState({ emailError: error.validation.email[0] })
                }
                if (error.validation.password) {
                  this.setState({ passwordError: error.validation.password[0] })
                }
              }
              else if (error.message) {
                this.setState({
                  formError: error.message,
                  passwordError: null,
                  emailError: null
                })
              }
            }
          }

        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="Login">
        {this.state.formError &&
          <p className="FormError">{this.state.formError}</p>
        }
        { this.state.showCircularElements && <CircularElements /> }
        <TextField
          floatingLabelText="Username"
          fullWidth={true}
          required={true}
          ref="username"
          errorText={this.state.emailError}
        />
        <TextField
          floatingLabelText="Password"
          fullWidth={true}
          required={true}
          ref="password"
          type="password"
          errorText={this.state.passwordError}
        />
        <RaisedButton
          className="Submit"
          label="Login"
          primary={true}
          fullWidth={true}
          onClick={this.handleLogin}
        />
      </div>
    )
  }
}

export default connect()(Login)
