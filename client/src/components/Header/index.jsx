import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';

const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Header = () => (
  <HeaderContainer>
    <Logo />
    <NavBar />
  </HeaderContainer>
);

export default Header;
