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
  border: 1px solid #bfc9cb;
  border-left: 10px solid #4d6374;
  margin-bottom: 10px;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

const QuestionBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const Question = styled.h2`
  text-transform: uppercase;
  margin-left: 10%;
  width: 90%;
  margin-top: 2%;
  margin-bottom: 2%;
  color: #748a8b;
  font-size: .8em;
  transition: color 0.75s;
`;

const Button = styled.div`
  text-align: center;
  float: right;
  width: 20%;
  color: #748a8b;
`;

const Answer = styled.div`
  width: 80%;
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
        backgroundColor: isOpen ? 'rgb(220, 220, 220)' : undefined,
      }}
      >
        <QuestionBlock onClick={openQuestion}>
          <Question>
            Q:
            {' '}
            {question}
          </Question>
          <Button>
            {isOpen ? '-' : '+'}
          </Button>
        </QuestionBlock>
          <Answer style={{
            height: isOpen ? 'auto' : '0px',
            margin: isOpen ? '5%' : 0,
            fontSize: isOpen ? undefined : '0px',
          }}
          >
            {answer}
          </Answer>
      </Container>
    </>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.element.isRequired,
};

export default FAQ;
