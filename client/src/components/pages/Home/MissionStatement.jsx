/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
  display: flex;
  background-color: #4d6374;
  flex-direction: column;
  justify-content: center;
  padding: min(10vw, 100px);
  align-items: center;
  height: max(10vh, auto);
`;

const Title = styled.h1`
  display: block;
  color: white;
`;

const Statement = styled.p`
  margin: 25px 0 50px 0;
  font-size: clamp(15px, 2vw, 30px);
  text-align: center;
  color: white;
`;

const About = styled.a`
  border: 3px solid white;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;
  color: white;

  &:hover {
    background-color: white;
    color: #748a8b;
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
