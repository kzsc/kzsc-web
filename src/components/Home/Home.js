/*
 * src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Divider } from 'semantic-ui-react';
import MainContent from './MainContent';
import ListContent from './ListContent';

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <Divider hidden />
        <MainContent></MainContent>
        <Divider hidden />
        <ListContent />
      </div>
    );
  }
}

export default Home;
