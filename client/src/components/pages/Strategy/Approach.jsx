import React from 'react';
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
  display: flex;
  flex-direction: ${props => props.screenWidth < 1250 ? "column" : "row"};
  justify-content: center;
  align-items: ${props => props.screenWidth < 1250 ? "center" : undefined};
`

const Title = styled.h2`
  display: block;
  margin-top: 25px;
  margin-bottom: 50px;
`

const RationaleTitle = styled.h3`
  display: block;
  color: #748a8b;
`;

const LineBreak = styled.span`
  display: block;
  margin: 2px;
  width: 10vw;
  height: 1px;
  background-color: #4A5859;
`;

const Statement = styled.p`
  margin: 5px;
  margin-bottom: 2vh;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 80vw;
`;

const Approach = ({ screenWidth }) => {
  console.log(screenWidth);

  return (
    <ApproachContainer>
      <Title >Rationale</Title>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Cash Flow</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          All properties that we invest in provide sufficient cash flow to serve as a hedge against unforeseen but inevitable expenses.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Economies of Scale</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          Relative to smaller rental property investments, per unit-operational costs are lower, which improves margins.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Forced Appreciation</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          Given we select apartments that are underperforming, we are able to force appreciation through improvements in net operating income, which directly drives commercial real estate valuation.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Lower Vacancy Risk</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          Large apartments are much less exposed to vacancy risk relative to smaller rental properties, given each unit is a much smaller percentage of the total number of units. For example, a vacant single family home yields no income; this is a near-impossible scenario for a large apartment.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Macro Trends</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          The U.S. is increasingly becoming a nation of renters, as fewer and fewer people are committing to purchasing their own homes.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Market Resilience</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          A roof to live under is a basic human need, unlike other forms of commercial real estate. Moreover, during recessions people often downsize into less-expensive apartments. This  is why Sunrise Realty Investments targets quality apartments with value-add potential versus turn-key, new-build apartments.
        </Statement>
      </RationaleContainer>
      <RationaleContainer screenWidth={screenWidth} >
        <RationaleTitle>Tax Benefits</RationaleTitle>
        {/* <LineBreak /> */}
        <Statement>
          Due to their size, there is greater opportunity to benefit from depreciation strategies that ultimately improve investors' net income.
        </Statement>
      </RationaleContainer>

      {/* <Statement>
          <li>
            Forced appreciation: Given we select apartments that are underperforming, we are able to force appreciation through improvements in net operating income, which directly drives commercial real estate valuation.
          </li>
          <li>
            Lower vacancy risk: Large apartments are much less exposed to vacancy risk relative to smaller rental properties, given each unit is a much smaller percentage of the total number of units. For example, a vacant single family home yields no income; this is a near-impossible scenario for a large apartment.
          </li>
          <li>
            Macro trends: The U.S. is increasingly becoming a nation of renters, as fewer and fewer people are committing to purchasing their own homes.
          </li>
          <li>
            Market resilience: A roof to live under is a basic human need, unlike other forms of commercial real estate. Moreover, during recessions people often downsize into less-expensive apartments. This  is why Sunrise Realty Investments targets quality apartments with value-add potential versus turn-key, new-build apartments.
          </li>
          <li>
            Tax benefits: Due to their size, there is greater opportunity to benefit from depreciation strategies that ultimately improve investors' net income.
          </li>
        </ul>
      </Statement> */}
    </ApproachContainer>
  )
};

export default Approach;


