import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TagLine from './TagLine';
import MissionStatement from './MissionStatement';
import LearnMore from './LearnMore';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = ({ screenWidth }) => (
  <Contents>
    <TagLine screenWidth={screenWidth} />
    <MissionStatement />
    <LearnMore />
    <Footer />
  </Contents>
);

Home.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Home;
