import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import BioFeed from './BioFeed';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const About = () => (
  <Contents>
    <SubHeader title="About Us" />
    <BioFeed />
    <Footer />
  </Contents>
);

export default About;
