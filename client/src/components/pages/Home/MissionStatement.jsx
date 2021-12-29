/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  justify-content: center;
  padding: min(10vw, 100px);
  align-items: center;
  height: auto;
`;

const Title = styled.h1`
  display: block;
  color: #748a8b;
`;

const Statement = styled.p`
  margin: 25px 0 50px 0;
  font-size: min(5vw, 30px);
  text-align: center;
`;

const About = styled.a`
  border: 3px solid #4A5859;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
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
    <Title>OUR MISSION</Title>
    <Statement>
      We help investors confidently preserve and grow wealth through investments in apartment communities
    </Statement>
    <About href="/team">
      MEET THE TEAM
    </About>
  </MissionContainer>
);

export default MissionStatement;
