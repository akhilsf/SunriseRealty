import React from 'react';
import $ from 'jquery';
import Logo from './Logo';
import NavBar from './NavBar';
import { HeaderContainer } from './headerStyle';

const Header = () => {
  if ($(window).width() < 500) {
    console.log('mobile time');
  }

  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  )
};

export default Header;
