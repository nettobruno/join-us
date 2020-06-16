import React, { Component } from 'react'
import Slider from "react-slick";

import BlockProduct from '../BlockProduct';

export default class Carousel extends Component {
  state = {
    nav1: null,
    nav2: null,
    slides: [],
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      slides: this.props.slides
    })
  }

  render() {
    const { slides } = this.state;
    
    const slickSettingsVerticalNav = {
      arrows: false,
      vertical: true,
      slidesToShow: 4,
      swipeToSlide: true,
      focusOnSelect: true,
      verticalSwiping: true,
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider),
    }
  
    const slickSettingsVerticalMain = {
      arrows: false,
      slidesToShow: 1,
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
    }

    return (
      <div className={['row', this.props.className].join(' ')}>

        <div className="col-md-1">
          <Slider {...slickSettingsVerticalNav}>
            {slides.map((slide, i) => (
              <div className="d-block" key={i}>
                <img src={slide} className="slide-nav" alt=""/>
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-md-5">
          <Slider {...slickSettingsVerticalMain}>
            {slides.map((slide, i) => (
              <div key={i} className="d-block">
                  <img src={slide} className="slide-main" alt=""/>
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-md-6">
          <BlockProduct />
        </div>

      </div>
    )
  }
}