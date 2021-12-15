import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  padding: 5%;
  height: 400px;
`;

const Statement = styled.h2`
  margin: 5px;
  color: #748a8b;
  text-transform: uppercase;
  // font-weight: 500;
  text-align: center;
`;

const Button = styled.a`
  border: 3px solid #4A5859;
  margin-top: 10px;
  margin-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    background-color: #4A5859;
    color: white;
  }
`;

const Links = () => (
  <Container>
    <Statement style={{ marginTop: '50px' }}>
      Interested in investing with us?
    </Statement>
    <Button href="/invest-with-us">
      INVEST WITH US
    </Button>
    <Statement>
      General inquiries?
    </Statement>
    <Button href="/contact">
      CONTACT US
    </Button>
  </Container>
);

export default Links;
