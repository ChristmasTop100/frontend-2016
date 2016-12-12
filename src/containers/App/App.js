import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { redA400 } from 'material-ui/styles/colors'
import { requestLogout } from '../../actions'
import Background from '../../components/Background'
import './App.css'

const App = ({ children, dispatch }) => {
  const Title = (
    <div className="AppBarTitle">
      <div className="Logo" />
      <div className="Title" style={{ color: redA400 }}>Christmas <strong>Top 100</strong></div>
    </div>
  )

  const isHome = children.props.location.pathname === '/'
  return (
    <div className="App">
      <Background />
      <AppBar
        title={Title}
        showMenuIconButton={false}
        iconElementRight={
          isHome ?
            <FlatButton
              label="Logout"
              onClick={() => {
                dispatch(requestLogout())
                browserHistory.push('/login')
              }}
            />
          : <div />
        }
        style={{ backgroundColor: 'rgba(15,16,22,0.9)' }}
      />
      <main>{children}</main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
