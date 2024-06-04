import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/study-sessions">Study Sessions</Link></li>
        <li><Link to="/error-log">Error Log</Link></li>
        <li><Link to="/goal-setting">Goal Setting</Link></li>
      </ul>
    </nav>
  );
};

export default Header;