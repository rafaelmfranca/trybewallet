import styled from 'styled-components';

const StyledExpenseForm = styled.form`
  width: 90%;
  padding: 20px;
  height: auto;
  display: flex;
  margin: 20px auto;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  gap: 15px;

  & label {
    width: 15%;
  }

  & button {
    width: 15%;
    height: 40px;
    font-size: .8em;
  }
`;

export default StyledExpenseForm;
