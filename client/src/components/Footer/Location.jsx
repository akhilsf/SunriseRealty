import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: white;
  position: fixed;
  margin: 50px;
`;

const Location = () => (
  <Container>
    Street
    <br />
    City
    <br />
    State
    <br />
    Zip
    <br />
  </Container>
);

export default Location;
