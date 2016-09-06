import React from 'react';
const Scroll = require('react-scroll');
const { animateScroll } = Scroll;

export const ScrollButton = ({
  id = 'ScrollButton0',
  to,
  btnText,
  btnAction,
  btnClass,
  callback = () => {},
  duration = 800,
  offset = 0
}) => {
  const scrollToDestination: Function = (e) => {
    const scrollDestination = document.getElementById(`${to}`) || e.target;
    const top = scrollDestination.getBoundingClientRect().top;

    e.persist();
    btnAction(e);

    animateScroll.scrollTo(top + parseInt(offset, 10), { duration });

    setTimeout(() => {
      callback(to);
    }, duration);
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
  btnAction: React.PropTypes.func,
  callback: React.PropTypes.func,
  duration: React.PropTypes.number
};

export default ScrollButton;
