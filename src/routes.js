import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Login from './containers/Login'
import SongsOverview from './containers/SongsOverview'

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
      <IndexRoute component={SongsOverview} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}


export default getRoutes
