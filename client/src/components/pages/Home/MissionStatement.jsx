/* eslint-disable max-len */
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
  height: auto;
`;

const Title = styled.h1`
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
  margin: 50px 0 50px 0;
  font-size: clamp(15px, 4vw, 30px);
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
    {/* <LineBreak /> */}
    <Statement>
      We help investors confidently preserve and grow wealth through investments in apartment communities.
    </Statement>
    <About href="/team">
      MEET THE TEAM
    </About>
  </MissionContainer>
);

export default MissionStatement;
