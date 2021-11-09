import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MemberPicture from './MemberPicture';
import BioDetails from './BioDetails';

const Container = styled.div`
  width: 60%;
  display: flex;
  margin: 70px;
  justify-content: center;
  height: 50vh;
  overflow: wrap;
`;

const BioCard = ({
  shortID, name, title, bio,
}) => (
  <Container>
    <MemberPicture shortID={shortID} />
    <BioDetails name={name} title={title} bio={bio} />
  </Container>
);

BioCard.propTypes = {
  shortID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default BioCard;
