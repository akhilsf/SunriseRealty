import React from 'react';
import Logo from '../Logo';
import { FooterContainer, LinksContainer, Link } from './footerStyle';

const Footer = () => {
  const screenWidth = window.innerWidth;

  return (
    <FooterContainer>
      <Logo screenWidth={screenWidth} isFooter={true} />
      <LinksContainer>
        <Link href="/home">HOME</Link>
        <Link href="/team">THE TEAM</Link>
        <Link href="/strategy">STRATEGY</Link>
        <Link href="/invest">INVEST</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/resources">FAQs</Link>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
