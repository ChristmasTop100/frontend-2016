export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const receiveLogin = token => ({
  type: LOGIN_SUCCESS,
  token,
  isAuthenticated: true,
})
