import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Website Logo" />
      </div>
      
      <div className="line"></div>

      <Nav />
    </header>
  );
}

export default Header;