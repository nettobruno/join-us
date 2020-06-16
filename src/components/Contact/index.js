import React from 'react';
import { Content, Images, Title, List, ItemList, BlockForm, TitleForm, Form, Button, BlockInput } from './style';
import FloatingLabelInput from 'react-floating-label-input';


import LogoFacebook from '../../assets/facebook.png';
import LogoInstagram from '../../assets/insta.png';
import LogoPinterest from '../../assets/pinterest.png';
import SeloEbit from '../../assets/selo-ebit.png';
import Vtex from '../../assets/vtex-pci-200.png';

export default function Main() {
  return (
    <Content>
      <div>
        <Images src={LogoFacebook} alt="Logo facebook"/>
        <Images src={LogoInstagram} alt="Logo instagram"/>
        <Images src={LogoPinterest} alt="Logo pinterest"/>

        <div>
          <Images src={SeloEbit} alt="Selo Ebit"/>
          <Images src={Vtex} alt="Certificado Vtex"/>
        </div>
      </div>

      <div>
        <Title>Institucional</Title>
        <List>
          <ItemList>A Marca</ItemList>
          <ItemList>Lojas</ItemList>
          <ItemList>Contato</ItemList>
        </List>
      </div>

      <div>
        <Title>Informações</Title>
        <List>
          <ItemList>Formas de Pagamento</ItemList>
          <ItemList>Trocas e Devoluções</ItemList>
          <ItemList>Cuidado com o Produto</ItemList>
        </List>
      </div>

      <div>
        <Title>Conheça</Title>
        <List>
          <ItemList>Franquias e Multimarcas</ItemList>
          <ItemList>Trabalhe com a Gente</ItemList>
          <ItemList>Procon-RJ</ItemList>
        </List>
      </div>

      <BlockForm>
        <div>
          <TitleForm>Assine nossa news</TitleForm>

          <Form>
            <BlockInput>
              <FloatingLabelInput
                id="example-3"
                label="Nome"
                onBlur={('onBlur')}
                onChange={('onChange')}
                onFocus={('onFocus')}
              />
            </BlockInput>

            <BlockInput>
              <FloatingLabelInput
                id="example-3"
                label="Email"
                onBlur={('onBlur')}
                onChange={('onChange')}
                onFocus={('onFocus')}
              />
            </BlockInput>
            <Button>Enviar</Button>
          </Form>
        </div>
      </BlockForm>
    </Content>
  );
}
