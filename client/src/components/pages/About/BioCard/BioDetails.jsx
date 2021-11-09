import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  text-transform: uppercase;
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

const BioDetails = ({ name, title, bio, screenWidth }) => (
  <Container>
    <Name style={{
      textAlign: screenWidth < 1000 ? 'center' : undefined
    }}
    >{name}</Name>
    <Title style={{
      textAlign: screenWidth < 1000 ? 'center' : undefined
    }}>{title}</Title>
    <br />
    <Bio style={{
      textAlign: screenWidth < 1000 ? 'center' : undefined
    }}>{bio}</Bio>
  </Container>
);

BioDetails.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default BioDetails;
