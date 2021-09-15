import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 80px;
  margin-right: 100px;
  white-space: nowrap;
`;

const LinkContainer = styled.div`
  font-weight: 500;
`;

const NavBar = () => (
  <Router>
    <NavContainer>
      <Link to="/" style={{ textDecoration: 'none', marginRight: '5px', marginLeft: '5px' }}>
        <LinkContainer>Home</LinkContainer>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', marginRight: '5px', marginLeft: '5px' }}>
        <LinkContainer>About</LinkContainer>
      </Link>
      <Link to="/strategy" style={{ textDecoration: 'none', marginRight: '5px', marginLeft: '5px' }}>
        <LinkContainer>Strategy</LinkContainer>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', marginRight: '5px', marginLeft: '5px' }}>
        <LinkContainer>Contact Us</LinkContainer>
      </Link>
    </NavContainer>
    {/* <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch> */}
  </Router>
);

export default NavBar;
