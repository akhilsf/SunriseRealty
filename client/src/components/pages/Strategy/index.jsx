import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import Approach from './Approach';
import Footer from '../../shared/Footer/index';
import StepByStep from './StepByStep';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Strategy = ({ screenWidth }) => (
  <Contents>
    <SubHeader title="Strategy" />
    <Approach />
    <StepByStep />
    <Footer />
  </Contents>
);

export default Strategy;
