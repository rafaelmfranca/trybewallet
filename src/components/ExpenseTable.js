import { array, func } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { expenseTableHeader } from '../utils/constants';
import Button from './Button';

const ExpenseTable = ({ handleEditClick, handleRemoveClick, expenses }) => (
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
            <td>
              <Button
                type="button"
                value={ <FaEdit /> }
                data-testid="edit-btn"
                onClick={ () => handleEditClick(expense.id) }
              />
              <Button
                type="button"
                value={ <FaTrash /> }
                data-testid="delete-btn"
                onClick={ () => handleRemoveClick(expense.id) }
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ExpenseTable.propTypes = {
  expenses: array,
  handleRemoveClick: func,
  handleEditClick: func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
