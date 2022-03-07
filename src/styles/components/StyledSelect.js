import styled from 'styled-components';

const StyledSelect = styled.select`
  border: none;
  width: 100%;
  height: 40px;
  background-color: #f5f7f9;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  font-weight: bold;
  color: #505050;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 1px solid #505050;
  }
`;

export default StyledSelect;
