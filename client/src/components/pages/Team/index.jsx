import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import BioFeed from './BioFeed';
import Links from './Links';
import WhoWeAre from './WhoWeAre';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Team = ({ screenWidth }) => (
  <Contents>
    <SubHeader title="The Team" />
    <WhoWeAre />
    <BioFeed screenWidth={screenWidth} />
    <Links />
    <Footer />
  </Contents>
);

export default Team;
