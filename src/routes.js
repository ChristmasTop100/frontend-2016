import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Login from './containers/Login'
import OneTimeLogin from './containers/OneTimeLogin'
import Home from './containers/Home'


const getRoutes = (store) => {
  const requireAuth = (nextState, replace) => {
    const state = store.getState()
    if (!state.user.authenticated) {
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
      <Route path="auth/otl/*" component={OneTimeLogin} />
    </Route>
  )
}


export default getRoutes
