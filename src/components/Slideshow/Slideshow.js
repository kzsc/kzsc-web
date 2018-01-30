/*
 * src/components/Slideshow/Slideshow.js
 * Used by:
 *  src/components/Home/MainContent.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import Slide from './Slide';

import './Slideshow.css';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      translateValue: 0,
    }
  }

  getUnderwritingImages() {
    this.setState({
      images: [
        { image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_9716-1-300x150.jpg' },
        { image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/SCNFC-300x150.png' },
        { image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/bsc_logo_stacked-2-300x150.png' },
        { image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/kelly-wachs-logo-300x150.png' },
        { image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/BFCUlogoblue_1000_wTag-300x150.jpeg' }
      ]
    });
  }

  componentDidMount(){
    this.getUnderwritingImages();
    let x = window.setInterval(() =>  {
              this.goToNextSlide()
            }, 2500)
    this.setState({ interval : x })
  }

  componentWillUnmount() {
    let x = window.clearInterval(this.state.interval)
    this.setState({ interval : x })
  }

  renderSlides = () => {
    const { images } = this.state
    let slides = []

    for(let i = 0; i < images.length; i++)
      slides.push(<Slide key={i} image={images[i].image} />)

    return slides
  }

  render() {
    const { images, index, translateValue } = this.state
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            height: '300px'
          }}>
          { this.renderSlides() }
        </div>
      </div>
    )
  }

  goToNextSlide = () => {
    const { images } = this.state

    if(this.state.index === images.length - 1) {
      return this.setState({
        translateValue: 0,
        index: 0
      })
    }

    this.setState({
      translateValue: this.state.translateValue - this.slideWidth(),
      index: this.state.index + 1
    })
  }

  slideWidth = () => {
    const slide = document.querySelector('.slide')
    return slide.clientWidth
  }

}
