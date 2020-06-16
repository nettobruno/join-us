import styled from 'styled-components';

export const Background = styled.div`
  background-color: #DE8F75;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  margin-bottom: 0px;

  @media (max-width: 800px) {
    text-align: left;
  }
`;

export const Image = styled.img`
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;
