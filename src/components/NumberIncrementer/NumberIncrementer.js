import React from 'react';
import './NumberIncrementer.css'

const NumberIncrementer = ({ minClick, plusClick, value }) => (
  <div className="NumberIncrementer">
    <div className="Value">{value}</div>
    <div className="Buttons">
      <button onClick={plusClick}>+</button>
      <button onClick={minClick}>-</button>
    </div>
  </div>
)

export default NumberIncrementer
