import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import { HeaderContainer } from './headerStyle';

const Header = () => (
  <HeaderContainer>
    <Logo />
    <NavBar />
  </HeaderContainer>
);

export default Header;
