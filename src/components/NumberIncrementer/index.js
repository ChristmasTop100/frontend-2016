import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './NumberIncrementer.css'

const buttonStyle = {
  height: 24,
  width: 24,
  lineHeight: '24px',
  color: 'white'
};

class NumberIncrementer extends Component {
  render() {
    return (
      <div className="NumberIncrementer">
        <RaisedButton
          buttonStyle={buttonStyle}
          labelStyle={buttonStyle}
          overlayStyle={buttonStyle}
          primary={true}
          className="Min"
          onClick={this.props.minClick}
        >
          -
        </RaisedButton>
        <div className="Value">{this.props.value}</div>
        <RaisedButton
          buttonStyle={buttonStyle}
          labelStyle={buttonStyle}
          overlayStyle={buttonStyle}
          primary={true}
          className="Plus"
          onClick={this.props.plusClick}
        >
          +
        </RaisedButton>
      </div>
    );
  }
}

export default NumberIncrementer
