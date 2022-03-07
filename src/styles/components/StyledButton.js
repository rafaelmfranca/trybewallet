import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 14px;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0500f5;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #66B5FF;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #66B5FF;
  }
`;

export default StyledButton;
