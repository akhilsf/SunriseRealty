import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index.jsx';

import { render } from '@testing-library/react';


describe('Navigation Bar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header screenWidth={1000}></Header>, div);
  });
});
