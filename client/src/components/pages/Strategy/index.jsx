import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subheader from './Subheader';
import Approach from './Approach';
import Footer from '../../shared/Footer/index';
import StepByStep from './StepByStep';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Strategy = ({ screenWidth }) => (
  <Contents>
    <Subheader />
    <StepByStep screenWidth={screenWidth} />
    <Approach screenWidth={screenWidth} />
    <Footer />
  </Contents>
);

Strategy.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Strategy;
