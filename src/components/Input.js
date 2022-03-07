import { string } from 'prop-types';
import React from 'react';
import StyledInput from '../styles/components/StyledInput';

const Input = (props) => {
  const { name, label } = props;
  return (
    <label htmlFor={ name }>
      <small style={ { color: '#505050' } }><strong>{label}</strong></small>
      <StyledInput { ...props } />
    </label>
  );
};

Input.propTypes = {
  label: string,
  name: string,
}.isRequired;

export default Input;
