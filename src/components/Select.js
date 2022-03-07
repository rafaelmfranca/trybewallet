import { string, array } from 'prop-types';
import React from 'react';
import StyledSelect from '../styles/components/StyledSelect';

const Select = (props) => {
  const { label, name, options } = props;
  return (
    <label htmlFor={ name }>
      <small style={ { color: '#505050' } }><strong>{label}</strong></small>
      <StyledSelect { ...props }>
        {options.map((option) => (
          <option data-testid={ option } value={ option } key={ option }>
            {option}
          </option>
        ))}
      </StyledSelect>
    </label>
  );
};

Select.propTypes = {
  label: string,
  name: string,
  options: array,
}.isRequired;

export default Select;
