import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/index';

const App = () => {
  const [screenWidth, SetScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => SetScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Header screenWidth={screenWidth} />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
