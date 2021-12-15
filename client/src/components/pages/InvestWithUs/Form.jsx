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
      <p style={{ textAlign: 'center', fontSize: 'clamp(20px, 4vw, 40px)' }}>
        Are you interested in investing with us?
      </p>
      <br />
      <p style={{ textAlign: 'center', fontWeight: '400', fontSize: 'clamp(15px, 2vw, 30px)' }}>
        Fill out our form and we&apos;ll get back to you!
      </p>
    </LeftSideContainer>
    <Questionnaire style={{ width: screenWidth < 1000 ? undefined : '50%' }}>
      <InputField>
        <label htmlFor="nameInvestWUs" style={{ display: 'block' }}>FULL NAME</label>
        <input type="text" name="nameInvestWUs" id="nameInvestWUs" required />
      </InputField>
      <InputField>
        <label htmlFor="emailInvestWUs" style={{ display: 'block' }}>EMAIL ADDRESS</label>
        <input type="text" name="emailInvestWUs" id="emailInvestWUs" required />
      </InputField>
      <InputField>
        <label htmlFor="phoneInvestWUs" style={{ display: 'block' }}>PHONE NUMBER</label>
        <input type="text" name="phoneInvestWUs" id="phoneInvestWUs" required />
      </InputField>
      <InputField>
        <label htmlFor="street" style={{ display: 'block' }}>STREET ADDRESS</label>
        <input type="text" name="street" id="street" required />
      </InputField>
      <InputField>
        <label htmlFor="city" style={{ display: 'block' }}>CITY</label>
        <input type="text" name="city" id="city" required />
      </InputField>
      <InputField>
        <label htmlFor="state" style={{ display: 'block' }}>STATE</label>
        <input type="text" name="state" id="state" required />
      </InputField>
      <InputField>
        <label htmlFor="zip" style={{ display: 'block' }}>ZIP / POSTAL CODE</label>
        <input type="text" name="zip" id="zip" required />
      </InputField>
      <InputField>
        <label htmlFor="investor" style={{ display: 'block' }}>ARE YOU AN ACCREDITED INVESTOR?</label>
        <select name="investor" id="investor" defaultValue="--" required>
          <option value="--" disabled hidden>--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </InputField>
      <InputField>
        <label htmlFor="citizen" style={{ display: 'block' }}>ARE YOU A US CITIZEN?</label>
        <select name="citizen" id="citizen" defaultValue="--" required>
          <option value="--" disabled hidden>--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </InputField>
      <InputField>
        <label htmlFor="citizen" style={{ display: 'block' }}>HOW MUCH ARE YOU WILLING TO PASSIVELY INVEST?</label>
        <select name="citizen" id="citizen" defaultValue="--" required>
          <option value="--" disabled hidden>--</option>
          <option value="1">25,000 - 50,000</option>
          <option value="2">50,000 - 100,000</option>
          <option value="3">100,000 - 250,000</option>
          <option value="4">250,000 - 500,000</option>
          <option value="5">500,000 - 1,000,000</option>
          <option value="6">500,000 - 1,000,000</option>
          <option value="7">1,000,000 - 5,000,000</option>
          <option value="8">5,000,000 - 20,000,000</option>
          <option value="9">20,000,000+</option>
        </select>
      </InputField>
      <InputField>
        <label htmlFor="goals" style={{ display: 'block' }}>WHAT ARE YOUR INVESTMENT GOALS?</label>
        <textarea name="goals" id="goals" rows="4" cols="50" required />
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
