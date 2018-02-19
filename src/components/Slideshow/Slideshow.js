/*
 * src/components/Slideshow/Slideshow.js
 * https://www.npmjs.com/package/react-responsive-carousel
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  getSlides() {
    let slides = this.props.images.map((i, index) => {
      return (
        <div key={index}>
          <img alt='index' src={i.image} />
        </div>
      )
    })
    return slides
  }

  render() {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
        {this.getSlides()}
      </Carousel>
    )
  }

}
