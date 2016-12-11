import React, { Component, PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import SongRow from '../../containers/SongRow'
import XmasAPI from '../../utils/XmasAPI'
import './SongsTable.css'

class SongsTable extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      data: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    XmasAPI.fetchSongs()
      .then((json) => {
        this.setState({
          loaded: true,
          data: json.data.Songs,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (!this.state.loaded) {
      return <CircularProgress size={80} thickness={5} />
    }

    return (
      <table className="SongsTable">
        <thead>
          <tr>
            <th />
            <th>SONG</th>
            <th />
            <th>VOTES</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((song, index) => {
            const songIndex = index + 1
            return (
              <SongRow song={song} songIndex={songIndex} key={`song-${songIndex}`} playHandler={this.props.onClick} />
            )
          })}
        </tbody>
      </table>
    )
  }
}

SongsTable.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SongsTable
