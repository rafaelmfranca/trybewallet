import { string, array } from 'prop-types';
import React from 'react';

const Select = (props) => {
  const { label, name, options } = props;
  return (
    <label htmlFor={ name }>
      {label}
      <select { ...props }>
        {options.map((option) => (
          <option data-testid={ option } value={ option } key={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

Select.propTypes = {
  label: string,
  name: string,
  options: array,
}.isRequired;

export default Select;
