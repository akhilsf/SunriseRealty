/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(assets/white-lines.jpeg);
  background-size: cover;
  padding: 5%;
  height: auto;
`;

const Title = styled.h3`
  display: block;
  color: #748a8b;
`;

const LineBreak = styled.span`
  display: block;
  margin: 2px;
  width: 10%;
  height: 1px;
  background-color: #4A5859;
`;

const Statement = styled.p`
  margin: 5px;
  font-size: clamp(20px, 4vw, 40px);
  font-weight: 500;
  text-align: center;
`;

const More = styled.a`
  border: 3px solid #4A5859;
  margin-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;
  text-align: center;

  &:hover {
    background-color: #4A5859;
    color: white;
  }
`;

const LearnMore = () => (
  <Container>
    <Title>
      WHAT WE DO
    </Title>
    <LineBreak />
    <Statement>
      We acquire underperforming apartment communities in growing markets to provide investors immediate cash flow, equity growth, and tax benefits.
    </Statement>
    <br />
    <Statement style={{ fontSize: '18px', fontWeight: '400' }}>
      We pride ourselves in providing quality, safe living conditions for tenants while optimizing income and operational efficiency to maximize investor returns. Our deal cycles typically last between 3 to 5 years and include cash flow distributions throughout; at the end of the cycle we sell or refinance to deliver large payouts to investors. Throughout the holding period and beyond, investors can expect constant accessibility to the team and consistent, transparent communication through structured, detailed updates.
    </Statement>
    <More href="/strategy">
      LEARN MORE ABOUT OUR STRATEGY
    </More>
  </Container>
);

export default LearnMore;
