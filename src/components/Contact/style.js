import styled from 'styled-components';

export const Content = styled.div`
  border-top: 2px solid #AEB6C1;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
`;

export const Images = styled.img`
  margin-right: 20px;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 0.2em;
  }
`;

export const Title = styled.h2`
  color: #AEB6C1;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 50px;
`;

export const List = styled.ul`
  margin-top: 10px
`;

export const ItemList = styled.li`
  color: #202020;
  list-style: none;
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const BlockForm = styled.div`
  background-color: #ffffff;
  border: 2px solid #AEB6C1;
  border-radius: 150px;
  position: absolute;
  width: 300px;
  height: 300px;
  right: 50px;
  top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const TitleForm = styled.h2`
  color: #202020;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Form = styled.form`
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #AEB6C1;
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #DE8F75;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  line-height: 23px;
  text-transform: uppercase;
  padding: 15px 35px;
  margin-top: 10px;
`;


export const BlockInput = styled.div`
  margin-bottom: 20px;
`;
