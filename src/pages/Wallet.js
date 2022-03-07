import { func, bool, string, array, number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCurrencies,
  addExpense,
  removeExpenseAction,
  editExpenseAction,
  setEditedExpenseAction,
} from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import { walletInitialState } from '../utils/constants';
import WalletWrapper from '../styles/components/WalletWrapper';

class Wallet extends Component {
  state = {
    id: 0,
    ...walletInitialState,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    await dispatch(addExpense(this.state));
    this.updateIdCounter();
    this.resetAllFields();
  };

  handleRemoveClick = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpenseAction(id));
  };

  handleEditClick = (id) => {
    const { dispatch, expenses } = this.props;
    dispatch(editExpenseAction());
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    this.setState({ ...expenseToEdit });
  };

  handleEditedExpenseSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setEditedExpenseAction(this.state));
    this.updateIdCounter();
    this.resetAllFields();
  };

  updateIdCounter = () => {
    const { lastExpenseId } = this.props;
    this.setState({ id: lastExpenseId + 1 });
  };

  resetAllFields = () => {
    this.setState(({ id }) => ({ id, ...walletInitialState }));
  };

  render() {
    const { error, isFetching } = this.props;
    return (
      <WalletWrapper>
        <Header />
        {error && <div>{error}</div>}
        {isFetching && <div>Loading...</div>}
        {!error && (
          <>
            <ExpenseForm
              { ...this.state }
              handleChange={ this.handleChange }
              handleSubmit={ this.handleSubmit }
              handleEditedExpenseSubmit={ this.handleEditedExpenseSubmit }
            />
            <ExpenseTable
              handleEditClick={ this.handleEditClick }
              handleRemoveClick={ this.handleRemoveClick }
            />
          </>
        )}
      </WalletWrapper>
    );
  }
}

Wallet.propTypes = {
  dispatch: func,
  isFetching: bool,
  error: string,
  expenses: array,
  lastExpenseId: number,
}.isRequired;

const mapStateToProps = (state) => ({
  isFetching: state.wallet.isFetching,
  error: state.wallet.error,
  expenses: state.wallet.expenses,
  lastExpenseId: state.wallet.lastExpenseId,
});

export default connect(mapStateToProps)(Wallet);
