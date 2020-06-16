import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import SlideSync from '../../components/SlideSync';
import SlideProducts from '../../components/SlideProducts';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';


import { Content, Breadcrumb, Bold } from './style';

export default function Main() {
  return (
    <>
    <NavigationMenu />
    <Breadcrumb>Home / <Bold>Sapatos</Bold></Breadcrumb>
    <Content>
      <SlideSync />
    </Content>
    <SlideProducts />
    <Contact />
    <Footer />

    {/* Gambiarra */}
    <Cart />
    </>
  );
}
