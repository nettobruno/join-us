import styled from 'styled-components';

export const Content = styled.div`
  margin: auto;
  margin-top: -400px;
  margin-bottom: 100px;
  width: 80%;
  padding: 2em;

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
    margin-bottom: 50px;
    padding: 20px 10px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  color: #DE8F75;
  text-align: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  padding: 10px;
`;
