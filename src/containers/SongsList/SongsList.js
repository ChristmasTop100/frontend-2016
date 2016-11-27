import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

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
        <table style={{backgroundColor: 'rgba(12,12,12,0.95)', width: '100%', color: 'white', borderCollapse: 'collapse'}}>
          <thead style={{letterSpacing: '4px', color: '#3a3e53', fontWeight: 700, fontSize: '12px', textAlign: 'left'}}>
            <tr style={{borderBottom: '1px solid rgba(255,255,255,0.025)'}}>
              <th style={{height: '50px', width: '100px'}}></th>
              <th style={{height: '50px', width: '80px'}}>SONG</th>
              <th style={{height: '50px'}}></th>
              <th style={{height: '50px'}}>VOTES</th>
              <th style={{height: '50px'}}>PLAY</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((song, index) => {
              const trackId = song.url.replace('https://open.spotify.com/track/', '')
              return (
                <tr key={`song-${index}`} style={{borderBottom: '1px solid rgba(255,255,255,0.025)'}}>
                  <td style={{
                    fontSize: '30px',
                    fontWeight: '300',
                    color: 'rgba(255,255,255,0.7)',
                    padding: '15px 24px'
                  }}>{index+1}</td>
                  <td style={{padding: '15px 0'}}><img style={{display: 'block'}} src={song.image} width="80" height="80" alt="" /></td>
                  <td style={{lineHeight: 1.3, fontSize: '24px', padding: '0 24px'}}>
                    <div>{song.title}</div>
                    <div style={{fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.7)'}}>{song.artist}</div>
                  </td>
                  <td></td>
                  <td>
                    <iframe
                      src={`https://embed.spotify.com/?uri=spotify:track:${trackId}`}
                      width="250"
                      height="80"
                      frameBorder="0"
                      allowTransparency="true"
                      style={{display: 'block'}}
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
