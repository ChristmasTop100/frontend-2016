export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

export const receiveLogin = token => ({
  type: LOGIN_SUCCESS,
  token,
  isAuthenticated: true,
})

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
})
