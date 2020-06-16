import styled from 'styled-components';

export const BlockImage = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #CCCCCC;
`;

export const BlockNavigation = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  border-bottom: 1px solid #CCCCCC;
`;

export const LinkLogin = styled.a`
 text-decoration: none;
 margin: 15px;
 color: #686868;

 :hover {
  text-decoration: underline;
 }
`;

export const Navigation = styled.nav`
`;

export const ItemNavigation = styled.li`
 margin: 40px;
 display: inline-block;
`;

export const Link = styled.a`
 text-transform: uppercase;
 text-decoration: none;
 color: #686868;

 :hover {
  text-decoration: underline;
 }
`;

export const Align = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(104, 104, 104, 0.4);
  width: 70%;
  padding-left: 40px;
`;

export const IconSearch = styled.img`
  position: absolute;
  top: -2px;
  left: 5px;
`;

export const IconShopping = styled.img`
  margin-left: -10px;
`;
