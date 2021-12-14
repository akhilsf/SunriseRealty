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
        <Link href="/invest-with-us">INVEST</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/resources">FAQs</Link>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
