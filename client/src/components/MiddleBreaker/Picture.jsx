import React from 'react';
import styled from 'styled-components';

const PictureCover = styled.div`
  width: 100%;
  background-image: url(assets/houses.png);
  height: 300px;
`;

const Picture = () => (
  <PictureCover />
);

export default Picture;
