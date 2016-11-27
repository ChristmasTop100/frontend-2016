import React, { Component } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import Song from '../Song'

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
      <Table style={{backgroundColor: 'rgba(12,12,12,0.95)'}}>
        <TableBody displayRowCheckbox={false}>
          {this.state.data.map((song, index) => (
            <Song
              key={`song-${index}`}
              index={index+1}
              image={song.image}
              artist={song.artist}
              title={song.title}
              url={song.url}
            />
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default SongsList
