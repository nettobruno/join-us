import styled from 'styled-components';

export const Content = styled.div`
  margin: auto;
  width: 80%;
  padding: 2em;

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
`;

export const Breadcrumb = styled.p`
  color: #AEB6C1;
  font-size: 16px;
  margin-left: 6%;
  margin-top: 20px;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 0.2em;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
