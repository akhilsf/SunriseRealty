import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: max(40vh);
  box-shadow: inset 0 0 20px #000000;
`;

const TagLineContainer = styled.div`
  display: flex;
  width: 50%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  width: 100%;
  background-color: #002039;
  box-shadow: inset 0 0 20px #000000;
`;

const Pic = styled.img`
  object-fit: cover;
`;

const Text = styled.p`
  color: #f5f3f2;
  marginLeft: 5%;
  marginRight: 5%;
`;

const TagLine = ({ screenWidth }) => {
  const getHeight = () => (document.getElementById('taglineContainer') ? document.getElementById('taglineContainer').offsetHeight : null);

  getHeight();

  return (
    <Container style={{
      flexDirection: screenWidth < 1000 ? 'column' : undefined,
    }}
    >
      <TagLineContainer id="taglineContainer">
        <Text style={{
          fontSize: 'clamp(20px, 4vw, 40px)',
          textAlign: screenWidth < 1000 ? 'center' : undefined,
        }}
        >
          Time tested asset class.
          <br />
          Disciplined approach.
        </Text>
      </TagLineContainer>
      <Pic
        src="assets/homePhoto.jpeg"
        style={{
          width: screenWidth < 1000 ? undefined : '50%',
          height: screenWidth < 1000 ? 'auto' : undefined,
        }}
      />
    </Container>
  );
};

TagLine.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default TagLine;
