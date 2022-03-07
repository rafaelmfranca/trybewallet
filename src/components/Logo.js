import React from 'react';
import { FaWallet } from 'react-icons/fa';
import StyledLogo from '../styles/components/StyledLogo';

const Logo = () => (
  <StyledLogo>
    <h1>
      <FaWallet />
      TrybeWallet
    </h1>
  </StyledLogo>
);

export default Logo;
