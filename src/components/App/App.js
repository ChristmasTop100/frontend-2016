import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { redA400 } from 'material-ui/styles/colors'
import Background from '../Background'
import './App.css'

const App = ({ children }) => {
  const Title = (
    <div className="AppBarTitle">
      <div className="Logo" />
      <div className="Title" style={{ color: redA400 }}>Christmas <strong>Top 100</strong></div>
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
