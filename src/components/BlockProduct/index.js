import React, { useState } from 'react';

import { Content, BlockContent, TitleProduct, SubtitleProduct, BlockValue, Value, Bar, Sale, Financing, BlockOptions, Link, NormalText, BlockColors, CircleColor, BlockSize, Align, LinkMeasures, ItemSize, BlockButton, Description } from './style';

import LightBox from '../LightBox';

export default function BlockProduct() {
  const sneakersSize = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
  const colorSneakers = [
    {hex: '#A9095E', name: '(Fucsia)' },
    {hex: '#2A5A75', name: '(Azul)' },
    {hex: '#A14830', name: '(Marrom)'},
    {hex: '#000000', name: '(Preto)'}
  ];

  const [colorText, setColorText] = useState('');
  const [sizeText, setSizeText] = useState('');

  return (
    <Content>
      <BlockContent>
        <TitleProduct>Rasteira Tira Dedo</TitleProduct>
        <SubtitleProduct>RT 0568 | 03.07.0653</SubtitleProduct>

        <BlockValue>
          <Value>R$ 69,00<Bar>|</Bar></Value>
          <Sale>R$ 55,20</Sale>
          <Financing>Ou 6x de  R$ 9,20</Financing>
        </BlockValue>

        <BlockOptions>
          <NormalText>Cor: <Link href="#">{colorText}</Link></NormalText>

          <BlockColors>
          {colorSneakers.map(c => <CircleColor style={{ background: c.hex }} onClick={() => setColorText(c.name)}/>)}
          </BlockColors>

          <BlockSize>
            <Align>
              <NormalText>Tamanho: <Link href="#">{sizeText}</Link></NormalText>
              <LinkMeasures href="#">Guia de Medidas</LinkMeasures>
            </Align>
            <div>
              {sneakersSize.map(s => <ItemSize onClick={() => setSizeText(s)}>{s}</ItemSize>)}
            </div>
          </BlockSize>

          <BlockButton>
            <LightBox />
          </BlockButton>
        </BlockOptions>

        <Description>
          Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.
        </Description>
      </BlockContent>
    </Content>
  );
}
