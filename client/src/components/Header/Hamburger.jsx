import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 35px;
  height: 5px;
  backgroundColor: black;
  margin: 6px 0;
`;

const Hamburger = () => (
  <>
    <Menu />
    <Menu />
    <Menu />
  </>
);

export default Hamburger;
