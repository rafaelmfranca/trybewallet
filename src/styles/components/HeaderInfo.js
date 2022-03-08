import styled from 'styled-components';

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  & span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & span:nth-of-type(1) > svg {
    color: #505050;
    font-size: 1.2rem;
  }

  & span:nth-of-type(2) > svg {
    color: green;
    font-size: 1.2rem;
  }

  & hr {
    width: 1px;
    background: #505050;
    border: none;
  }
`;

export default HeaderInfo;
