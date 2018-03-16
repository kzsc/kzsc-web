/*
 * src/components/Title/Title.js
 * Used by:
 *  src/components/App.js
 *
 * Properties (props):
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
      <Container className='Title margin-t-100' textAlign='center'>
        <Image src={longLogBlue} size="massive" centered />
      </Container>
    );
  }
}

export default Title
