import React from 'react';
import styled from 'styled-components';

const Pic = styled.img`
  width: 200px;
  height: auto;
`;

const Logo = () => (
  <Pic src="assets/SR_logo.png" alt="Sunrise Realty Logo" />
);

export default Logo;
