import { combineReducers } from 'redux'
import { LOGIN_REQUEST } from '../actions'

const initialState = {
  authenticated: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        authenticated: true
      }
    default:
      return state
  }
}

const christmasApp = combineReducers({
  user
})

export default christmasApp
