import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import Footer from '../../shared/Footer/index';
import Form from './Form';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const InvestWithUs = ({ screenWidth }) => (
  <Contents>
    <SubHeader title="Invest With Us" />
    <Form screenWidth={screenWidth} />
    <Footer />
  </Contents>
);

export default InvestWithUs;
