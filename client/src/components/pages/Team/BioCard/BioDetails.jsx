import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

const Name = styled.h2`
  text-transform: uppercase;
  line-height: 100%;
  color: white;
`;

const Title = styled.h4`
  color: white;
  font-weight: 400;
  font-size: 1.2em;
  font-style: italic;
`;

const Bio = styled.p`
  font-size: 1.2em;
  color: white;
`;

const BioDetails = ({
  shortID, name, title, bio, screenWidth,
}) => (
  <Container>
    <Name style={{
      width: '100%',
      textAlign: screenWidth < 1000 ? 'center' : undefined,
      marginTop: screenWidth < 1000 ? '5%' : undefined,
      fontSize: screenWidth < 1000 ? '2em' : '3em',
    }}
    >
      {name}
    </Name>
    <Title style={{
      textAlign: screenWidth < 1000 ? 'center' : undefined,
    }}
    >
      {title}
    </Title>
    <br />
    <Bio>{bio}</Bio>
  </Container>
);

BioDetails.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default BioDetails;
