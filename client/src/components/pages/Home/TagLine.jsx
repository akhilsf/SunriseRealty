import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(245, 245, 245);
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
  margin-left: 5%;
  align-items: center;
  color: #f5f3f2;
  font-size: clamp(25px, 4vw, 40px);
  font-family: 'Futura', sans-serif;
`;

const TagLine = ({ screenWidth }) => {
  const widthThreshold = 1000;

  return (
    <Container style={{
      flexDirection: screenWidth < widthThreshold ? 'column' : undefined,
      // height: screenWidth < widthThreshold ? '45vh' : undefined,
    }}
    >
      <TagLineContainer style={{
        width: screenWidth < widthThreshold ? '100%' : '50%',
      }}
      >
        <Text style={{
          height: screenWidth < widthThreshold ? '30vh' : '60vh',
          justifyContent: screenWidth < widthThreshold ? 'center' : undefined,
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
          width: screenWidth < widthThreshold ? undefined : '50%',
          height: screenWidth < widthThreshold ? '30vh' : '60vh',
        }}
      />
    </Container>
  );
};

TagLine.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default TagLine;
