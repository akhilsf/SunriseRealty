import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pic = styled.img`
  display: block;
  margin-right: 20px;
`;

const MemberPicture = ({ shortID }) => (
  <Pic height="400" src={`assets/${shortID}.jpeg`} alt="Member Picture" />
);

MemberPicture.propTypes = {
  shortID: PropTypes.string.isRequired,
};

export default MemberPicture;
