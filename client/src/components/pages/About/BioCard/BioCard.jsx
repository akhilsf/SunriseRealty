import React from 'react';
import styled from 'styled-components';
import MemberPicture from './MemberPicture';
import BioDetails from './BioDetails';

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 50vh;
  overflow: wrap;
`;

const BioCard = () => (
  <Container>
    <MemberPicture />
    <BioDetails />
  </Container>
);

export default BioCard;
