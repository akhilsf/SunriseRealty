import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: 400px;
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
  margin: 5px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const About = styled.a`
  border: 3px solid #4A5859;
  margin-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    background-color: #4A5859;
    color: white;
  }

`;

const MissionStatement = () => (
  <MissionContainer>
    <Title>MISSION STATEMENT</Title>
    <LineBreak />
    <Statement>
      This is the mission statement. It&apos;s really good and people will like it.
    </Statement>
    <About href="/about">
      About Us
    </About>
  </MissionContainer>
);

export default MissionStatement;
