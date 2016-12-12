import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { receiveLogin } from '../../actions'
import XmasAPI from '../../utils/XmasAPI'
import CircularElements from '../Login/CircularElements'
import './OneTimeLogin.css'

class OneTimeLogin extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      emailError: null,
      passwordError: null,
      formError: null,
      showCircularElement: false,
    }
  }

  handleLogin() {
    const username = this.usernameInput
    const password = this.passwordInput
    const token = this.props.params.token

    this.setState({ showCircularElements: true })

    XmasAPI.oneTimeLogin(username.getValue(), password.getValue(), token)
      .then((json) => {
        if (json.data.UpdateUser) {
          this.setState({
            loaded: true,
            emailError: null,
            passwordError: null,
            formError: null,
            showCircularElements: false,
          })

          XmasAPI.loginUser(username.getValue(), password.getValue())
            .then((loginJson) => {
              if (loginJson.data.CreateSession) {
                this.props.dispatch(receiveLogin(loginJson.data.CreateSession.token))
                browserHistory.push('/')
              } else {
                // If automatic login doesn't work, let the user try himself.
                browserHistory.push('/login')
              }
            })
        } else {
          this.setState({ showCircularElements: false })
          // Bad. validation or result not found.
          if (json.errors.length) {
            for (let i = 0; i < json.errors.length; i += 1) {
              const error = json.errors[i]
              if (error.validation) {
                if (error.validation.email) {
                  this.setState({ emailError: error.validation.email[0] })
                }
                if (error.validation.password) {
                  this.setState({ passwordError: error.validation.password[0] })
                }
              } else if (error.message) {
                this.setState({
                  formError: error.message,
                  passwordError: null,
                  emailError: null,
                })
              }
            }
          }
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
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
          floatingLabelText="Email address"
          fullWidth
          required
          ref={(input) => { this.usernameInput = input }}
          errorText={this.state.emailError}
        />
        <TextField
          floatingLabelText="Choose a password"
          fullWidth
          required
          ref={(input) => { this.passwordInput = input }}
          type="password"
          errorText={this.state.passwordError}
        />
        <RaisedButton
          className="Submit"
          label="Activate account"
          primary
          fullWidth
          onClick={this.handleLogin}
        />
      </div>
    )
  }
}

OneTimeLogin.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.objectOf(PropTypes.string),
}

export default connect()(OneTimeLogin)
