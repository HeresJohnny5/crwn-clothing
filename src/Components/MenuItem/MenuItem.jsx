import React from 'react';
import { withRouter } from "react-router-dom";

// CUSTOM STYLES
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div 
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`MenuItem ${size ? size : ""} `}
    >
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);