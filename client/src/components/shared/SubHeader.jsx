import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: 3em;
`;

const SubHeader = ({ title }) => (
  <Container>
    {title}
  </Container>
);

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader;
