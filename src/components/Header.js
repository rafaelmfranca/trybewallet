import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ email }) => (
  <header>
    <p data-testid="email-field">{`Email: ${email}`}</p>
    <p data-testid="total-field">
      0
      <span data-testid="header-currency-field">BRL</span>
    </p>
  </header>
);

const { string } = PropTypes;

Header.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
