import React from 'react';
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
`

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
      <p style={{ textAlign: 'center', fontSize: 'clamp(20px, 6vw, 46px)'}}>
        Too bad. This form doesn&apos;t work either
      </p>
    </LeftSideContainer>
    <Questionnaire style={{ width: screenWidth < 1000 ? undefined : '50%' }}>
      <InputField>
        <label htmlFor="Name" style={{ display: 'block' }}>FIRST NAME</label>
        <input type="text" name="name" id="name" required />
      </InputField>
      <InputField>
        <label htmlFor="email" style={{ display: 'block' }}>EMAIL ADDRESS</label>
        <input type="text" name="email" id="email" required />
      </InputField>
      <InputField>
        <label htmlFor="phone" style={{ display: 'block' }}>PHONE NUMBER</label>
        <input type="text" name="phone" id="phone" required />
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

export default Form;
