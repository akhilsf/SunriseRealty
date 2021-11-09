import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(assets/white-lines.jpeg);
  background-color: rgb(231, 229, 222);
  background-size: cover;
  padding: 5%;
  height: 400px;
`;

// const Image = styled.img`
//   width: 30%;
//   background-image: url(assets/white-lines.jpeg);
//   height:
// `;

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
  width: 50%;
  margin: 5px;
  font-size: 24px;
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

  &:hover {
    background-color: #4A5859;
    color: white;
  }

`;

const LearnMore = () => (
  <Container>
    {/* <Image /> */}
    <Title>
      WHAT WE DO
    </Title>
    <LineBreak />
    <Statement>
      This is what we do and we&apos;re really good at it.
    </Statement>
    <More href="/strategy">
      Learn More
    </More>
  </Container>
);

export default LearnMore;
