import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BioCard from './BioCard/BioCard';

const Container = styled.div`
  background-color: #4d6374;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 90%;
`;

const LineBreak = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: clamp(10px, 5%, 20px);
  background-color: rgba(200, 200, 200);
`;

const BioFeed = ({ screenWidth }) => {
  const bios = [
    {
      shortID: 'anish',
      name: 'Anish Patel',
      title: 'Managing Partner, Sunrise Realty Investments',
      bio: 'Anish specializes in detailed market analysis, financial modeling, asset management, and investor relations. His expertise stems from his 15+ year support of his family hotel business, where he supports marketing, corporate partnerships, and interior and exterior design activities; his 7+ year career within the biotechnology industry, where he informs major investments through market analysis, financial modeling, and strategic planning;  and his 5+ year, personal experience owning and operating rental properties. Anish values continued education and growth, and is currently refining his skillsets and knowledge through real estate specific courses at the Berkeley Haas School of Business and through membership of several mastermind and investor groups.',
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

  return (
    <Container>
      <LineBreak />
      {bios.map((bio) => (
        <>
          <BioCard
            shortID={bio.shortID}
            name={bio.name}
            title={bio.title}
            bio={bio.bio}
            screenWidth={screenWidth}
          />
          <LineBreak />
        </>
      ))}
    </Container>
  );
};

BioFeed.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default BioFeed;
