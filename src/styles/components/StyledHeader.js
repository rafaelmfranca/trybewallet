import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0 0 5px 5px;

  & div:nth-of-type(1) {
    width: 25%;
  }

  & div:nth-of-type(2) {
    width: 50%;
  }
`;

export default StyledHeader;
