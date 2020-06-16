import React from 'react';
import { BlockImage, BlockNavigation, LinkLogin, Navigation, ItemNavigation, Link, Align, Form, Input, IconSearch, IconShopping } from './style';

import Search from '../../assets/search.png';
import Logo from '../../assets/logo.png';
import Shopping from '../../assets/shopping.png';

export default function NavigationMenu() {
  return (
    <>
      <BlockImage>
        <img src={Logo} alt="Logo Original.io"/>
      </BlockImage>

      <BlockNavigation>
        <div>
          <LinkLogin href="#">Entrar</LinkLogin>
          |
          <LinkLogin href="#">Cadastrar-se</LinkLogin>
        </div>

        <nav>
          <Navigation>
            <ItemNavigation><Link href="#">sapatos</Link></ItemNavigation>
            <ItemNavigation><Link href="#">bolsas</Link></ItemNavigation>
            <ItemNavigation><Link href="#">acessórios</Link></ItemNavigation>
            <ItemNavigation><Link href="#">off</Link></ItemNavigation>
          </Navigation>
        </nav>

        <Align>
          <Form>
            <Input type="search" name="search" placeholder="busca" />
            <IconSearch src={Search} alt="Icon Search"/>
          </Form>
          <IconShopping src={Shopping} alt="Logo Sacola" />
          0
        </Align>
      </BlockNavigation>
    </>
  );
}
