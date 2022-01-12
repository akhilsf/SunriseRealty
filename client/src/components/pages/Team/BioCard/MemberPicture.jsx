import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pic = styled.img`
  display: block;
`;

const MemberPicture = ({ shortID }) => (
  <Pic
    src={`assets/${shortID}.jpeg`}
    alt="Member Picture"
    style={{
      width: 'clamp(200px, 40vw, 250px)',
      height: 'clamp(200px, 40vw, 250px)',
    }}
  />
);

MemberPicture.propTypes = {
  shortID: PropTypes.string.isRequired,
};

export default MemberPicture;
