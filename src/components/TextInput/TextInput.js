import React from 'react';

export const TextInput = ({
  onChange,
  recordField,
  value,
  attrs = {}
}) => {
  const inputChange = (e) => {
    onChange(recordField, e.target.value);
  };

  return (
    <input
      {...attrs}
      id={recordField}
      name={recordField}
      value={value}
      onChange={inputChange}
    />
  );
};

export default TextInput;
