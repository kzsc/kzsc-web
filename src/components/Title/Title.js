/*
 * src/components/Title/Title.js
 * Used by:
 *  src/components/App.js
 *
 * Properties (props):
 * Non-commercial, educational public radio station serving the Santa Cruz, San Benito, and Monterey Counties
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import longLogBlue from '../../assets/images/longLogBlue.png';
import './Title.css'

class Title extends Component {

  render(){
    return(
      <Container className='Title padding-t-83 padding-b-15' textAlign='center'>
        <Image src={longLogBlue} size="massive" centered />
      </Container>
    );
  }
}

export default Title
