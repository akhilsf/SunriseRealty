import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
import Header from './components/Header/index';
import MiddleBreaker from './components/MiddleBreaker/index';

const App = () => (
  <>
    <Header />
    <MiddleBreaker />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
