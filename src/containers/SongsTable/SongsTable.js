import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './SongsTable.css'

class SongsTable extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      data: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const query = `{
      Songs {
        artist,
        title,
        image,
        url
      }
    }`
    fetch(`https://back.christmastop100.nl/graphql?query=${query}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          data: json.data.Songs
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderLoadingView() {
    return (
      <div>
        <CircularProgress size={80} thickness={5} />
      </div>
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <table className="SongsTable">
        <thead>
          <tr>
            <th></th>
            <th>SONG</th>
            <th></th>
            <th>VOTES</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((song, index) => {
            const songIndex = index+1
            const songId = song.url.replace('https://open.spotify.com/track/', '')

            return (
              <tr key={`song-${index}`}>
                <td className="Index">{songIndex}</td>
                <td className="Cover">
                  <div>
                    <img src={song.image} alt="" />
                    <span className="Play" onClick={() => this.props.onClick(songId)}></span>
                  </div>
                </td>
                <td className="SongInfo">
                  <div>{song.title}</div>
                  <div>{song.artist}</div>
                </td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default SongsTable
