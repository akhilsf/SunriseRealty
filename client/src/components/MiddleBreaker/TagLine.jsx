import React from 'react';
import styled from 'styled-components';

const TagLineContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  height: auto;
  width: 100%;
  background-color: #F4B860;
`;
const Text = styled.p`
  color: white;
  marginLeft: 5%;
  marginRight: 5%;
`;

const tagLine = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const TagLine = () => (
  <TagLineContainer>
    <Text style={{ fontSize: '24px' }}>Sunrise Realty</Text>
    <Text>{tagLine}</Text>
  </TagLineContainer>
);

export default TagLine;
