import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Background from '../Background';
import SongsTable from '../../containers/SongsTable';
import './App.css'
import logo from './logo.svg'

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = { songId: '7nQrUXVzVeYb0hAuabfmaP' }
  }

  handleClick(songId) {
    console.log(songId)
    this.setState({ songId })
  }

  render() {
    const Title = (
      <div className="AppBarTitle">
        <img src={logo} alt="One Shoe" />
        <div>
          Christmas <strong>Top 100</strong>
        </div>
      </div>
    )

    return (
      <div className="App">
        <Background />
        <AppBar
          title={Title}
          showMenuIconButton={false}
          style={{backgroundColor: 'rgba(15,16,22,0.9)'}}
        />
        <main>
          <SongsTable onClick={this.handleClick} />
        </main>
        <iframe
          className="SpotifyPlayer"
          src={`https://embed.spotify.com/?uri=spotify:track:${this.state.songId}`}
          frameBorder="0"
          allowTransparency="true"
          height="80"
        />
      </div>
    );
  }
}

export default App;
