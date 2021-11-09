import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from '../Pages/Home/index';
import About from '../Pages/About/index';
import Strategy from '../Pages/Strategy/index';
import InvestWithUs from '../Pages/InvestWithUs/index';
import Contact from '../Pages/Contact/index';
import Resources from '../Pages/Resources/index';
import Logo from '../shared/Logo';

import { HeaderContainer, Hamburger, MenuLine } from './headerStyle';

const FullScreenNav = {
  display: 'flex',
  width: '30%',
  justifyContent: 'space-evenly',
  marginTop: '80px',
  marginRight: '5%',
  marginLeft: '5%',
  whiteSpace: 'nowrap',
  fontSize: '20px',
};

const MinimizedNav = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  position: 'absolute',
  left: '-110%',
  top: '30vh',
  backgroundColor: '#fff',
  width: '100%',
  height: '12em',
  fontSize: '20px',
  paddingBottom: '10px',
  textAlign: 'center',
  transition: '0.3s',
  boxShadow: '0 0 5px rgba(0, 0, 0)',
};

const openHamburger = () => {
  document.getElementById('ham1').style.transform = 'translateY(9px) rotate(45deg)';
  document.getElementById('ham2').style.opacity = '0';
  document.getElementById('ham3').style.transform = 'translateY(-9px) rotate(-45deg)';
  document.getElementById('navbar').style.left = '0';
};

const closeHamburger = () => {
  document.getElementById('ham1').style.transform = '';
  document.getElementById('ham2').style.opacity = '100';
  document.getElementById('ham3').style.transform = '';
  document.getElementById('navbar').style.left = '-110%';
};

const Header = ({ screenWidth }) => {
  const [navStyle, setNavStyle] = useState(() => {});
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (screenWidth > 1400) {
      setNavStyle(FullScreenNav);
      closeHamburger();
      setHamburgerOpen(false);
    } else {
      setNavStyle(MinimizedNav);
    }
  }, [screenWidth]);

  const handleHamburgerAction = () => {
    if (!hamburgerOpen) {
      openHamburger();
      setHamburgerOpen(true);
    } else {
      closeHamburger();
      setHamburgerOpen(false);
    }
  };

  const handleLinkClick = () => {
    closeHamburger();
    setHamburgerOpen(false);
  };

  return (
    <Router>
      <HeaderContainer>
        <nav id="navbar" style={navStyle}>
          <NavLink
            activeClassName="active"
            className="link"
            to="/"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            HOME
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/about"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            ABOUT
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/strategy"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            STRATEGY
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/invest-with-us"
            style={{ display: hamburgerOpen ? undefined : 'none' }}
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            INVEST WITH US
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/contact"
            style={{ display: hamburgerOpen ? undefined : 'none' }}
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            CONTACT
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/resources"
            style={{ display: hamburgerOpen ? undefined : 'none' }}
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            RESOURCES
          </NavLink>
        </nav>
        <Logo screenWidth={screenWidth} />
        <nav id="navbar" style={navStyle}>
          <NavLink
            activeClassName="active"
            className="link"
            to="/invest-with-us"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            INVEST WITH US
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/contact"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            CONTACT
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/resources"
            onClick={hamburgerOpen ? handleLinkClick : undefined}
          >
            RESOURCES
          </NavLink>
        </nav>
        <Hamburger
          onClick={handleHamburgerAction}
          style={{ display: screenWidth > 1400 ? 'none' : undefined }}
        >
          <MenuLine id="ham1" style={{ width: '35px' }} />
          <MenuLine id="ham2" style={{ width: '25px', alignSelf: 'flex-end' }} />
          <MenuLine id="ham3" style={{ width: '35px' }} />
        </Hamburger>
      </HeaderContainer>
      <Switch>
        <Route path="/about">
          <About screenWidth={screenWidth} />
        </Route>
        <Route path="/strategy" >
          <Strategy />
        </Route>
        <Route path="/invest-with-us">
          <InvestWithUs screenWidth={screenWidth} />
        </Route>
        <Route path="/contact" >
          <Contact screenWidth={screenWidth} />
        </Route>
        <Route path="/resources" >
          <Resources />
        </Route>
        <Route path="/">
          <Home screenWidth={screenWidth} />
        </Route>
      </Switch>
    </Router>
  );
};

Header.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Header;
