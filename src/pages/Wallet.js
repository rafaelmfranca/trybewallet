import { func, bool, string, array, number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCurrenciesThunk,
  addExpenseThunk,
  removeExpenseAction,
  editExpenseAction,
  saveEditedExpenseAction,
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
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleExpenseSubmit = async (e) => {
    e.preventDefault();
    const { addExpense } = this.props;
    await addExpense(this.state);
    this.updateIdCounter();
    this.resetAllFields();
  };

  handleRemoveClick = (id) => {
    const { removeExpense } = this.props;
    removeExpense(id);
  };

  handleEditClick = (id) => {
    const { editExpense, expenses } = this.props;
    editExpense();
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    this.setState({ ...expenseToEdit });
  };

  handleEditedExpenseSubmit = (e) => {
    e.preventDefault();
    const { saveEditedExpense } = this.props;
    saveEditedExpense(this.state);
    this.updateIdCounter();
    this.resetAllFields();
  };

  updateIdCounter = () => {
    const { lastExpenseId } = this.props;
    this.setState({ id: lastExpenseId + 1 });
  };

  resetAllFields = () => {
    this.setState((state) => ({ ...state, ...walletInitialState }));
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
              handleExpenseSubmit={ this.handleExpenseSubmit }
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
  saveEditedExpense: func,
  editExpense: func,
  removeExpense: func,
  addExpense: func,
  getCurrencies: func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  isFetching: wallet.isFetching,
  error: wallet.error,
  expenses: wallet.expenses,
  lastExpenseId: wallet.lastExpenseId,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpense: (state) => dispatch(addExpenseThunk(state)),
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
  editExpense: (id) => dispatch(editExpenseAction(id)),
  saveEditedExpense: (expense) => dispatch(saveEditedExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
