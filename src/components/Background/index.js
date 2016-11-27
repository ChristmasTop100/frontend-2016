import React, { Component } from 'react';
import Snowfetti from '../Snowfetti';

class Background extends Component {
  constructor() {
    super()
    this.updateSnowDimensions = this.updateSnowDimensions.bind(this)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  updateSnowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSnowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSnowDimensions)
  }

  render() {
    return (
      <Snowfetti
        type="snow"
        profile={[ 'snow', 'fast' ]}
        amount={800}
        width={this.state.width}
        height={this.state.height}
        styles={{
          backgroundColor: '#000',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
    );
  }
}

export default Background;
