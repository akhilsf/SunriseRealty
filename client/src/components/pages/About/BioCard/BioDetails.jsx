import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Name = styled.h2`
color: white;
font-size: 3em;
`;

const Title = styled.h4`
  color: white;
  font-weigth: 400;
`;

const Bio = styled.p`
font-size: 1.2em;
color: white;
`;

const BioDetails = ({ name, bio }) => (
  <Container>
    <Name>ANISH PATEL</Name>
    <Title>Partner, Sunrise Realty Investments</Title>
    <br />
    <Bio>This is my bio. People will think it's really interesting</Bio>
  </Container>
);

export default BioDetails;
