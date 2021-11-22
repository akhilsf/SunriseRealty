import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-direction: column;
  font-size: clamp(15px, 2vw, 30px);
  transition: background-color 0.75s;

  &:hover {
    background-color: #324042;
  }

`;

const LineBreak = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #94999a;
`;

const QuestionBlock = styled.div`
  width: 80%;
  cursor: pointer;
`;

const Question = styled.h2`
  text-transform: uppercase;
  margin-top: 2%;
  margin-bottom: 2%;
  color: #E1D9D1;
  font-size: 1em;
  transition: color 0.75s;
`;

const Answer = styled.div`
  width: 90%;
  transition: margin-top 0.75s, margin-bottom 0.75s;
`;

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container style={{
        backgroundColor: isOpen ? '#455659' : undefined,
      }}
      >
        <LineBreak />
        <QuestionBlock onClick={openQuestion}>
          <Question>
            Q:
            {' '}
            {question}
          </Question>
          <Answer style={{
            height: isOpen ? 'auto' : '0px',
            margin: isOpen ? '5%' : 0,
            fontSize: isOpen ? undefined : '0px',
          }}
          >
            {answer}
          </Answer>
        </QuestionBlock>
      </Container>
    </>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.element.isRequired,
};

export default FAQ;
