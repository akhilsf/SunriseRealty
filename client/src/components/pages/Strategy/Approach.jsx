import React from 'react';
import styled from 'styled-components';

const ApproachContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: auto;
`;

const Title = styled.h3`
  display: block;
  color: #748a8b;
`;

const LineBreak = styled.span`
  display: block;
  margin: 2px;
  width: 10%;
  height: 1px;
  background-color: #4A5859;
`;

const Statement = styled.p`
  width: 50%;
  margin: 5px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;


const Approach = () => (
  <ApproachContainer>
    <Title>Our Approach</Title>
    <LineBreak />
    <Statement>
      Our strategy is a time-tested approach of acquiring multi-family homes, adding value through strategic cosmetic and management improvements, and refinancing or selling for returns that align with our investment criteria
    </Statement>
  </ApproachContainer>
);

export default Approach;


