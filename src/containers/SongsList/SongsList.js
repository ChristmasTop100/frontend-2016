import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  table: {
    backgroundColor: 'rgba(12,12,12,0.95)',
    width: '100%',
    color: 'white',
    borderCollapse: 'collapse'
  },
  thead: {
    letterSpacing: '4px',
    color: '#3a3e53',
    fontWeight: 700,
    fontSize: '12px',
    textAlign: 'left'
  },
  tr: {
    borderBottom: '1px solid rgba(255,255,255,0.025)',
    lineHeight: 0.6
  },
  indexCol: {
    width: '100px'
  },
  songCol: {
    padding: '15px 0'
  },
  index: {
    fontSize: '30px',
    fontWeight: '300',
    color: 'rgba(255,255,255,0.7)',
    padding: '15px 24px'
  },
  imageHolder: {
    padding: '15px 0'
  },
  image: {
    display: 'block',
    width: '80px',
    height: '80px'
  },
  song: {
    lineHeight: 1.3,
    fontSize: '24px',
    padding: '0 24px'
  },
  artist: {
    fontSize: '16px',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.7)'
  },
  spotifyPlayer: {
    display: 'block'
  }
}

class SongsList extends Component {
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
    }`.replace(/\s+/g, '');
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

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <CircularProgress size={80} thickness={5} />
        </div>
      )
    }
    return (
      <div>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr style={styles.tr}>
              <th style={styles.indexCol}></th>
              <th style={styles.songCol}>SONG</th>
              <th></th>
              <th>VOTES</th>
              <th>PLAY</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((song, index) => {
              const trackId = song.url.replace('https://open.spotify.com/track/', '')
              return (
                <tr key={`song-${index}`} style={styles.tr}>
                  <td style={styles.index}>{index+1}</td>
                  <td style={styles.imageHolder}>
                    <img style={styles.image} src={song.image} alt="" />
                  </td>
                  <td style={styles.song}>
                    <div>{song.title}</div>
                    <div style={styles.artist}>{song.artist}</div>
                  </td>
                  <td></td>
                  <td>
                    <iframe
                      src={`https://embed.spotify.com/?uri=spotify:track:${trackId}`}
                      width="250"
                      height="80"
                      frameBorder="0"
                      allowTransparency="true"
                      style={styles.spotifyPlayer}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SongsList
