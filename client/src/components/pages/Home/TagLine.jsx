import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  box-shadow: inset 0 0 20px #000000;
`;

const TagLineContainer = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  width: 50%;
  background-color: #4d6374;
  box-shadow: inset 0 0 20px #000000;
`;

const Pic = styled.img`
  object-fit: cover;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f5f3f2;
  font-size: clamp(20px, 4vw, 40px);
`;

const TagLine = ({ screenWidth }) => (
  <Container style={{
    flexDirection: screenWidth < 1000 ? 'column' : undefined,
  }}
  >
    <TagLineContainer id="taglineContainer">
      <Text style={{
        height: screenWidth < 1000 ? '20vh' : '40vh',
      }}
      >
        Time tested asset class.
        <br />
        <br />
        Disciplined approach.
      </Text>
    </TagLineContainer>
    <Pic
      src="assets/homePhoto.jpeg"
      style={{
        width: screenWidth < 1000 ? undefined : '50%',
        height: screenWidth < 1000 ? '20vh' : '40vh',
      }}
    />
  </Container>
);

TagLine.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default TagLine;
