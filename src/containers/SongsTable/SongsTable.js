import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { redA400 } from 'material-ui/styles/colors'
import SongRow from '../../containers/SongRow'
import XmasAPI from '../../utils/XmasAPI'
import './SongsTable.css'

class SongsTable extends Component {
  constructor() {
    super()
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTotalVotes = this.handleTotalVotes.bind(this)
    this.state = {
      loaded: false,
      data: [],
      open: false,
      totalVotes: 0,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    XmasAPI.fetchSongs(this.props.token)
      .then((json) => {
        let totalVotes = 0
        for (let i = 0; i < json.data.Songs.length; i += 1) {
          if (json.data.Songs[i].votes.length > 0) {
            totalVotes += json.data.Songs[i].votes[0].score
          }
        }
        this.setState({
          loaded: true,
          data: json.data.Songs,
          totalVotes,
        })
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error)
      })
  }

  handleRequestClose() {
    this.setState({ open: false })
  }

  handleTotalVotes(totalVotes) {
    if (totalVotes !== 100) {
      this.setState({ totalVotes })
    } else {
      this.setState({ open: true, totalVotes })
    }
  }

  render() {
    if (!this.state.loaded) {
      return <CircularProgress size={80} thickness={5} />
    }

    const votesLeft = 100 - this.state.totalVotes
    return (
      <div>
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
                <SongRow
                  song={song}
                  songIndex={songIndex}
                  key={`song-${songIndex}`}
                  playHandler={this.props.onClick}
                  onVote={this.handleTotalVotes}
                  totalVotes={this.state.totalVotes}
                />
              )
            })}
          </tbody>
        </table>
        <div
          className="VotesLeftCounter"
          style={{ backgroundColor: redA400 }}
        >
          Votes left <span>{votesLeft}</span>
        </div>
        <Snackbar
          open={this.state.open}
          message="Total amount of 100 votes reached"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{ backgroundColor: redA400 }}
        />
      </div>
    )
  }
}

SongsTable.propTypes = {
  onClick: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  token: state.user.token,
})

export default connect(mapStateToProps)(SongsTable)
