import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
`;

const TagLineContainer = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  background-color: #4d6374;
`;

  const Pic = styled.img`
  object-fit: cover;
`;

  const Text = styled.p`
  display: flex;
  width: 50%;
  align-items: center;
  color: #f5f3f2;
  font-size: clamp(20px, 4vw, 40px);
  font-family: 'Futura', sans-serif;
`;

const TagLine = ({ screenWidth }) => {
  const widthThreshold = 1000;

  return (
    <Container style={{
      flexDirection: screenWidth < widthThreshold ? 'column' : undefined,
      height: screenWidth < widthThreshold ? '45vh' : undefined,
    }}
    >
      <TagLineContainer style={{
        width: screenWidth < widthThreshold ? '100%' : '48%',
      }}
      >
        <Text style={{
          height: screenWidth < widthThreshold ? '20vh' : '40vh',
          justifyContent: screenWidth < widthThreshold ? 'center' : undefined,
          marginLeft: screenWidth < widthThreshold ? undefined : '5%',
          textAlign: screenWidth < widthThreshold ? 'center' : undefined,
        }}
        >
          Time-tested asset class.
          <br />
          <br />
          Disciplined approach.
        </Text>
      </TagLineContainer>
      <Pic
        src="assets/homePhoto.jpeg"
        style={{
          width: screenWidth < widthThreshold ? undefined : '48%',
          height: screenWidth < widthThreshold ? '20vh' : '40vh',
        }}
      />
    </Container>
  );
};

TagLine.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default TagLine;
