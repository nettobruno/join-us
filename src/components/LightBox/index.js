import React from 'react';
import './style.css';

import Product from '../../assets/prod02.png';
import Close from '../../assets/close.png';

export default function LightBox() {
  return (
    <div>
      <a href="#img1" class="thumbnail">
        Adicionar à Sacola
      </a>

      <div class="lightbox block" id="img1">
        <div id="block">
          <a href="/#">
            <img src={Close} class="img-close" alt=""/>
          </a>
          <img src={Product} alt="Product" />

          <h2>Produto adicionado com sucesso</h2>

          <div id="btn">
            {/* Gambiarra */}
            <a href="/#sacola">Finalizar Compra</a>
          </div>

          <div id="link">
            <a href="/#">Continuar Comprando</a>
          </div>
        </div>
      </div>
    </div>
  );
}