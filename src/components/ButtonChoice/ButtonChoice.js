import React from 'react';
import './ButtonChoice.css';

export const ButtonChoice = ({
  className,
  activeClass,
  onClick,
  btnText,
  iconName,
  value,
  selected,
  attrs = {}
}) => {
  const computedCls = () => {
    const cls = ['ButtonChoice__button', className];
    if (selected) {
      cls.push(activeClass);
    }
    return cls.toString().replace(/,/g, ' ');
  };

  const btnClick = () => {
    onClick(value);
  };

  return (
    <div className='ButtonChoice'>
      <button
        type='button'
        className={computedCls()}
        onClick={btnClick}
        {...attrs}
      >
        <i className={`icon-${iconName}`}></i>
      </button>
    </div>
  )
};

export default ButtonChoice;
