import styled from 'styled-components';

const LoginWrapper = styled.section`
  width: 100%;
  max-width: 340px;
  padding: 40px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export default LoginWrapper;
