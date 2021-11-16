import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MemberPicture from './MemberPicture';
import BioDetails from './BioDetails';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 70px;
  justify-content: center;
  height: auto;
`;

const BioCard = ({
  shortID, name, title, bio, screenWidth,
}) => (
  <Container style={{
    flexDirection: screenWidth < 1000 ? 'column' : undefined,
    alignItems: screenWidth < 1000 ? 'center' : undefined,
  }}
  >
    <MemberPicture shortID={shortID} screenWidth={screenWidth} />
    <BioDetails name={name} title={title} bio={bio} screenWidth={screenWidth} />
  </Container>
);

BioCard.propTypes = {
  shortID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default BioCard;
