import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Background from '../Background';
import SongsList from '../../containers/SongsList';
import logo from './logo.svg'

const styles = {
  appBar: {
    backgroundColor: 'rgba(15,16,22,0.95)'
  },
  logo: {
    marginRight: '10px'
  },
  title: {
    display: 'inline',
    color: '#ed215d',
    fontSize: '23px',
    fontWeight: '300'
  },
  main: {
    maxWidth: '1110px',
    margin: '60px auto',
    padding: '0 15px'
  },
  strong: {
    fontWeight: 500
  }
}

class App extends Component {
  render() {
    const Title = (
      <div>
        <img style={styles.logo} src={logo} alt="One Shoe" />
        <div style={styles.title}>
          Christmas <span style={styles.strong}>Top 100</span>
        </div>
      </div>
    )

    return (
      <div className="App">
        <Background />
        <AppBar
          title={Title}
          showMenuIconButton={false}
          style={styles.appBar}
        />
        <main style={styles.main}>
          <SongsList />
        </main>
      </div>
    );
  }
}

export default App;
