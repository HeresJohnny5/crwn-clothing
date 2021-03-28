import React from 'react'

// CUSTOM STYLES
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div 
      style={
        { backgroundImage: `url(${imageUrl})` }
      }
      className={`MenuItem ${size ? size : "null"} `}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;