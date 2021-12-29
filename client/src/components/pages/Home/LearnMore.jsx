/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  padding: min(10vw, 100px);
  height: auto;
`;

const Title = styled.h1`
  display: block;
  color: #748a8b;
`;

const Statement = styled.p`
  margin-top: 25px;
  font-size: clamp(15px, 2vw, 30px);
  text-align: center;
`;

const ValueAddContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 2.5%;
  flex-direction: column;
  font-size: clamp(15px, 2vw, 20px);
`;

const More = styled.a`
  border: 3px solid #4A5859;
  margin-top: 25px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
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
    {/* <LineBreak /> */}
    <Statement>
      We acquire underperforming apartment communities in growing markets to provide investors cash flow, equity growth, and tax benefits
    </Statement>
    <br />
    <ValueAddContainer>
      We pride ourselves in providing quality, safe living conditions for tenants while optimizing income and operational efficiency to maximize investor returns. Our deal cycles typically last between 3 to 5 years and include cash flow distributions throughout; at the end of the cycle we sell or refinance to deliver large payouts to investors. Throughout the holding period and beyond, investors can expect constant accessibility to the team and consistent, transparent communication through structured, detailed updates.
    </ValueAddContainer>
    <More href="/strategy">
      LEARN MORE ABOUT OUR STRATEGY
    </More>
  </Container>
);

export default LearnMore;
