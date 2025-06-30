import React from 'react';


import './Header.css';

const Header = () => (
  <header className="header">
     
    <h1 className="logo"> Kaveri</h1>

    <nav className='nav-bar'>
      <ul className='nav-links'>
      <li><a href="#about"> About </a></li>
      <li><a href="#projects"> Projects </a></li>
      <li><a href="#contact"> Contact </a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
