import React from 'react';

import { Background, Text, Image } from './style';

import LogoFooter from '../../assets/logoFooter.png';

export default function Footer() {
  return (
    <Background>
      <div>
        <Text>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</Text>
        <Text>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</Text>
        <Text>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</Text>
      </div>
  
      <Image src={LogoFooter} alt="Logo original.io"/>
    </Background>
  );
}
