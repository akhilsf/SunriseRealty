import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';
import TagLine from './TagLine';

const MiddleBreakerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleBreaker = () => (
  <MiddleBreakerContainer>
    <Picture />
    <TagLine />
  </MiddleBreakerContainer>
);

export default MiddleBreaker;
