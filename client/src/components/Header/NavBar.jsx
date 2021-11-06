import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import About from '../pages/About/index';
import Logo from './Logo';

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

const NavBar = ({ screenWidth }) => {
  const [navStyle, setNavStyle] = useState(() => {});
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (screenWidth > 600) {
      setNavStyle({
        display: 'flex',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: '80px',
        marginRight: '100px',
        whiteSpace: 'nowrap',
        fontSize: '20px',
      });
    } else {
      setNavStyle({
        display: 'flex',
        position: 'fixed',
        left: '-100%',
        top: '85px',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '10px',
        textAlign: 'center',
        transition: '0.3s',
        boxShadow:
            '0 10px 27px rgba(0, 0, 0, 0.05)',
      });
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
      <div style={{ maxWidth: '220px' }}>
        <Logo />
      </div>
      <nav id="navbar" style={navStyle}>
        <NavLink activeClassName="active" className="link" to="/">
          HOME
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/about">
          ABOUT
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/strategy">
          STRATEGY
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/contact">
          CONTACT
        </NavLink>
      </nav>
      <Hamburger onClick={onHamburgerClick} style={{ display: screenWidth > 600 ? 'none' : undefined }}>
        <MenuLine id="ham1" />
        <MenuLine id="ham2" />
        <MenuLine id="ham3" />
      </Hamburger>
      <Switch>
        <Route path="/about" component={About} />
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default NavBar;
