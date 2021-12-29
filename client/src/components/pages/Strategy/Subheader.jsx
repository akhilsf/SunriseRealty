/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const ApproachContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: auto;
`;

const Title = styled.h1`
  display: block;
  color: #748a8b;
`;

const Statement = styled.p`
  margin: 50px 0 50px 0;
  font-size: clamp(15px, 4vw, 30px);
  text-align: center;
`;

const Subheader = () => (
  <ApproachContainer>
    <Title>APPROACH</Title>
    <Statement>
      We acquire underperforming apartment communities in growing markets to provide investors cash flow, equity growth, and tax benefits.
    </Statement>
  </ApproachContainer>
);

export default Subheader;
