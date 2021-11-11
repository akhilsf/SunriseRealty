import React from 'react';
import styled from 'styled-components';
import BioCard from './BioCard/BioCard';

const Container = styled.div`
  background-color: #002039;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px #000000;
`;

const LineBreak = styled.span`
  display: block;
  width: 90%;
  height: 1px;
  margin: clamp(10px, 5%, 20px);
  background-color: rgba(200, 200, 200);
`;

const bios = [
  {
    shortID: 'anish',
    name: 'Anish Patel',
    title: 'Partner, Sunrise Realty Investments',
    bio: 'This is my bio. People will think it\'s really interesting',
  },
  {
    shortID: 'anish',
    name: 'Anish Patel',
    title: 'Partner, Sunrise Realty Investments',
    bio: 'This is my bio. People will think it\'s really interesting',
  },
  {
    shortID: 'anish',
    name: 'Anish Patel',
    title: 'Partner, Sunrise Realty Investments',
    bio: 'This is my bio. People will think it\'s really interesting',
  },
];

const BioFeed = ({ screenWidth }) => (
  <Container>
    <LineBreak />
    {bios.map((bio) => (
      <>
        <BioCard shortID={bio.shortID} name={bio.name} title={bio.title} bio={bio.bio} screenWidth={screenWidth} />
        <LineBreak />
      </>
    ))}
  </Container>
);

export default BioFeed;
