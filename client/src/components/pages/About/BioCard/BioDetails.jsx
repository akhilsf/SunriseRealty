import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Name = styled.h2`
  text-transform: capitalize;
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

const BioDetails = ({ name, title, bio }) => (
  <Container>
    <Name>{name}</Name>
    <Title>{title}</Title>
    <br />
    <Bio>{bio}</Bio>
  </Container>
);

BioDetails.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default BioDetails;
