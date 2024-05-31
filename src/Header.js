import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>AIFullStackWebsites.com</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/aws-backend">AWS Backend</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
