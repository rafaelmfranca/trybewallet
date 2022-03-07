import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 100%;
  height: 40px;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
    color: #505050;

    & svg {
      color: #0500f5;
      font-size: 1.6rem;
    }
  }
`;

export default StyledLogo;
