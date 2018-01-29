/*
 * src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Divider } from 'semantic-ui-react';
import MainContent from './MainContent';

class Home extends Component{

  toDateString(date){
    return this.props.convertDate(date);
  }

  render(){
    return(
      <div className="Home">
        <Divider hidden />
        <MainContent convertDate={this.toDateString.bind(this)} />
        <Divider hidden />
      </div>
    );
  }
}

export default Home;
