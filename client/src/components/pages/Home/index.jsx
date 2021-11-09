import React from 'react';
import styled from 'styled-components';
import TagLine from './TagLine';
import MissionStatement from './MissionStatement';
import LearnMore from './LearnMore';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Home = ({ screenWidth }) => (
  <Contents>
    <TagLine screenWidth={screenWidth} />
    <MissionStatement />
    <LearnMore />
    <Footer />
  </Contents>

);

export default Home;
