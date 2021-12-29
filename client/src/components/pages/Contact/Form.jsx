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
  height: 1200px;
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
        Inquiries?
      </p>
      <br />
      <p style={{ textAlign: 'center', fontWeight: '400', fontSize: 'clamp(15px, 2vw, 30px)'  }}>
        Send us a note!
      </p>
      <br/>
      <p style={{ textAlign: 'center', fontWeight: '200', fontSize: 'clamp(10px, 1vw, 15px)' }}>
        (If form does not load, send use note at <a href="mailto:anish@sunriserealty.io" style={{ all: 'revert', }}>anish@sunriserealty.io</a>)
      </p>
    </LeftSideContainer>
    <GoogleFormContainer>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNHwke7DF1Mj4JyUILpGCRdTIy0YaXG_4SK3N8ecrwYpkLlQ/viewform?embedded=true" width="640" height="1500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </GoogleFormContainer>
  </Container>
);

Form.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Form;