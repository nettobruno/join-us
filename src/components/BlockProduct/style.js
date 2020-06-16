import styled from 'styled-components';

export const Content = styled.div`
`;

export const Image = styled.img`
`;

export const BlockContent = styled.div`
  border: 2px solid #D2E1DF;
  padding: 15px;
  width: 450px;

  @media (max-width: 800px) {
    border: none;
    padding: 0px;
  }
`;

export const TitleProduct = styled.h1`
  color: #202020;
  font-weight: bold;
  font-size: 26px;
  line-height: 100%;
  text-transform: uppercase;
`;

export const SubtitleProduct = styled.p`
  color: #202020;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const BlockValue = styled.div`
  margin-top: 20px;
`;

export const Value = styled.p`
  color: #E35442;
  text-decoration-line: line-through;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
`;

export const Bar = styled.p`
  color: #E35442;
  text-decoration-line: none;
  font-size: 14px;
  display: inline-block;
  margin-left: 5px;
`;

export const Sale = styled.p`
  color: #686868;
  font-weight: bold;
  font-size: 20px;
  line-height: 163.42%;
  display: inline-block;
  margin-left: 10px;
`;

export const Financing = styled.p`
  color: #7F7F7F;
  font-size: 12px;
  line-height: 18px;
  margin-top: -30px;
`;

export const BlockOptions = styled.div`
  margin-top: 40px;
`;

export const Link = styled.a`
`;

export const NormalText = styled.p`
  color: #202020;
  font-size: 14px;
  line-height: 20px;
`;

export const BlockColors = styled.div`
  margin-top: 10px;
`;

export const CircleColor = styled.a`
  height: 22px;
  width: 22px;
  border-radius: 11px;  
  display: inline-block;
  margin-right: 15px;

  :hover {
    transition: .3s;
    transform: scale(1.2);
  }
`;

export const BlockSize = styled.div`
  margin-top: 20px;
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
  width: 330px;
`;

export const LinkMeasures = styled.a`
  color: #DE8F75;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  display: flex;
`;

export const ItemSize = styled.button`
  color: #5F75AA;
  font-size: 14px;
  display: inline-block;
  padding: 5px;
  border: 1px solid #EBEBEB;
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
  text-decoration: none;

  :focus {
    background: #DE8F75;
    border: 1px solid #DE8F75;
    color: #ffffff;
    font-weight: bold;
    outline: none;
  }
`;

export const BlockButton = styled.div`
  margin-top: 40px;
`;

export const Description = styled.p`
  color: #202020;
  font-size: 14px;
  line-height 200%;
  margin-top: 30px;
`;
