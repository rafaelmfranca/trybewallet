import { string, func, boolean } from 'prop-types';
import React from 'react';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';

const LoginForm = ({
  email,
  password,
  disabled,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={ handleSubmit }>
    <Logo />
    <Input
      type="text"
      label="E-mail"
      value={ email }
      name="email"
      onChange={ handleChange }
      data-testid="email-input"
    />
    <Input
      type="password"
      label="Senha"
      name="password"
      value={ password }
      onChange={ handleChange }
      data-testid="password-input"
    />
    <Button type="submit" value="Entrar" disabled={ disabled } />
  </form>
);

LoginForm.propTypes = {
  email: string,
  handleChange: func,
  handleSubmit: func,
  password: string,
  disabled: boolean,
}.isRequired;

export default LoginForm;
