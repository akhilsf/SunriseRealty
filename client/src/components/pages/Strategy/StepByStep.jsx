/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable semi */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MagnifyingGlass } from '@styled-icons/open-iconic/MagnifyingGlass';
import { TargetArrow } from '@styled-icons/fluentui-system-filled/TargetArrow';
import { Steps } from '@styled-icons/fluentui-system-filled/Steps';
import { TorsoBusiness } from '@styled-icons/foundation/TorsoBusiness';
import { Sell } from '@styled-icons/material-twotone/Sell'

const Container = styled.main`
  background-color: #4d6374;
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
  font-size: 2em;
  margin-bottom: 1em;
`;

const DescriptionList = styled.ul``;

const Description = styled.li`
  list-style-type: '~  ';
  font-size: 1em;
  margin-bottom: 2%;
  color: white;
`;

const Icons = {
  MagnifyingGlass: styled(MagnifyingGlass)`
    color: #bababa;
  `,
  TargetArrow: styled(TargetArrow)`
    color: #bababa;
  `,
  Steps: styled(Steps)`
    color: #bababa;
  `,
  TorsoBusiness: styled(TorsoBusiness)`
    color: #bababa;
  `,
  Sell: styled(Sell)`
    color: #bababa;
  `,
};

const StepByStep = ({ screenWidth }) => {
  const [iconSize, setIconSize] = useState(0);

  useEffect(() => {
    if (screenWidth < 500) {
      setIconSize(150);
    } else if (screenWidth < 1000) {
      setIconSize(200);
    } else {
      setIconSize(300);
    }
  }, [screenWidth])

  const steps = [
    {
      stepIcon: <Icons.MagnifyingGlass size={iconSize} />,
      stepTitle: 'Market Selection',
      description:
  <>
    <Description>
      We select markets that meet specific criteria, such as a large, growing population,  substantial job diversity, decreasing or flat unemployment, and a healthy balance of  supply and demand.
    </Description>
  </>,
    },
    {
      stepIcon: <Icons.TargetArrow size={iconSize} />,
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
      stepIcon: <Icons.Steps size={iconSize} />,
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
      stepIcon: <Icons.TorsoBusiness size={iconSize} />,
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
      stepIcon: <Icons.Sell size={iconSize} />,
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
      {/* <LineBreak /> */}
      {steps.map((step) => (
        <>
          <StepContainer>
            {step.stepIcon}
            <StepDetails>
              <Title>{step.stepTitle}</Title>
              <DescriptionList>
                {step.description}
              </DescriptionList>
            </StepDetails>
          </StepContainer>
          {/* <LineBreak /> */}
        </>
      ))}
    </Container>
  );
};

StepByStep.propTypes = {
  screenWidth: PropTypes.number.isRequired,
}

export default StepByStep;
