import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = ({
  email,
  password,
  disabled,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={ handleSubmit }>
    <Input
      type="text"
      label="Email"
      value={ email }
      name="email"
      onChange={ handleChange }
      data-testid="email-input"
    />
    <Input
      type="text"
      label="Senha"
      name="password"
      value={ password }
      onChange={ handleChange }
      data-testid="password-input"
    />
    <Button type="submit" value="Entrar" disabled={ disabled } />
  </form>
);

const { string, func, boolean } = PropTypes;

LoginForm.propTypes = {
  email: string,
  handleChange: func,
  handleSubmit: func,
  password: string,
  disabled: boolean,
}.isRequired;

export default LoginForm;
