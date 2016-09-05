import React from 'react';

export const ScrollDestination = ({ identifier, children }) => (
  <div className='scroll-to-destination' id={identifier}>
    {children}
  </div>
);

ScrollDestination.propTypes = {
  children: React.PropTypes.node,
  identifier: React.PropTypes.string
};

export default ScrollDestination;
