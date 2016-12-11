import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Background from '../Background'
import './App.css'
import logo from './logo.svg'

const App = ({ children }) => {
  const Title = (
    <div className="AppBarTitle">
      <img src={logo} alt="One Shoe" />
      <div>Christmas <strong>Top 100</strong></div>
    </div>
  )

  return (
    <div className="App">
      <Background />
      <AppBar
        title={Title}
        showMenuIconButton={false}
        style={{ backgroundColor: 'rgba(15,16,22,0.9)' }}
      />
      <main>{children}</main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
