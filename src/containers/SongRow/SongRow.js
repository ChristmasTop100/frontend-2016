import React, { Component } from 'react';
import NumberIncrementer from '../../components/NumberIncrementer'
import './SongRow.css'

class SongRow extends Component {
  constructor(props) {
    super(props);
    let score = 0;
    if (props.song.votes.length > 0) {
      score = props.song.votes[0].score;
    }
    props.song.votes = [];

    this.state = {
      song: props.song,
      score: score,
      songIndex: props.songIndex
    }

    this.votePlus = this.votePlus.bind(this);
    this.voteMin = this.voteMin.bind(this);
  }

  votePlus() {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }

  voteMin() {
    this.setState(prevState => ({
      score: prevState.score - 1
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
