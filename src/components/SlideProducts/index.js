import React from 'react';
import Slider from "react-slick";

import Product1 from '../../assets/prateleira1.png';
import Product2 from '../../assets/prateleira2.png';
import Product3 from '../../assets/prateleira3.png';
import Product4 from '../../assets/prateleira4.png';


import { Content, Title, Image } from './style';

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
}

export default function SlideProduct() {
    return (
      <Content>
        <Title>Quem viu, viu também</Title>
        <Slider {...settings}>
          <Image src={Product1} alt=""/>
          <Image src={Product2} alt=""/>
          <Image src={Product3} alt=""/>
          <Image src={Product4} alt=""/>
          <Image src={Product1} alt=""/>
          <Image src={Product2} alt=""/>
          <Image src={Product3} alt=""/>
          <Image src={Product4} alt=""/>
          <Image src={Product1} alt=""/>
          <Image src={Product2} alt=""/>
          <Image src={Product3} alt=""/>
          <Image src={Product4} alt=""/>
        </Slider>
      </Content>
    );
}
