import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pic = styled.img`
  display: block;
  margin-right: 20px;
  margin-left: 20px;
`;

const MemberPicture = ({ shortID, screenWidth }) => (
  <Pic src={`assets/${shortID}.jpeg`} alt="Member Picture" style={{
    width: 'clamp(250px, 50vw, 400px)',
    height: 'clamp(250px, 50vw, 400px)',
  }}/>
);

MemberPicture.propTypes = {
  shortID: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default MemberPicture;