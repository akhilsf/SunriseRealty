import React from 'react';
import Logo from '../Logo';
import { FooterContainer, LinksContainer, Link } from './footerStyle';

const Footer = () => {
  const screenWidth = window.innerWidth;

  return (
    <FooterContainer>
      <Logo screenWidth={screenWidth} />
      <LinksContainer>
        <Link href="/home">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/strategy">STRATEGY</Link>
        <Link href="/invest-with-us">INVEST WITH US</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/resources">RESOURCES</Link>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
