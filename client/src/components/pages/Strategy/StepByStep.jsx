import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  background-color: #002039;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px #000000;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px;
  height: 50vh;
  color: white;
`;

const StepTitle = styled.h1`
  color: #4c5f6b;
  text-align: left;
  font-size: clamp(86px, 12vw, 128px);
  font-family: Zen Antique Soft, serif;
  margin-right: 15px;
`

const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(15px, 2vw, 30px);
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: white;
  font-size: 3em;
`;

const Details = styled.p`
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

const StepByStep = () => (
  <Container>
    <LineBreak />
    <StepContainer>
      <StepTitle>One</StepTitle>
      <StepDetails>
        <Title>Acquisition</Title>
        <Details>Buy building</Details>
      </StepDetails>
    </StepContainer>
    <LineBreak />
    <StepContainer>
      <StepTitle>Two</StepTitle>
      <StepDetails>
        <Title>Value Add</Title>
        <Details>Add value</Details>
      </StepDetails>
    </StepContainer>
    <LineBreak />
    <StepContainer>
      <StepTitle>Three</StepTitle>
      <StepDetails>
        <Title>Cash Flow</Title>
        <Details>Make money</Details>
      </StepDetails>
    </StepContainer>
    <LineBreak />
    <StepContainer>
      <StepTitle>Four</StepTitle>
      <StepDetails>
        <Title>Exit</Title>
        <Details>Sell property</Details>
      </StepDetails>
    </StepContainer>
    <LineBreak />
  </Container>
);

export default StepByStep;
