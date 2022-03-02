import React from 'react';
import { expenseTableHeader } from '../utils/constants';

const ExpenseTable = () => (
  <table>
    <thead>
      <tr>
        {expenseTableHeader.map((item) => (
          <th key={ item }>{item}</th>
        ))}
      </tr>
    </thead>
  </table>
);

export default ExpenseTable;
