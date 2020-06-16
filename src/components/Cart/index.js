import React from 'react';
import './style.css';

import Product from '../../assets/prod02.png';
import Close from '../../assets/close.png';
import CloseLight from '../../assets/closeLight.png';
import Add from '../../assets/menos.png';
import Remove from '../../assets/mais.png';

export default function Cart() {
  return (
    <div>
      <a href="#sacola" class="button-thumbnail">
        Abrir 
      </a>

      <div class="cart" id="sacola">
        <div id="content">
          <a href="/#">
            <img src={Close} class="icon-close" alt=""/>
          </a>

          <div id="blockTop">
            <h2>Sacola</h2>
            <p>5 Itens</p>
          </div>
          
          <div id="items">
            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>

            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>

            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>

            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>

            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>

            <div class="blockItem">
              <img src={Product} alt="Product"/>

              <div> 
                <h3>Rasteira Tira Dedo</h3>
                <p>R$ 49,90</p>
              </div>

              <div class="number">
                <img src={Add} alt="Icon Add"/>
                <span>01</span>
                <img src={Remove} alt="Icon Remove"/>
              </div>

              <img src={CloseLight} alt=""/>
            </div>
          </div>

          <div id="frete">
            <p>Faltam R$ xx,xx para você <span>Ganhar Frete Grátis</span></p>
          </div>

          <div id="total">
            <div>
              <p class="value">Total: R$ 149,90</p>
              <p class="parcela">até 3x de R$ 49,90 sem juros</p>
            </div>

            <div id="btn-finalizar">
              <a href="/#">Finalizar Compra</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}