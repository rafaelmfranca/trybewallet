import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { PAYMENT_METHODS, EXPENSE_TAGS } from '../utils/constants';
import Button from './Button';

const ExpenseForm = ({
  value,
  description,
  currency,
  method,
  tag,
  handleChange,
  handleSubmit,
  currencies,
}) => (
  <form onSubmit={ handleSubmit }>
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
    <Button type="submit" value="Adicionar despesa" />
  </form>
);

const { string, array, func } = PropTypes;

ExpenseForm.propTypes = {
  currencies: array,
  currency: string,
  description: string,
  handleChange: func,
  handleSubmit: func,
  method: string,
  tag: string,
  value: string,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);
