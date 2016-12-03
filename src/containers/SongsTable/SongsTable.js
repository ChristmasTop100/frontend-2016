import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './SongsTable.css'
import SongRow from '../../containers/SongRow';

class SongsTable extends Component {
  constructor() {
    super();
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
        url,
        votes {
          score  
        }
      }
    }`
    fetch(`http://xmas.app/graphql?query=${query}`, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
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
            const songIndex = index + 1;
            return (
                <SongRow song={song} songIndex={songIndex} key={`song-${songIndex}`} playHandler={this.props.OnClick}/>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default SongsTable
