import React, { Component } from 'react';
import './SongRow.css'

class SongRow extends Component {
  constructor(props) {
    super(props);
    if (! props.song.votes.length) {
      props.song.votes = [{score: 0}];
    }

    this.state = {
      song: props.song,
      songIndex: props.songIndex
    }

    this.votePlus = this.votePlus.bind(this);
    this.voteMin = this.voteMin.bind(this);
  }

  votePlus() {
    this.setState(prevState => ({
      song: prevState.song.votes[0].score + 1
    }))
  }

  voteMin() {
    this.setState(prevState => ({
      song: prevState.song.votes[0].score - 1
    }))
  }

  render() {
    const songId = this.state.song.url.replace('https://open.spotify.com/track/', '');

    return (
      <tr>
        <td className="Index">{this.state.songIndex}</td>
        <td className="Cover">
          <div>
            <img src={this.state.song.image} alt="" />
            <button className="Play" onClick={() => this.props.playHandler(songId)} />
          </div>
        </td>
        <td className="SongInfo">
          <div>{this.state.song.title}</div>
          <div>{this.state.song.artist}</div>
        </td>
          <td>
            <div className="VotePlus" onClick={this.votePlus}>+</div>
            <div className="VoteMin" onClick={this.voteMin}>-</div>
            <div className="VoteScore">{this.state.song.votes[0].score}</div>
          </td>
      </tr>
    )
  }
}

export default SongRow
