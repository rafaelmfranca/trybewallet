import { array, string } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { FaMoneyBill } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Logo from './Logo';
import StyledHeader from '../styles/components/StyledHeader';
import HeaderInfo from '../styles/components/HeaderInfo';

const updateTotalExpense = (expenses) => expenses
  .reduce((acc, { value, currency, exchangeRates }) => {
    acc += +value * +exchangeRates[currency].ask;
    return acc;
  }, 0);

const Header = ({ email, expenses }) => (
  <StyledHeader>
    <Logo />
    <HeaderInfo>
      <span data-testid="email-field">
        <MdEmail />
        {email || 'test@test.com'}
      </span>
      <hr />
      <span data-testid="total-field">
        <FaMoneyBill />
        {updateTotalExpense(expenses).toFixed(2)}
        <span data-testid="header-currency-field">BRL</span>
      </span>
    </HeaderInfo>
  </StyledHeader>
);

Header.propTypes = {
  email: string,
  expenses: array,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
