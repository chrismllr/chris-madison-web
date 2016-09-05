import React from 'react';

export const ButtonChoice = ({
  className,
  activeClass,
  onClick,
  btnText,
  value,
  selected,
  attrs = {}
}) => {
  const computedCls = () => {
    const cls = [className];
    if (selected) {
      cls.push(activeClass);
    }
    return cls.toString().replace(/,/g, ' ');
  };

  const btnClick = () => {
    onClick(value);
  };

  return (
    <button
      className={computedCls()}
      onClick={btnClick}
      {...attrs}
    >
      {btnText}
    </button>
  )
};

export default ButtonChoice;
