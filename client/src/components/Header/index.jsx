import React from 'react';
import $ from 'jquery';
import Logo from './Logo';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import { HeaderContainer } from './headerStyle';

const Header = ({ screenWidth }) => (
  <HeaderContainer>
    <Logo />
    {screenWidth < 560 ? <Hamburger /> : <NavBar />}
  </HeaderContainer>
);

export default Header;
