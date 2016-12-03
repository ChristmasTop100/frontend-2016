import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './SongsTable.css';
import XmasAPI from '../../utils/XmasAPI'

class SongsTable extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      data: []
    }
  }

  componentDidMount() {
    XmasAPI.fetchSongs(this, function (json, context) {context.setState({
      loaded: true,
      data: json.data.Songs
    })}, function (error, context) {
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
                    <button className="Play" onClick={() => this.props.onClick(songId)} />
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
