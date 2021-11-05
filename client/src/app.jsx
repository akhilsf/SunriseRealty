import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header/index';
import MiddleBreaker from './components/MiddleBreaker/index';
import Footer from './components/Footer/index';

const App = () => {
  const [isMobile, SetIsMobile] = useState(false);

  useEffect(() => {
    if ($(window).width() < 560) {
      SetIsMobile(true);
    } else {
      SetIsMobile(false);
    }
  }, [isMobile]);

  return (
    <>
      <Header />
      <MiddleBreaker />
      <Footer />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
