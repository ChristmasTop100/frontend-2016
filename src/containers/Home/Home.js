import React, { Component } from 'react'
import SongsTable from '../../containers/SongsTable'
import './Home.css'

class Home extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = { songId: '7nQrUXVzVeYb0hAuabfmaP' }
  }

  handleClick(songId) {
    this.setState({ songId })
  }

  render() {
    return (
      <div>
        <SongsTable onClick={this.handleClick} />
        <iframe
          className="SpotifyPlayer"
          src={`https://embed.spotify.com/?uri=spotify:track:${this.state.songId}`}
          frameBorder="0"
          allowTransparency="true"
          height="80"
        />
      </div>
    )
  }
}

export default Home
