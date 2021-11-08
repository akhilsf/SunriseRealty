import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  border-bottom: 1px solid rgba(200,200,200);
`;

export const Hamburger = styled.button`
  position: absolute;
  right: 5%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const MenuLine = styled.span`
  display: block;
  height: 3px;
  background-color: #4A5859;
  margin: 3px 0;
  transition: all 0.3s ease-in-out;
`;
