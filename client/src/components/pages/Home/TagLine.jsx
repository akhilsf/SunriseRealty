import React from 'react';
import styled from 'styled-components';

const TagLineContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  height: auto;
  overflow: scroll;
  width: 100%;
  background-color: #424242;
  box-shadow: inset 0 0 20px #000000;
`;
const Text = styled.p`
  color: rgb(231, 229, 222);
  text-align: center;
  marginLeft: 5%;
  marginRight: 5%;
`;

const TagLine = () => (
  <TagLineContainer>
    <Text style={{
      fontSize: 'clamp(30px, 8vw, 84px)',
      fontFamily: 'Zen Antique Soft, serif',
    }}
    >
      The ability to invest
      <br />
      in real estate
      <br />
      without the hassle
    </Text>
  </TagLineContainer>
);

export default TagLine;
