import { string } from 'prop-types';
import React from 'react';
import StyledButton from '../styles/components/StyledButton';

const Button = (props) => {
  const { type, value } = props;
  return (
    <StyledButton { ...props } type={ type === 'button' ? 'button' : 'submit' }>
      {value}
    </StyledButton>
  );
};

Button.propTypes = {
  type: string,
  value: string,
}.isRequired;

export default Button;
