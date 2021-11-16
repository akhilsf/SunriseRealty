import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ApproachContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: auto;
`;

const RationaleContainer = styled.div`
  margin-bottom: 2%;
  margin-top: 2%;
  width: 80%;
  display: flex;
  font-size: clamp(15px, 2vw, 24px);
  flex-direction: ${(props) => (props.screenWidth < 1250 ? 'column' : 'row')};
  align-items: center;
`;

const RationaleTitle = styled.h3`
  display: block;
  color: #748a8b;
  width: 60%;
  font-size: 1em;
  text-align: center;
`;

const LineBreak = styled.span`
  display: block;
  width: 90vw;
  height: 1px;
  margin: clamp(10px, 5%, 20px);
  background-color: #748a8b;
`;

const Statement = styled.p`
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  width: 80vw;
  text-align: ${(props) => (props.screenWidth < 1250 ? 'center' : 'left')}
`;

const Approach = ({ screenWidth }) => {
  console.log(screenWidth);

  const rationaleList = [
    {
      rationale: 'Cash Flow',
      description: 'All properties that we invest in provide sufficient cash flow to serve as a hedge against unforeseen but inevitable expenses.',
    },
    {
      rationale: 'Economies of Scale',
      description: 'Relative to smaller rental property investments, per unit-operational costs are lower, which improves margins.',
    },
    {
      rationale: 'Forced Appreciation',
      description: 'Given we select apartments that are underperforming, we are able to force appreciation through improvements in net operating income, which directly drives commercial real estate valuation.',
    },
    {
      rationale: 'Lower Vacancy Risk',
      description: 'Large apartments are much less exposed to vacancy risk relative to smaller rental properties, given each unit is a much smaller percentage of the total number of units. For example, a vacant single family home yields no income; this is a near-impossible scenario for a large apartment.',
    },
    {
      rationale: 'Macro Trends',
      description: 'The U.S. is increasingly becoming a nation of renters, as fewer and fewer people are committing to purchasing their own homes.',
    },
    {
      rationale: 'Market Resilience',
      description: 'A roof to live under is a basic human need, unlike other forms of commercial real estate. Moreover, during recessions people often downsize into less-expensive apartments. This  is why Sunrise Realty Investments targets quality apartments with value-add potential versus turn-key, new-build apartments.',
    },
    {
      rationale: 'Tax Benefits',
      description: 'Due to their size, there is greater opportunity to benefit from depreciation strategies that ultimately improve investors\' net income.',
    },
  ];

  return (
    <ApproachContainer>
      {/* <Title>Rationale</Title> */}
      <LineBreak />
      {rationaleList.map((item) => (
        <>
          <RationaleContainer screenWidth={screenWidth}>
            <RationaleTitle>{item.rationale}</RationaleTitle>
            <Statement screenWidth={screenWidth}>
              {item.description}
            </Statement>
          </RationaleContainer>
          <LineBreak />
        </>
      ))}
    </ApproachContainer>
  );
};

Approach.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Approach;
