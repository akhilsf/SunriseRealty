import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  position: static;
  bottom: 0;
  width: 100%;
  height: auto;
  border-top: 1px solid rgba(200,200,200);
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.nav`
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const Link = styled.a`
  display: in-block;
  font-size: 18px;
  text-decoration: none;
  padding: 20px;
`;
