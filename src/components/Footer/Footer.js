import React from 'react';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import './Footer.css';

export const Footer = () => (
  <div className="Footer">
    <div className="container Footer-wrapper">
      <div className="Footer-col1">
        <p>&copy; Chris Miller 2016</p>
      </div>
      <div className="Footer-col2">
        <a>
          <MaterialIcon icon='mail' key='mail' />
          E-mail me!
        </a>
        <a>
          <MaterialIcon icon='instagram' key='instag' />
          Instagram
        </a>
        <a>
          <MaterialIcon icon='facebook' key='fb' />
          Facebook
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
