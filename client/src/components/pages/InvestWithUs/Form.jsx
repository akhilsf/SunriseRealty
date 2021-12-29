import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LeftSideContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

const GoogleFormContainer = styled.div`
  background-color: rgba(240, 240, 240);
  display: flex;
  justify-content: center;
  height: 1100px;
  padding: 5%;
`;

const InputField = styled.div`
  margin: 20px;
`;

const Submit = styled.input`
  border: 3px solid #4A5859;
  height: 3em;
  width: 95%;
  justify-content: center;
  margin-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;
  text-transform: capititalize;

  &:hover {
    background-color: #4A5859;
    color: white;
  }
`;

const Form = ({ screenWidth }) => (
  <Container style={{ flexDirection: screenWidth < 1000 ? 'column' : undefined }}>
    <LeftSideContainer style={{ width: screenWidth < 1000 ? undefined : '50%' }}>
      <p style={{ textAlign: 'center', fontSize: 'clamp(20px, 4vw, 40px)' }}>
        Are you interested in investing with us?
      </p>
      <br />
      <p style={{ textAlign: 'center', fontWeight: '400', fontSize: 'clamp(15px, 2vw, 30px)' }}>
        Fill out our form and we&apos;ll get back to you!
      </p>
    </LeftSideContainer>
    <GoogleFormContainer style={{ width: screenWidth < 1000 ? undefined : '50%' }}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKpGwUAq8oakuVVSqJ09tTKHfyrxzeZ6ASnU659ZhDZq5ohQ/viewform?embedded=true" width="640" height="1500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </GoogleFormContainer>
  </Container>
);

Form.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Form;
