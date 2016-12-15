import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NumberIncrementer from '../../components/NumberIncrementer'
import './SongRow.css'
import XmasAPI from '../../utils/XmasAPI'

class SongRow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: props.song.votes.length > 0 ? props.song.votes[0].score : 0,
    }

    this.votePlus = this.votePlus.bind(this)
    this.voteMin = this.voteMin.bind(this)
  }

  votePlus() {
    if (this.state.score < 20 && this.props.totalVotes < 100) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.submitVote()
      this.props.onVote(this.props.totalVotes + 1)
    }
  }

  voteMin() {
    if (this.state.score > 0) {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.submitVote()
      this.props.onVote(this.props.totalVotes - 1)
    }
  }

  submitVote() {
    if (typeof this.timeout !== 'undefined') {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      XmasAPI.updateVote(this.props.song.id, this.state.score, this.props.token)
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
        })
    }, 500)
  }

  render() {
    const songId = this.props.song.url.replace('https://open.spotify.com/track/', '')

    return (
      <tr>
        <td className="Index">{this.props.songIndex}</td>
        <td className="Cover">
          <div>
            <img src={this.props.song.image} alt="" />
            <button className="Play" onClick={() => this.props.playHandler(songId)} />
          </div>
        </td>
        <td className="SongInfo">
          <div>{this.props.song.title}</div>
          <div>{this.props.song.artist}</div>
        </td>
        <td>
          <NumberIncrementer
            plusClick={this.votePlus}
            minClick={this.voteMin}
            value={this.state.score}
          />
        </td>
      </tr>
    )
  }
}

SongRow.propTypes = {
  playHandler: PropTypes.func.isRequired,
  song: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    votes: PropTypes.array,
  }).isRequired,
  songIndex: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  totalVotes: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  token: state.user.token,
})

export default connect(mapStateToProps)(SongRow)
