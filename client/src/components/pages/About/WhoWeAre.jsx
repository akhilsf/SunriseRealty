import React from 'react';
import styled from 'styled-components';

const WhoContainer = styled.div`
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


const WhoWeAre = () => (
  <WhoContainer>
    <Title>Who We Are</Title>
    <LineBreak />
    <Statement>
      We are a group of a seasoned professionals with a track record of investing in high cash-flow generating multi-family homes.
    </Statement>
  </WhoContainer>
);

export default WhoWeAre;