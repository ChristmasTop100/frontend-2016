import React, { PropTypes } from 'react'
import './NumberIncrementer.css'

const NumberIncrementer = ({ minClick, plusClick, value }) => (
  <div className="NumberIncrementer">
    <div className="Value">{value}</div>
    <div className="Buttons">
      <button
        onClick={plusClick}
        className={value === 20 ? 'disabled' : ''}
      >
        +
      </button>
      <button
        onClick={minClick}
        className={value === 0 ? 'disabled' : ''}
      >
        -
      </button>
    </div>
  </div>
)

NumberIncrementer.propTypes = {
  minClick: PropTypes.func.isRequired,
  plusClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default NumberIncrementer
