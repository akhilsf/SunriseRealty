import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    <WhoWeAre />
    <BioFeed screenWidth={screenWidth} />
    <Links />
    <Footer />
  </Contents>
);

Team.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Team;
