import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: 40vh;
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

const MissionStatement = () => (
  <MissionContainer>
    <Title>MISSION STATEMENT</Title>
    <LineBreak />
    <Statement>
      This is the mission statement. It&apos;s really good and people will like it.
    </Statement>
  </MissionContainer>
);

export default MissionStatement;
