import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../shared/SubHeader';
import Footer from '../../shared/Footer/index';
import Form from './Form';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = ({ screenWidth }) => (
  <Contents>
    <SubHeader title="Contact Us" />
    <Form screenWidth={screenWidth} />
    <Footer />
  </Contents>
);

export default Contact;
