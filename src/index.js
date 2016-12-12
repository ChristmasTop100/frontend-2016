import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Router, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { redA400 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import christmasApp from './reducers'
import getRoutes from './routes'
import './index.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA400,
  },
})

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(christmasApp, undefined, composeEnhancers(
  applyMiddleware(),
  autoRehydrate(),
))
const routes = getRoutes(store)

class AppProvider extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={browserHistory} routes={routes} />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<AppProvider />, document.getElementById('root'))
