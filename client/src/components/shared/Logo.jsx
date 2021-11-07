import React from 'react';
import styled from 'styled-components';

const LogoPic = styled.img`
  max-width: 220px;
  width: auto;
  height: auto;
`;

const Logo = () => (
  <LogoPic src="assets/SR_logo.png" alt="Sunrise Realty Logo" />
);

export default Logo;
