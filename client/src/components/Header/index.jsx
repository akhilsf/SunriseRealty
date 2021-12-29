import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from '../pages/Home/index';
import Team from '../pages/Team/index';
import Strategy from '../pages/Strategy/index';
import InvestWithUs from '../pages/InvestWithUs/index';
import Contact from '../pages/Contact/index';
import Resources from '../pages/Resources/index';
import Logo from '../shared/Logo';

import { HeaderContainer, Hamburger, MenuLine } from './headerStyle';

const FullScreenNav = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-evenly',
  marginRight: '5%',
  marginLeft: '5%',
  whiteSpace: 'nowrap',
};

const MinimizedNav = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  position: 'absolute',
  left: '-110%',
  top: '15vh',
  backgroundColor: '#fff',
  width: '100%',
  height: '12em',
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

  const screenThreshold = 1400;

  useEffect(() => {
    if (screenWidth > screenThreshold) {
      setNavStyle(FullScreenNav);
      closeHamburger();
      setHamburgerOpen(false);
    } else {
      setNavStyle(MinimizedNav);
    }


    handleLinkClick();

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

  const handleLinkClick = (e) => {
    if (hamburgerOpen) {
      closeHamburger();
      setHamburgerOpen(false);
    }

    window.scrollTo(0, 0);

    let htmlCollection = document.getElementsByClassName('link')
    let linksArray = Array.prototype.slice.call(htmlCollection);

    linksArray.forEach((link) => {
      link.style.fontWeight = "500";
      link.style.color = "#4A5859"
    })

    let target = e ? e.target.id : window.location.pathname.split('/')[1];
    if (!target) target = 'home';

    document.getElementById(target).style.fontWeight = "900";
    document.getElementById(target).style.color = "#85a7b1";
  };

  return (
    <Router>
      <HeaderContainer>
        {<>{screenWidth <= screenThreshold ?
            <a href="/home">
              <Logo screenWidth={screenWidth} />
            </a>
            : null
        }</>}
        <nav id="navbar" style={navStyle}>
          <NavLink
            activeClassName="active"
            className="link"
            to="/"
            id="home"
            onClick={handleLinkClick}
          >
            HOME
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/team"
            id="team"
            onClick={handleLinkClick}
          >
            THE TEAM
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/strategy"
            id="strategy"
            onClick={handleLinkClick}
          >
            STRATEGY
          </NavLink>
          {<>{screenWidth <= screenThreshold ? null :
                <a href="/home">
                  <Logo screenWidth={screenWidth} />
                </a>
          }</>}
          <NavLink
            activeClassName="active"
            className="link"
            to="/invest"
            id="invest"
            onClick={handleLinkClick}
          >
            INVEST
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/contact"
            id="contact"
            onClick={handleLinkClick}
          >
            CONTACT
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link"
            to="/resources"
            id="resources"
            onClick={handleLinkClick}
          >
            FAQs
          </NavLink>
        </nav>
        <Hamburger
          data-testid="hamburger"
          onClick={handleHamburgerAction}
          style={{ display: screenWidth > screenThreshold ? 'none' : undefined }}
        >
          <MenuLine id="ham1" style={{ width: '35px' }} />
          <MenuLine id="ham2" style={{ width: '25px', alignSelf: 'flex-end' }} />
          <MenuLine id="ham3" style={{ width: '35px' }} />
        </Hamburger>
      </HeaderContainer>
      <Switch>
        <Route path="/team">
          <Team screenWidth={screenWidth} />
        </Route>
        <Route path="/strategy">
          <Strategy screenWidth={screenWidth} />
        </Route>
        <Route path="/invest">
          <InvestWithUs screenWidth={screenWidth} />
        </Route>
        <Route path="/contact">
          <Contact screenWidth={screenWidth} />
        </Route>
        <Route path="/resources">
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
