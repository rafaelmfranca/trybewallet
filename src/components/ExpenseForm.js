import { string, array, func } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { PAYMENT_METHODS, EXPENSE_TAGS } from '../utils/constants';
import Button from './Button';
import StyledExpenseForm from '../styles/components/StyledExpenseForm';

const ExpenseForm = ({
  value,
  description,
  currency,
  method,
  tag,
  handleChange,
  handleExpenseSubmit,
  handleEditedExpenseSubmit,
  currencies,
  isEditing,
}) => (
  <StyledExpenseForm
    onSubmit={ isEditing ? handleEditedExpenseSubmit : handleExpenseSubmit }
  >
    <Input
      type="number"
      label="Valor"
      name="value"
      value={ value }
      onChange={ handleChange }
      data-testid="value-input"
    />
    <Input
      type="text"
      label="Descrição"
      name="description"
      value={ description }
      onChange={ handleChange }
      data-testid="description-input"
    />
    <Select
      id="currency"
      label="Moeda"
      name="currency"
      options={ currencies }
      onChange={ handleChange }
      value={ currency }
      data-testid="currency-input"
    />
    <Select
      id="method"
      label="Pagamento"
      name="method"
      options={ PAYMENT_METHODS }
      onChange={ handleChange }
      value={ method }
      data-testid="method-input"
    />
    <Select
      id="tag"
      label="Categoria"
      name="tag"
      options={ EXPENSE_TAGS }
      onChange={ handleChange }
      value={ tag }
      data-testid="tag-input"
    />
    <Button
      type="submit"
      value={ isEditing ? 'Editar despesa' : 'Adicionar despesa' }
    />
  </StyledExpenseForm>
);

ExpenseForm.propTypes = {
  currencies: array,
  currency: string,
  description: string,
  handleChange: func,
  handleExpenseSubmit: func,
  handleEditedExpenseSubmit: func,
  method: string,
  tag: string,
  value: string,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  isEditing: wallet.isEditing,
});

export default connect(mapStateToProps)(ExpenseForm);
