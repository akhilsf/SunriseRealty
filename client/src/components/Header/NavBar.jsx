import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink,
} from 'react-router-dom';

import { NavContainer } from './headerStyle';

const NavBar = () => (
  <Router>
    <NavContainer>
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
        Contact Us
      </NavLink>
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
