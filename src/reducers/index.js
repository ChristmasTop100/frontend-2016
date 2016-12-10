import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from '../actions'

const initialState = {
  authenticated: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        authenticated: true,
        token: action.token
      }
    default:
      return state
  }
}

const christmasApp = combineReducers({
  user
})

export default christmasApp
