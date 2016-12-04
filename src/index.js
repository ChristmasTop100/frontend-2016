import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {redA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import routes from './routes'
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA400
  }
})

const AppProvider = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
)

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root')
);
