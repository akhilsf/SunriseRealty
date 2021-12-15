/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';

const Container = styled.main`
  background-color: rgb(245, 245, 245);
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Response = styled.p`
  font-size: .8em;
`;

const ResponseList = styled.ul`
  margin-left: 20px;
  margin-right: 5px;
`;

const ResponseListItem = styled.li`
  list-style-type: '~  ';
  font-size: .8em;
  margin-bottom: 2%;
`;

const FAQList = () => {
  const QAs = [
    {
      question: 'Do you invest in your own deals?',
      answer:
  <Response>
    A priority of Sunrise Realty Investments is to always ensure an alignment of interests among all stakeholders involved. Given this, we always invest in our own deals to ensure we have every incentive to make our investments successful ventures.
  </Response>,
    },
    {
      question: 'Why should we invest with Sunrise Realty Investments?',
      answer:
  <Response>
    They say real estate success is driven by three things: numbers, systems, and people. Our team was founded based on those three principles as evidenced by our respective professional backgrounds. As mentioned above, we always ensure we maintain an alignment of interest among all stakeholders involved. We hold transparency and regular communication as a top priority so investors are always informed and never out of the loop. Lastly, we never close or operate a deal without regular consultation from a network of mentors with decades of apartment investing experience. We want to ensure we have thought of every possible scenario and consideration to ensure our investors can confidently preserve and grow their wealth through Sunrise Realty Investments.
  </Response>,
    },
    {
      question: 'Why is Sunrise Realty Investments bullish on apartments?',
      answer:
  <ResponseList>
    <ResponseListItem>
      <u>Cash Flow:</u>
      {' '}
      All properties that we invest in provide sufficient cash flow to cover unpredictable but inevitable expenses.
    </ResponseListItem>
    <ResponseListItem>
      <u>Economies of Scale:</u>
      {' '}
      Relative to smaller rental property investments, per unit-operational costs are lower, which improve margins.
    </ResponseListItem>
    <ResponseListItem>
      <u>Forced Appreciation:</u>
      {' '}
      Given we select apartments that are underperforming, we are able to force appreciation through improvements in net operating income, which directly drive commercial real estate valuation.
    </ResponseListItem>
    <ResponseListItem>
      <u>Lower Vacancy Risk:</u>
      {' '}
      Large apartments are much less exposed to vacancy risk relative to smaller rental properties, given each unit is a much smaller percentage of the total number of units. For example, a vacant single family home yields no income; this is a near-impossible scenario for a large apartment.
    </ResponseListItem>
    <ResponseListItem>
      <u>Macro Trends:</u>
      {' '}
      The U.S. is increasingly becoming a nation of renters, as fewer and fewer people are committing to purchasing their own homes.
    </ResponseListItem>
    <ResponseListItem>
      <u>Market Resilience:</u>
      {' '}
      A roof to live under is a basic human need, unlike other forms of commercial real estate. Moreover, during recessions people often downsize into less-expensive apartments. This  is why Sunrise Realty Investments targets quality apartments with value-add potential versus turn-key, new-build apartments.
    </ResponseListItem>
    <ResponseListItem>
      <u>Tax Benefits:</u>
      {' '}
      Due to the scale of large apartments, there is greater opportunity to benefit from depreciation strategies that ultimately improve investor net returns.
    </ResponseListItem>
  </ResponseList>,
    },
    {
      question: 'If I invest with Sunrise Realty Investments, where is my money going? Am I investing in a fund that will be distributed across multiple properties or in a single asset?',
      answer:
  <Response>
    Investor funds go towards the property&apos;s down payment, closing costs, renovation costs, operating account funding, debt origination fee, and sponsor fees. Each investment with Sunrise Realty Investment is allocated to a single deal (i.e., not a fund).
  </Response>,
    },
    {
      question: 'How do I get paid?',
      answer:
  <Response>
    If you choose to invest in a deal with Sunrise Realty Investments, you will be paid through regular cash distributions and a lump sum payout at the end of the deal cycle.
  </Response>,
    },
    {
      question: 'What fees do I pay in order to invest with Sunrise Realty Investments?',
      answer:
  <Response>
    Many syndicators charge a slew of fees to investors, including refinancing fees and capital transaction fees; however, we do not believe this model aligns with our mission. At Sunrise Realty Investments, we value alignment of interests, and therefore we only charge a nominal, market-parity acquisition fee and asset management fee.
    {' '}
    <u>after</u>
    {' '}
    investor return targets are met
  </Response>,
    },
    {
      question: 'What are the biggest risks I should be aware of? How do you mitigate these risks?',
      answer:
  <Response>
    With any deal, the biggest risk factors are the market, the deal, and the team. We mitigate these risks through a disciplined, robust approach to market selection and apartment selection. Additionally, we always use a conservative underwriting process to value properties based on known performance metrics versus future, expected performance metrics and complement that with a rigorous, months-long due diligence period. We always incorporate a healthy operating and contingency budget to cover any unexpected dips in occupancy, lower than projected rent premiums, or unexpected costs. Furthermore, our team further mitigates risk by regularly seeking counsel from mentors with decades of apartment investing experience.
  </Response>,
    },
    {
      question: 'Isn\'t there going to be a market correction? How are you mitigating that risk?',
      answer:
  <Response>
    While we cannot predict the future, we prepare for all scenarios by always investing for cash flow, securing long-term debt, and ensuring we have adequate cash reserves.
  </Response>,
    },
    {
      question: 'What happens if you can\'t make the projected cash flow?',
      answer:
  <Response>
    Planned distributions accrue until they can be paid out; in a worst case scenario this happens at the point of exit. We mitigate this scenario with the above mentioned mitigation strategies. Additionally our investors are always paid before we pay ourselves.
  </Response>,
    },
    {
      question: 'How long is my money tied up in a deal? Can I withdraw before the exit?',
      answer:
  <Response>
    The length of the holding period is dependent on each investment&apos;s respective business plan, which is typically 3 to 5 years. For each deal, we outline the process whereby an investor can pull money out in a Private Placement Memorandum (PPM). This process generally entails selling shares to a qualified buyer vetted by the Sunrise Realty Investments team.
  </Response>,
    },
    {
      question: 'What are my responsibilities?',
      answer:
  <Response>
    As a limited partner, an investor&apos;s sole responsibility is to help fund the deal.
  </Response>,
    },
    {
      question: 'What is Sunrise Realty Investment\'s responsibilities?',
      answer:
  <Response>
    Sunrise Realty Investments is responsible for finding deals, reviewing and qualifying deals, making and negotiating offers, coordinating with professional property inspectors, finding the best financing options, coordinating with attorneys to create the LLC and partnership agreements, traveling to the subject property to perform due diligence and market research, hiring and overseeing the property management company, and performing additional asset management duties, including lender conversations, overseeing the business plan, and ongoing investor communication.
  </Response>,
    },
    {
      question: 'If I make the decision to invest in deal with Sunrise Realty Investments, what should I expect next?',
      answer:
  <Response>
    First, if you haven&apos;t already, please contact us to join our private email list through the INVEST page. If you meet your investor criteria, you will be added to our mailing list and be notified of potential deals. Once a deal is under contract, you would be invited to an investment offering conference call. During this call, you would learn about deal-specifics and the business plan. Following this call, you may verbally commit to invest in the deal and officially commit by signing the required documentation.
  </Response>,
    },
    {
      question: 'What types of updates or communications can I expect after the deal close?',
      answer:
  <Response>
    We will send monthly, structured updates on the property that will summarize key qualitative points such as commentary on overall performance, key project updates, local market developments, and key operating and financial metrics such as occupancy rates, income, operating expenses, and debt service. Transparency and regular communication is a top priority for Sunrise Realty Investments.
  </Response>,
    },
  ];

  return (
    <Container>
      {QAs.map((qa) => (
        <FAQ question={qa.question} answer={qa.answer} />
      ))}
    </Container>
  );
};

export default FAQList;
