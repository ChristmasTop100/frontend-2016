import React from 'react';
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import SongsOverview from './containers/SongsOverview'

// TODO: make a function that checks auth state
const requireAuth = (nextState, replace) => {
  /* if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  } */
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SongsOverview} onEnter={requireAuth} />
    <Route path="login" component={Login} />
  </Route>
)

export default routes
