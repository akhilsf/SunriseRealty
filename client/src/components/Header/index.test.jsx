import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index.jsx';
import Team from '../pages/Team';
import { Router } from 'react-router-dom'

import {createMemoryHistory} from 'history';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

const screenWidth = 1500;

// include as many test cases as you want here
const links = [
  { text: 'Home', location: "/" },
  { text: 'Team', location: "/team" },
];

describe('Navigation Bar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header screenWidth={screenWidth}></Header>, div);
  });

  it ('should route to team page when "Team" is clicked', () => {
    links.forEach((link) => (

      render(<Header />)
      const linkDom = screen.getByText(link.text);

      //use jest assertion to verify the link property
      expect(linkDom).toHaveAttribute("href", link.location);
      // "Check if Nav Bar have %s link.",
      // (link) => {
      // }
    ));




    // const div = document.createElement('div');
    // ReactDOM.render(<Header screenWidth={screenWidth} />, div);
    // const history = createMemoryHistory();
    // const route = '/team';
    // history.push(route);
    // render(
    //   <Router history={history}>
    //     <Team screenWidth={screenWidth}/>
    //   </Router>,
    // );

    // expect(screen.getByText(/Anish Patel/i)).toBeInTheDocument()
  });
});
