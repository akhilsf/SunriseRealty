import React from 'react';
import styled from 'styled-components';

const Pic = styled.img`
  display: block;
  margin-right: 20px;
`;

const MemberPicture = () => (
  <Pic height="400" src="assets/anish.jpeg" alt="Member Picture" />
);

export default MemberPicture;
