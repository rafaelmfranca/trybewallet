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
  background-color: #39A0ED;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default StyledButton;
