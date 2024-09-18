import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/financial-planner">Financial Planner</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
