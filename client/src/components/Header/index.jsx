import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import About from '../Pages/About/index';
import Strategy from '../Pages/Strategy/index';
import Contact from '../Pages/Contact/index';
import Logo from './Logo';
import { HeaderContainer } from './headerStyle';

const Hamburger = styled.button`
  margin: 20px;
  background: none;
  border: none;
`;

const MenuLine = styled.span`
  display: block;
  width: 35px;
  height: 5px;
  background-color: #4A5859;
  margin: 6px 0;
  transition: all 0.3s ease-in-out;
`;

const FullScreenNav = {
  display: 'flex',
  width: '50%',
  justifyContent: 'space-between',
  marginTop: '80px',
  marginRight: '100px',
  whiteSpace: 'nowrap',
  fontSize: '20px',
};

const MinimizedNav = {
  display: 'flex',
  position: 'fixed',
  left: '-100%',
  top: '145px',
  flexDirection: 'column',
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: '10px',
  textAlign: 'center',
  transition: '0.3s',
  boxShadow:
      '0 10px 20px rgba(0, 0, 0, 0.05)',
};

const Header = ({ screenWidth }) => {
  const [navStyle, setNavStyle] = useState(() => {});
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (screenWidth > 600) {
      setNavStyle(FullScreenNav);
    } else {
      setNavStyle(MinimizedNav);
    }
  }, [screenWidth]);

  const onHamburgerClick = () => {
    if (!hamburgerOpen) {
      document.getElementById('ham1').style.transform = 'translateY(11px) rotate(45deg)';
      document.getElementById('ham2').style.opacity = '0';
      document.getElementById('ham3').style.transform = 'translateY(-11px) rotate(-45deg)';
      document.getElementById('navbar').style.left = '0';

      setHamburgerOpen(true);
    } else {
      document.getElementById('ham1').style.transform = '';
      document.getElementById('ham2').style.opacity = '100';
      document.getElementById('ham3').style.transform = '';
      document.getElementById('navbar').style.left = '-100%';

      setHamburgerOpen(false);
    }
  };

  return (
    <Router>
      <HeaderContainer>
        <Logo />
        <nav id="navbar" style={navStyle}>
          <NavLink activeClassName="active" className="link" to="/" style={{ marginTop: '0.5em' }}>
            HOME
          </NavLink>
          <NavLink activeClassName="active" className="link" to="/about" style={{ marginTop: '0.5em' }}>
            ABOUT
          </NavLink>
          <NavLink activeClassName="active" className="link" to="/strategy" style={{ marginTop: '0.5em' }}>
            STRATEGY
          </NavLink>
          <NavLink activeClassName="active" className="link" to="/contact" style={{ marginTop: '0.5em' }}>
            CONTACT
          </NavLink>
        </nav>
        <Hamburger onClick={onHamburgerClick} style={{ display: screenWidth > 600 ? 'none' : undefined }}>
          <MenuLine id="ham1" />
          <MenuLine id="ham2" />
          <MenuLine id="ham3" />
        </Hamburger>
      </HeaderContainer>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/strategy" component={Strategy} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Header;
