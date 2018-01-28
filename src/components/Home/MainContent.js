/*
 * src/components/Home/MainContent.js
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import back50thaniversery927x1030 from '../../assets/images/back50thaniversery927x1030.jpg'
import testblog1 from '../../assets/images/testblog1.jpg'
import testblog2 from '../../assets/images/testblog2.png'
import testblog3 from '../../assets/images/testblog3.png'
import testblog4 from '../../assets/images/testblog4.jpg'
import Tile from '../Tile/Tile';

import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  underwritingContent() {
    return (
      <div>
        <h3 className="text-align-center">SUPPORT LOCAL BUSINESSES</h3>
        <Image src={underwriting1} fluid />
      </div>
    );
  }

  render(){
    return(
      <Grid stackable centered padded>

        <Grid.Row>
          <Grid.Column width={11}>
            <Tile image={back50thaniversery927x1030} title='Fierce New Apparel for our 50th Anniversary!'
             type='big' desc='November 8, 2017 / Category / by Design Director'/>
          </Grid.Column>
          <Grid.Column width={5} stretched>
            {this.underwritingContent()}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
          <Grid.Column computer='4' tablet='8'>
            <Tile image={testblog1} title='The Orwells Interview 12.11.17'
             type='small' desc='January 22, 2018 / in Main / by Electronic Music Director'/>
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            <Tile image={testblog2} title='#2DOPEVIDS Week 3 ft. RGLR. Nate / KEZIA'
             type='small' desc='January 21, 2018 / in Main / by Rizal Aliga'/>
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            <Tile image={testblog3} title='KZSC Sports Director Makes History for UCSC & Athletics'
             type='small' desc='January 21, 2018 / in Main / by Rizal Aliga'/>
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            <Tile image={testblog4} title='KZSC Interview: GWAR 11.17.17 w/ Melcriada'
             type='small' desc='November 27, 2017 / in Interviews, Main / by Loud Rock Director'/>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}

export default MainContent
