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
  background-color: rgba(200, 200, 200);
`;

const BioFeed = ({ screenWidth }) => {
  const bios = [
    {
      shortID: 'anish',
      name: 'Anish Patel',
      title: 'Managing Partner, Sunrise Realty Investments',
      bio: 'Anish specializes in detailed market analysis, financial modeling, asset management, and investor relations. His expertise stems from his 15+ year support of his family hotel business, where he supports marketing, corporate partnerships, and interior and exterior design activities; his 7+ year career within the biotechnology industry, where he informs major investments through market analysis, financial modeling, and strategic planning; and his 5+ year, personal experience owning and operating rental properties. Anish values continued education and growth, and is currently refining his skillsets and knowledge through real estate specific courses at the Berkeley Haas School of Business and through membership of several mastermind and investor groups.',
    },
    {
      shortID: 'akash',
      name: 'Akash Patel',
      title: 'Managing Partner, Sunrise Realty Investments',
      bio: 'Akash specializes in financial modeling, budget management, and lender relations. His expertise stems from his 9+ years of experience playing leading roles within Financial Planning & Analysis teams at Silicon Valley startups that have each had multi-billion dollar exits. His passions for real estate originated from his family\'s expansive investments in India and more recently, in the United States. For over 10+ years Akash has also been an avid stock investor and has a trained eye for identifying investments with long term value potential, a key skillset that he has enjoyed transferring over to real estate.',
    },
    {
      shortID: null,
      name: 'Joe Scalisi',
      title: 'Managing Partner, Sunrise Realty Investments',
      bio: 'Joe specializes in investor and broker relations. His expertise stems from his 15+ years of experience in talent acquisition for high-profile roles at Fortune 500 and early stage technology companies. His passion is finding people who not only share the vision of the companies he supports but also elevate the people around them; he enjoys applying this philosophy to real estate, which he believes is a true "team sport". For over 20 years, Joe has also been an avid investor. This has enabled him to develop skillsets in discipline, patience, and fundamental analysis which he applies to real estate investing.',
    },
    {
      shortID: 'akhil',
      name: 'Akhil Patel',
      title: 'Managing Partner, Sunrise Realty Investments',
      bio: 'Akhil specializes in financial modeling, due diligence, market research and analysis. His expertise stems from his 4+ year career in investment banking, where he advised mid-sized technology companies in mergers & acquistions and public offerings through financial modeling, strategic discussions with key stakeholders and transaction logistics; 10+ years of support of his family hotel business, where he advises marketing strategy, and interior and exterior design activities; and 2+ years as a software engineer, where he supports and creates user interfaces for mission critical applications. Akhil has also been an active investor for over 8 years. With a diverse background, Akhil has developed a broad skillset that allows him to view real estate investments from multiple angles.',
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
