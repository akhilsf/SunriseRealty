import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../../shared/Footer/index';
import Form from './Form';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = ({ screenWidth }) => (
  <Contents>
    <Form screenWidth={screenWidth} />
    <Footer />
  </Contents>
);

Contact.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Contact;
