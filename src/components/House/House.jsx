import React from 'react'
import './House.css';

const House = () => {
  return (
    <div className="house-container">
      <div className="house">
        <div className="rooftop"></div>
        <div className="wall">
          <div className="door"></div>
          <div className="window"></div>
        </div>
      </div>
    </div>
  )
}

export default House