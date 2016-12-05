import React, { Component } from 'react';
import NumberIncrementer from '../../components/NumberIncrementer'
import './SongRow.css'

class SongRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: props.song.votes.length > 0 ? props.song.votes[0].score : 0
    }

    this.votePlus = this.votePlus.bind(this);
    this.voteMin = this.voteMin.bind(this);
  }

  votePlus() {
    if (this.state.score < 20) {
      this.setState(prevState => ({
        score: prevState.score + 1
      }))
    }
  }

  voteMin() {
    if (this.state.score > 0) {
      this.setState(prevState => ({
        score: prevState.score - 1
      }))
    }
  }

  render() {
    const songId = this.props.song.url.replace('https://open.spotify.com/track/', '');

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

export default SongRow
