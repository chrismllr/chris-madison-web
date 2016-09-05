import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

export const Header = ({ navItemClicked }) => (
  <div className="Header-fixed">
    <div className="container">
      <div className="Header">
        <h1>Madison &amp; Chris</h1>
        <Nav navItemClicked={navItemClicked} />
      </div>
    </div>
  </div>
);

export default Header;
