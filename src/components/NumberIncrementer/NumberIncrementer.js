import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './NumberIncrementer.css'

const buttonStyle = {
  height: 15,
  width: 24,
  lineHeight: '15px',
  color: 'white'
};

const NumberIncrementer = ({ minClick, plusClick, value }) => (
  <div className="NumberIncrementer">
    <div className="Value">{value}</div>
    <div className="Buttons">
      <RaisedButton
        buttonStyle={buttonStyle}
        labelStyle={buttonStyle}
        overlayStyle={buttonStyle}
        primary={true}
        className="Plus"
        onClick={plusClick}
      >
        +
      </RaisedButton>
      <RaisedButton
        buttonStyle={buttonStyle}
        labelStyle={buttonStyle}
        overlayStyle={buttonStyle}
        primary={true}
        className="Min"
        onClick={minClick}
      >
        -
      </RaisedButton>
    </div>
  </div>
)

export default NumberIncrementer
