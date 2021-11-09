import React from 'react';
import styled from 'styled-components';
import BioCard from './BioCard/BioCard';

const Container = styled.div`
  background-color: #424242;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px #000000;
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

const BioFeed = () => (
  <Container>
    {bios.map((bio) => (
      <BioCard shortID={bio.shortID} name={bio.name} title={bio.title} bio={bio.bio} />
    ))}
  </Container>
);

export default BioFeed;
