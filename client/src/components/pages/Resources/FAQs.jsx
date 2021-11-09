import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  background-color: #424242;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px #000000;
`;

const FAQ = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  font-size: clamp(15px, 2vw, 30px);
`;

const Question = styled.h2`
  text-transform: uppercase;
  color: #E1D9D1;
  font-size: 2em;
`;

const Response = styled.p`
  font-size: 1.2em;
  color: white;
`;

const LineBreak = styled.span`
  display: block;
  width: 90%;
  height: 1px;
  margin: clamp(10px, 5%, 20px);
  background-color: rgba(200, 200, 200);
`;

const FAQs = () => (
  <Container>
    <LineBreak />
    <FAQ>
      <Question>Q: What is investing?</Question>
      <Response>A: You shouldn't be here if you don't know that</Response>
    </FAQ>
    <LineBreak />
    <FAQ>
      <Question>Q: What is a home?</Question>
      <Response>A: Shelter</Response>
    </FAQ>
    <LineBreak />
  </Container>
);

export default FAQs;
