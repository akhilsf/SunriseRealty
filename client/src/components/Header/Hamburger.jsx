import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  margin: 20px;
`;

const Line = styled.div`
  width: 35px;
  height: 5px;
  background-color: #4A5859;
  margin: 6px 0;
`;

const Hamburger = () => (
  <Menu>
    <Line />
    <Line />
    <Line />
  </Menu>
);

export default Hamburger;
