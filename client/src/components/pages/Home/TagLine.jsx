import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const TagLineContainer = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.5);
  `;

  const Pic = styled.div`
  background-image: url("assets/homePhoto.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 15vh;
  left: 0;
  width: 100%;
  height: 80vh;
`;

  const Text = styled.p`
  display: flex;
  width: 95%;
  text-align: center;
  justify-content: end;
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
        height: screenWidth < widthThreshold ? '50vh' : '80vh'
      }}
      >
        <Text style={{
        }}
        >
          Time-tested asset class.
          <br />
          <br />
          Disciplined approach.
        </Text>
      </TagLineContainer>
      <Pic style={{
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
