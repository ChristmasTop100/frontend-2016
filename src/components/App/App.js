import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Background from '../Background';
import SongsList from '../../containers/SongsList';
import logo from './logo.svg'

const appBarStyle = {
  backgroundColor: '#0f1016',
}

const mainStyle = {
  maxWidth: '1110px',
  margin: '60px auto',
  padding: '0 15px'
}

class App extends Component {
  render() {
    const Title = (
      <div>
        <img style={{marginRight: '12px'}} src={logo} alt="One Shoe" />
        <span style={{color: '#ed215d', fontSize: '23px', fontWeight: '300'}}>
          Christmas <span style={{fontWeight: '500'}}>Top 100</span>
        </span>
      </div>
    )

    return (
      <div className="App">
        <Background />
        <AppBar
          title={Title}
          showMenuIconButton={false}
          style={appBarStyle}
        />
        <main style={mainStyle}>
          <SongsList />
        </main>
      </div>
    );
  }
}

export default App;
