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
import { Container } from 'semantic-ui-react';
import './Title.css'

class Title extends Component {

  render(){
    return(
      <Container className='Title margin-t-100' textAlign='center'>
        <span className="title-hr">
          <div>
            <div className='title-header'>
              {'KZSC Santa Cruz 88.1 FM'.toUpperCase()}
            </div>
            <br />
            <div className='title-sub-header'>
              Non-commercial, educational public radio station serving the Santa Cruz, San Benito, and Monterey Counties
            </div>
          </div>
        </span>
      </Container>
    );
  }
}

export default Title
