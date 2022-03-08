import styled from 'styled-components';

const StyledExpenseTable = styled.table`
  border-collapse: collapse;
  width: 90%;
  background-color: white;
  margin: 20px auto;
  border-radius: 5px;
  overflow: hidden;
  font-size: 0.9em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & thead tr {
    background-color: #39A0ED;
    color: white;
    text-align: left;
    font-weight: bold;
  }

  & tbody tr {
    border-bottom: 1px solid lightgray;
  }

  & tbody tr:nth-of-type(even) {
    background-color: whitesmoke;
  }

  & tbody tr:last-of-type {
    border-bottom: 3px solid #39A0ED;
  }

  & tbody td:last-of-type {
    display: flex;
    gap: 10px;

    & button:first-of-type {
      background-color: #13C4A3;
    }

    & button:last-of-type {
      background-color: #FF6663;
    }
  }

  & th, td {
    padding: 12px 15px;
  }
`;

export default StyledExpenseTable;
