import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import './CircularElements.css'

const CircularElements = () => (
  <div className="CircularOverlay">
    <CircularProgress
      className="CircularProgress"
      size={80}
      thickness={5}
    />
  </div>
)

export default CircularElements
