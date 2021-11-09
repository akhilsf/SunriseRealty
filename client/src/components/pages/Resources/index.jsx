import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import FAQs from './FAQs';
import Footer from '../../shared/Footer/index';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Resources = () => (
  <Contents>
    <SubHeader title="Frequently Asked Questions" />
    <FAQs />
    <Footer />
  </Contents>
);

export default Resources;
