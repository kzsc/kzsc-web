import React, { Component } from 'react';
import Slide from './Slide';
import Dots from './Dots';
import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';
import { Container } from 'semantic-ui-react';
import testblog1 from '../../assets/images/testblog1.jpg'
import testblog2 from '../../assets/images/testblog2.png'
import testblog3 from '../../assets/images/testblog3.png'
import testblog4 from '../../assets/images/testblog4.jpg'
import underwriting1 from '../../assets/images/underwriting1.jpeg';

import './Slideshow.css';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      translateValue: 0,
      autoplay: false
    }
  }

  getUnderwritingImages() {
    this.setState({
      images: [
        {
          image: underwriting1
        },
        {
          image: testblog1
        },
        {
          image: testblog2
        },
        {
          image: testblog3
        },
        {
          image: testblog4
        }
      ]
    });
  }

  componentDidMount(){
    this.getUnderwritingImages();
  }

  renderSlides = () => {
    const { images } = this.state
    let slides = []

    for(let i = 0; i < images.length; i++)
      slides.push(<Slide key={i} image={images[i].image} />)

    return slides
  }

  handleDotClick = i => {
    const { images } = this.state

    if(i === this.state.index)
      return

    if(i > this.state.index) {
      return this.setState({
        index: i,
        translateValue: -(i * this.slideWidth())
      })
    }
    else {
      this.setState({
        index: i,
        translateValue: this.state.translateValue + ((this.state.index - i) * (this.slideWidth()))
      })
    }
  }

  toggleAutoplay = () => this.setState({ autoplay: !this.state.autoplay })

  componentDidUpdate = (prevProps, prevState) => {
    const { autoplay } = this.state

    if(autoplay && prevState.autoplay !== autoplay) {
      let x = window.setInterval(() =>  {
                this.goToNextSlide()
              }, 2500)

      this.setState({ interval : x })
    }
    else if(!autoplay && prevState.autoplay !== autoplay) {
      let x = window.clearInterval(this.state.interval)
      this.setState({ interval : x })
    }
  }

  render() {
    const { images, index, translateValue, autoplay } = this.state
    return (
      <Container className="SlideshowContainer">
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s',
              height: '300px'
            }}>
            { this.renderSlides() }
          </div>

          <Dots
            index={index}
            quantity={images.length}
            dotClick={this.handleDotClick} />

          <SliderLeftArrow prevSlide={this.goToPreviousSlide} />
          <SliderRightArrow nextSlide={this.goToNextSlide} />
        </div>
      </Container>
    )
  }

  goToPreviousSlide = () => {
    if(this.state.index === 0)
      return

    this.setState({
      translateValue: this.state.translateValue + this.slideWidth(),
      index: this.state.index - 1
    })
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
