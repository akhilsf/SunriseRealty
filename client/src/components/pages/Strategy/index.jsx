import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Approach from './Approach';
import Footer from '../../shared/Footer/index';
import Rationale from './Rationale';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionContainer = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(200,200,200);
  height: auto;
  cursor: pointer;
  transition: background-color 0.75s;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

const Title = styled.h1`
  display: block;
  color: #748a8b;
`;

const Statement = styled.p`
  font-size: clamp(15px, 4vw, 30px);
  text-align: center;
`;

const Strategy = ({ screenWidth }) =>{
  const [isApproachOpen, setIsApproachOpen] = useState(false);
  const [isRationaleOpen, setIsRationaleOpen] = useState(false);

  const handleSectionClick = (section) => {
    if (section === 'Approach') {
      setIsApproachOpen(!isApproachOpen);
      isRationaleOpen ? setIsRationaleOpen(false) : null;
    } else {
      setIsRationaleOpen(!isRationaleOpen);
      isApproachOpen ? setIsApproachOpen(false) : null;
    }
  }


  return (
    <Contents>
      <SectionContainer onClick={() => handleSectionClick('Approach')}
        style={{
          backgroundColor: isApproachOpen ? 'rgb(220, 220, 220)' : undefined,
        }}
      >
        <Title>APPROACH</Title>
        <Statement>
          We acquire underperforming apartment communities in growing markets to provide investors cash flow, equity growth, and tax benefits.
        </Statement>
      </SectionContainer>
      {isApproachOpen ? <Approach screenWidth={screenWidth} /> : null}
      <SectionContainer onClick={() => handleSectionClick('Rationale')}
        style={{
          backgroundColor: isRationaleOpen ? 'rgb(220, 220, 220)' : undefined,
        }}
      >
        <Title>WHY UNDERPEFORMING APARTMENT COMMUNITIES?</Title>
      </SectionContainer>
      {isRationaleOpen ? <Rationale screenWidth={screenWidth} /> : null}
      <Footer />
    </Contents>
  )
};

Strategy.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};

export default Strategy;
