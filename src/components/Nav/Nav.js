import React from 'react';
import ScrollButton from '../ScrollTo/ScrollButton';
import './Nav.css';

export const Nav = ({ navItemClicked }) => {
  return (
    <ul className="Nav">
      <li className="Nav-item">
        <ScrollButton
          to='wedding'
          btnClass='Nav-item-button btn btn--plain'
          btnText='Wedding'
          callback={navItemClicked}
        />
      </li>
      <li className="Nav-item">
        <ScrollButton
          to='rsvp'
          btnClass='Nav-item-rsvp btn btn--outline'
          btnText='RSVP'
          callback={navItemClicked}
        />
      </li>
    </ul>
  );
};

export default Nav;
