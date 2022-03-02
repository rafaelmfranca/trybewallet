import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies, addExpense } from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import { walletInitialState } from '../utils/constants';

class Wallet extends Component {
  constructor({ numberOfExpenses }) {
    super();

    this.state = {
      id: numberOfExpenses,
      ...walletInitialState,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addExpense(this.state));
    this.updateIdCounter();
    this.clearAllFields();
  };

  updateIdCounter = () => {
    this.setState(({ id: prevId }) => ({ id: prevId + 1 }));
  };

  clearAllFields = () => {
    this.setState((prevState) => ({ ...prevState, ...walletInitialState }));
  };

  render() {
    const { error, isFetching } = this.props;
    return (
      <>
        <Header />
        {error && <div>{error}</div>}
        {isFetching && <div>Loading...</div>}
        {!isFetching && !error && (
          <ExpenseForm
            { ...this.state }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
          />
        )}
      </>
    );
  }
}

const { func, bool, number, string } = PropTypes;

Wallet.propTypes = {
  dispatch: func,
  isFetching: bool,
  numberOfExpenses: number,
  error: string,
}.isRequired;

const mapStateToProps = (state) => ({
  numberOfExpenses: state.wallet.expenses.length,
  isFetching: state.wallet.isFetching,
  error: state.wallet.error,
});

export default connect(mapStateToProps)(Wallet);
