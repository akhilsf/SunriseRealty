import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
// eslint-disable-next-line import/no-unresolved
import FAQList from './FAQList';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Resources = () => (
  <Contents>
    <SubHeader title="Frequently Asked Questions" />
    <FAQList />
    <Footer />
  </Contents>
);

export default Resources;
