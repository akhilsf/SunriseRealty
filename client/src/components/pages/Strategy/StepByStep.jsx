/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  background-color: #002039;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px #000000;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px;
  height: auto;
  color: white;
`;

const StepNumber = styled.h1`
  color: #4c5f6b;
  text-align: left;
  font-size: clamp(86px, 12vw, 128px);
  font-family: Zen Antique Soft, serif;
  margin-right: 15px;
`;

const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(15px, 2vw, 30px);
  margin-left: 10%;
  margin-right: 10%;
`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-size: 3em;
`;

const Description = styled.li`
  font-size: 0.8em;
  margin-bottom: 2%;
  color: white;
`;

const LineBreak = styled.span`
  display: block;
  width: 90vw;
  height: 1px;
  margin: clamp(10px, 5%, 20px);
  background-color: rgba(200, 200, 200);
`;

const StepByStep = () => {
  const steps = [
    {
      stepNo: 'One',
      stepTitle: 'Market Selection',
      description:
  <>
    <Description>
      We select markets that meet specific criteria, such as a large, growing population,  substantial job diversity, decreasing or flat unemployment, and a healthy balance of  supply and demand.
    </Description>
  </>,
    },
    {
      stepNo: 'Two',
      stepTitle: 'Apartment Selection',
      description:
  <>
    <Description>
      Within selected markets, we screen and underwrite dozens of properties against target return metrics and other specific criteria before identifying a property that we feel is worth pursuing an offer on.
    </Description>
    <Description>
      Apartments that we submit offers on always have ample opportunity to force appreciation and improve cash flow through physical enhancements or operational improvements.
    </Description>
  </>,
    },
    {
      stepNo: 'Three',
      stepTitle: 'Acquisition Process',
      description:
  <>
    <Description>
      Once an offer is accepted, we undergo months of due diligence to confirm our underwriting assumptions and obtain third-party perspectives from our on-the-ground expert partners.
    </Description>
    <Description>
      Based on our due diligence, we may move forward with the deal, refine our offer, or walk away from the deal.
    </Description>
    <Description>
      In advance of a deal close, we develop a comprehensive business plan to ensure we meet investor goals and have clear directives for our on-the-ground partners.
    </Description>
  </>,
    },
    {
      stepNo: 'Four',
      stepTitle: 'Asset Management',
      description:
  <>
    <Description>
      Open deal close, we immediately begin executing  our business plan, adding immediate value through improved income or reduced expenses.
    </Description>
    <Description>
      The property generates cash flow on a monthly basis, which are distributed to investors at a regular cadence.
    </Description>
    <Description>
      Throughout the deal cycle, we ensure that we are constantly available to answer any and all questions our investors may have and that we provide consistent, transparent communication through structured, detailed updates.
    </Description>
  </>,
    },
    {
      stepNo: 'Five',
      stepTitle: 'Exit',
      description:
  <>
    <Description>
      At the end of the deal cycle, which is informed by the business plan, investor return goals, or market conditions, the property is either refinanced or sold to return a lump sum payout to investors.  In the scenario that the property is refinanced, investors continue to participate in cash flow distributions and equity growth.
    </Description>
  </>,
    },

  ];

  return (
    <Container>
      <LineBreak />
      {steps.map((step) => (
        <>
          <StepContainer>
            <StepNumber>{step.stepNo}</StepNumber>
            <StepDetails>
              <Title>{step.stepTitle}</Title>
              <ul>{step.description}</ul>
            </StepDetails>
          </StepContainer>
          <LineBreak />
        </>
      ))}
    </Container>
  );
};

export default StepByStep;
