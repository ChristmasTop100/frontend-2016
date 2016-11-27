import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
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
    fetch(`http://back.christmastop100.nl/graphql?query=${query}`)
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
      <Table style={{backgroundColor: 'rgba(12,12,12,0.95)'}}>
        <TableBody displayRowCheckbox={false}>
          {this.state.data.map((song, index) => {
            const trackId = song.url.replace('https://open.spotify.com/track/', '')
            return (
              <TableRow key={`Song-${index}`} style={{color: 'white', borderColor: 'rgba(255,255,255,0.025)'}}>
                <TableRowColumn
                  style={{width: '50px', fontSize: '30px', fontWeight: '300'}}
                >
                  {index+1}
                </TableRowColumn>
                <TableRowColumn style={{width: 80, padding: 0}}>
                  <img
                    src={song.image}
                    width="80"
                    height="80"
                    alt=""
                    style={{display: 'block'}}
                  />
                </TableRowColumn>
                <TableRowColumn style={{lineHeight: 1.3}}>
                  <div style={{fontSize: '24px'}}>{song.title}</div>
                  <div style={{fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.7)'}}>{song.artist}</div>
                </TableRowColumn>
                <TableRowColumn style={{padding: '15px'}}>
                  <iframe
                    src={`https://embed.spotify.com/?uri=spotify:track:${trackId}`}
                    width="250"
                    height="80"
                    frameBorder="0"
                    allowTransparency="true"
                    style={{display: 'block', float: 'right'}}
                  />
                </TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}

export default SongsList
