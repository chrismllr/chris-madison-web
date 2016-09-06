import React from 'react';
import ScrollButton from '../ScrollTo/ScrollButton';
import './Nav.css';

export const Nav = ({ navItemClicked, navOpen, toggleNav }) => {
  const computedCls = () => {
    const cls = ['Nav'];

    if (navOpen) {
      cls.push('Nav-open');
    }

    return cls.toString().replace(/,/g, ' ');
  };

  return (
    <ul className={computedCls()}>
      <li className="Nav-item">
        <ScrollButton
          to='wedding'
          btnClass='Nav-item-button btn btn--plain'
          btnText='Our Story'
          btnAction={toggleNav}
          callback={navItemClicked}
        />
      </li>
      <li className="Nav-item">
        <ScrollButton
          to='details'
          btnClass='Nav-item-button btn btn--plain'
          btnText='Details'
          btnAction={toggleNav}
          callback={navItemClicked}
        />
      </li>
      <li className="Nav-item">
        <ScrollButton
          to='where-to-stay'
          btnClass='Nav-item-button btn btn--plain'
          btnText='Where to stay'
          btnAction={toggleNav}
          callback={navItemClicked}
        />
      </li>
      <li className="Nav-item">
        <ScrollButton
          to='registry'
          btnClass='Nav-item-button btn btn--plain'
          btnText='Registry'
          btnAction={toggleNav}
          callback={navItemClicked}
        />
      </li>
      <li className="Nav-item">
        <ScrollButton
          to='rsvp'
          btnClass='Nav-item-rsvp btn btn--outline'
          btnText='RSVP'
          btnAction={toggleNav}
          callback={navItemClicked}
        />
      </li>
    </ul>
  );
};

export default Nav;
