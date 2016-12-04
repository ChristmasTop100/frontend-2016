import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './NumberIncrementer.css'

const buttonStyle = {
  height: 15,
  width: 24,
  lineHeight: '15px',
  color: 'white'
};

class NumberIncrementer extends Component {
  render() {
    return (
      <div className="NumberIncrementer">
        <div className="Value">{this.props.value}</div>
        <div className="Buttons">
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
        </div>
      </div>
    );
  }
}

export default NumberIncrementer
