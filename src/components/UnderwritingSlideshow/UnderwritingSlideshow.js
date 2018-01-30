/*
 * src/components/UnderwritingSlideshow/UnderwritingSlideshow.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid  } from 'semantic-ui-react';
import './UnderwritingSlideshow.css';

class UnderwritingSlideshow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      underwritingImages: []
    }
  }

  getUnderwritingImages() {
    this.setState({
      underwritingImages: [
        'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/BFCUlogoblue_1000_wTag-300x150.jpeg',
        'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_9716-1-300x150.jpg',
        'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/SCNFC-300x150.png',
        'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/kelly-wachs-logo-300x150.png',
        'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/bsc_logo_stacked-2-300x150.png'
      ]
    });
  }

  componentWillMount() {
    this.getUnderwritingImages();
  }

  render() {
    const { underwritingImages } = this.state

    return (
      <Container className="SlideshowContainer">

      </Container>
    )
  }
}

export default UnderwritingSlideshow
