/*
 * src/components/Studio/Studio.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';

class Studio extends Component{

  toDateString(date){
    return this.props.convertDate(date);
  }

  render(){
    return(
      <div> Studio Component, To be filled {this.toDateString('2018-03-11 00:00:16')}</div>
    );
  }
}

export default Studio;
