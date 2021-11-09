import React from 'react';
import styled from 'styled-components';
import BioCard from './BioCard/BioCard';

const Container = styled.div`
  background-color: #424242;
  padding: 5%;
  display: flex;
  justify-content: center;
`;

const BioFeed = () => (
  <Container>
    <BioCard />
  </Container>
);

export default BioFeed;
