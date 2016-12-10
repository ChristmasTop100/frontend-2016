import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './CircularElements.css'

class CircularElements extends Component {
  render() {
    return (
      <div className="CircularOverlay">
        <CircularProgress
          className="CircularProgress"
          size={80}
          thickness={5}
        />
      </div>
    )
  }
}

export default CircularElements
