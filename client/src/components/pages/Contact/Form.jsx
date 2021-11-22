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

const Questionnaire = styled.form`
  background-color: rgba(240, 240, 240);
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
      <p style={{ textAlign: 'center', fontSize: 'clamp(30px, 8vw, 84px)' }}>
        Inquiries?
      </p>
      <p style={{ textAlign: 'center', fontSize: 'clamp(20px, 6vw, 46px)' }}>
        Send us a note!
      </p>
    </LeftSideContainer>
    <Questionnaire style={{ width: screenWidth < 1000 ? undefined : '50%' }}>
      <InputField>
        <label htmlFor="nameContact" style={{ display: 'block' }}>FULL NAME</label>
        <input type="text" name="nameContact" id="nameContact" required />
      </InputField>
      <InputField>
        <label htmlFor="emailContact" style={{ display: 'block' }}>EMAIL ADDRESS</label>
        <input type="text" name="emailContact" id="emailContact" required />
      </InputField>
      <InputField>
        <label htmlFor="phoneContact" style={{ display: 'block' }}>PHONE NUMBER</label>
        <input type="text" name="phoneContact" id="phoneContact" required />
      </InputField>
      <InputField>
        <label htmlFor="subject" style={{ display: 'block' }}>SUBJECT</label>
        <input type="text" name="subject" id="subject" required />
      </InputField>
      <InputField>
        <label htmlFor="message" style={{ display: 'block' }}>MESSAGE</label>
        <textarea name="message" id="message" rows="4" cols="50" required />
      </InputField>
      <InputField>
        <Submit type="submit" value="SUBMIT" />
      </InputField>
    </Questionnaire>
  </Container>
);

Form.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Form;
