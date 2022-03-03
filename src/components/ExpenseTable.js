import { array } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expenseTableHeader } from '../utils/constants';

const ExpenseTable = ({ expenses }) => (
  <table>
    <thead>
      <tr>
        {expenseTableHeader.map((item) => (
          <th key={ item }>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense) => {
        const currCurrency = expense.exchangeRates[expense.currency];
        return (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{currCurrency.name.split('/')[0]}</td>
            <td>{Number(currCurrency.ask).toFixed(2)}</td>
            <td>{(expense.value * Number(currCurrency.ask)).toFixed(2)}</td>
            <td>Real</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ExpenseTable.propTypes = {
  expenses: array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
