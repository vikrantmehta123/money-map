import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

export const NavigationBar = () => {
  return (
    <div className="lever-navbar">
      <div className="frame">
        <div className="text-wrapper"><Link to="/planner">Planner</Link></div>
        <div className="div"><Link to="/resources">Resources</Link></div>
        <div className="div"><Link to="/about">About</Link></div>
      </div>
      <div className="group">
        <div className="text-wrapper-2">MONEY MAP</div>
      </div>
    </div>
  );
};


export default NavigationBar;
