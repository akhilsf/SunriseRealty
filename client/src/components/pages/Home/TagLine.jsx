import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  box-shadow: inset 0 0 20px #000000;
`

const TagLineContainer = styled.div`
  display: flex;
  width: 50%;
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

const Pic = styled.img`
  object-fit: cover;
`

const Text = styled.p`
  color: rgb(231, 229, 222);
  marginLeft: 5%;
  marginRight: 5%;
`;

const TagLine = ({ screenWidth }) => (
  <Container style={{
    flexDirection: screenWidth < 1000 ? 'column' : undefined,
  }}>
    <TagLineContainer>
      <Text style={{
        fontSize: 'clamp(30px, 6vw, 60px)',
        fontFamily: 'Zen Antique Soft, serif',
      }}
      >
        Time tested asset class.
        <br />
        Disciplined approach.
      </Text>
    </TagLineContainer>
    <Pic src='assets/homePhoto.jpeg' style={{
      width: screenWidth < 1000 ? undefined : '50%',
    }}/>
  </Container>
);

export default TagLine;
