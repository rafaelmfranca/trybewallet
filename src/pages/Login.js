import { func, object } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginAction } from '../actions/index';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '../utils/constants';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  validateEmail = () => {
    const { email } = this.state;
    return EMAIL_REGEX.test(email);
  };

  validatePassword = () => {
    const { password } = this.state;
    return password.length >= PASSWORD_MIN_LENGTH;
  };

  handleSignIn = () => {
    const flag = this.validateEmail() && this.validatePassword();
    if (flag) this.setState({ disabled: false });
    else this.setState({ disabled: true });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handleSignIn);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(loginAction({ email }));
    history.push('/carteira');
  };

  render() {
    return (
      <LoginForm
        { ...this.state }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
      />
    );
  }
}

Login.propTypes = {
  history: object,
  dispatch: func,
}.isRequired;

export default connect()(Login);
