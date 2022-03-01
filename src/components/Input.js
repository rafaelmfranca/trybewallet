import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  const { name, label } = props;
  return (
    <label htmlFor={ name }>
      {label}
      <input { ...props } />
    </label>
  );
};

const { string } = PropTypes;

Input.propTypes = {
  label: string,
  name: string,
}.isRequired;

export default Input;
