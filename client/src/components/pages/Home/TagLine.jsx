import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const TagLineContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: rgb(0, 0, 0, 0.6);
  `;

  const Pic = styled.div`
  background-image: url("assets/homePhoto.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 15vh;
  left: 0;
  width: 100%;
`;

  const Text = styled.p`
  display: flex;
  text-align: center;
  padding-top: 5%;
  color: #f5f3f2;
  font-size: clamp(30px, 4vw, 60px);
  font-family: 'Futura', sans-serif;
`;

const TagLine = ({ screenWidth }) => {
  const widthThreshold = 1000;

  return (
    <Container >
      <TagLineContainer style={{
        height: screenWidth < widthThreshold ? '50vh' : '80vh',
        alignItems: screenWidth < widthThreshold ? 'center' : undefined,
      }}
      >
        <Text style={{
          justifyContent: screenWidth < widthThreshold ? 'center' : 'end',
          width: screenWidth < widthThreshold ? '100%' : '95%',
        }}
        >
          Time-tested asset class.
          <br />
          <br />
          Disciplined approach.
        </Text>
      </TagLineContainer>
      <Pic style={{
          backgroundPosition: screenWidth < widthThreshold ? 'bottom' : 'center',
          backgroundCover: screenWidth < widthThreshold ? 'cover' : undefined,
          height: screenWidth < widthThreshold ? '50vh' : '80vh',
        }}
      />
    </Container>
  );
};

TagLine.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default TagLine;
