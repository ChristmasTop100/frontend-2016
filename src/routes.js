import React from 'react'
import { IndexRoute, Route } from 'react-router'
import jwtDecode from 'jwt-decode'
import App from './components/App'
import Login from './containers/Login'
import OneTimeLogin from './containers/OneTimeLogin'
import Home from './containers/Home'

const getRoutes = (store) => {
  const requireAuth = (nextState, replace) => {
    const user = store.getState().user
    if (!user.authenticated || jwtDecode(user.token).exp < Math.floor(Date.now() / 1000)) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      })
    }
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
      <Route path="auth/otl/:token" component={OneTimeLogin} />
    </Route>
  )
}


export default getRoutes
