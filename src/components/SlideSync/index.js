import React, { useState } from "react";

import Product from '../../assets/prod02.png';

import "./style.css";

import Carousel from './Carousel';

const SlideSync = () => {
    const [slides] = useState([
      Product,
      Product,
      Product,
      Product,
    ]);

    return (
      <div className="container">
        <Carousel slides={slides} />
      </div>
  )
}

export default SlideSync;