import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pic = styled.img`
  display: block;
  margin-right: 20px;
  margin-left: 20px;
`;

const MemberPicture = ({ shortID }) => (
  <Pic
    src={`assets/${shortID}.jpeg`}
    alt="Member Picture"
    style={{
      width: 'clamp(200px, 40vw, 350px)',
      height: 'clamp(200px, 40vw, 350px)',
    }}
  />
);

MemberPicture.propTypes = {
  shortID: PropTypes.string.isRequired,
};

export default MemberPicture;
