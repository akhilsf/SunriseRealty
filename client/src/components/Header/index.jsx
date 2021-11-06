import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
// import Hamburger from './Hamburger';
import { HeaderContainer } from './headerStyle';

const Header = ({ screenWidth }) => (
  <HeaderContainer>
    {/* <Logo /> */}
    <NavBar screenWidth={screenWidth} />
  </HeaderContainer>
);

export default Header;
