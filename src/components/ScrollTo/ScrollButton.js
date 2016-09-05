import React from 'react';
const Scroll = require('react-scroll');
const { animateScroll } = Scroll;

// React-Scroll used for this component
// https://www.npmjs.com/package/react-scroll
// ====================================================

export const ScrollButton = ({ id = 'ScrollButton0', to, btnText, btnClass, callback, duration = 800, offset = 0 }) => {
  const scrollToDestination: Function = (e) => {
    const scrollDestination = document.getElementById(`${to}`) || e.target;
    const top = scrollDestination.getBoundingClientRect().top;

    animateScroll.scrollTo(top + parseInt(offset, 10), { duration });
    setTimeout(callback, duration);
  };

  return (
    <button id={id} className={btnClass} onClick={scrollToDestination}>{btnText}</button>
  );
};

ScrollButton.propTypes = {
  id: React.PropTypes.string,
  to: React.PropTypes.string,
  offset: React.PropTypes.any,
  btnText: React.PropTypes.string,
  btnClass: React.PropTypes.string,
  callback: React.PropTypes.func,
  duration: React.PropTypes.number
};

export default ScrollButton;
