import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const updateTotalExpense = (expenses) => expenses
  .reduce((acc, { value, currency, exchangeRates }) => {
    acc += +value * +exchangeRates[currency].ask;
    return acc;
  }, 0);

const Header = ({ email, expenses }) => (
  <header>
    <span data-testid="email-field">{`Email: ${email}`}</span>
    <span data-testid="total-field">
      {updateTotalExpense(expenses).toFixed(2)}
      <span data-testid="header-currency-field">BRL</span>
    </span>
  </header>
);

const { array, string } = PropTypes;

Header.propTypes = {
  email: string,
  expenses: array,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
