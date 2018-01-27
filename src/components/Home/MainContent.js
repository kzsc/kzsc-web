/*
 * src/components/Home/MainContent.js
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';
import back50thaniversery927x1030 from '../../assets/images/back50thaniversery927x1030.jpg'
import testblog1 from '../../assets/images/testblog1.jpg'
import testblog2 from '../../assets/images/testblog2.png'
import testblog3 from '../../assets/images/testblog3.png'
import testblog4 from '../../assets/images/testblog4.jpg'

import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  featuredContent() {
    return (
      <div className="kzsc-blog-tile kzsc-blog-tile-big">
        <Image className="kzsc-blog-tile-image" src={back50thaniversery927x1030} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>Fierce New Apparel for our 50th Anniversary!</h1>
          </a>
          <span className="kzsc-blog-tile-desc">November 8, 2017 / Category / by Design Director</span>
        </div>
      </div>
    );
  }

  otherContent1() {
    return (
      <div className="kzsc-blog-tile kzsc-blog-tile-fourth">
        <Image className="kzsc-blog-tile-image" src={testblog1} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>The Orwells Interview 12.11.17</h1>
          </a>
          <span className="kzsc-blog-tile-desc">January 22, 2018 / in Main / by Electronic Music Director</span>
        </div>
      </div>
    );
  }

  otherContent2() {
    return (
      <div className="kzsc-blog-tile kzsc-blog-tile-fourth">
        <Image className="kzsc-blog-tile-image" src={testblog2} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>#2DOPEVIDS Week 3 ft. RGLR. Nate / KEZIA</h1>
          </a>
          <span className="kzsc-blog-tile-desc">January 21, 2018 / in Main / by Rizal Aliga</span>
        </div>
      </div>
    );
  }

  otherContent3() {
    return (
      <div className="kzsc-blog-tile kzsc-blog-tile-fourth">
        <Image className="kzsc-blog-tile-image" src={testblog3} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>#2DOPEVIDS Week 3 ft. RGLR. Nate / KEZIA</h1>
          </a>
          <span className="kzsc-blog-tile-desc">January 21, 2018 / in Main / by Rizal Aliga</span>
        </div>
      </div>
    );
  }

  otherContent4() {
    return (
      <div className="kzsc-blog-tile kzsc-blog-tile-fourth">
        <Image className="kzsc-blog-tile-image" src={testblog4} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>KZSC Interview: GWAR 11.17.17 w/ Melcriada</h1>
          </a>
          <span className="kzsc-blog-tile-desc">November 27, 2017 / in Interviews, Main / by Loud Rock Director</span>
        </div>
      </div>
    );
  }

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
            {this.featuredContent()}
          </Grid.Column>
          <Grid.Column width={5} stretched>
            {this.underwritingContent()}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
          <Grid.Column computer='4' tablet='8'>
            {this.otherContent1()}
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            {this.otherContent2()}
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            {this.otherContent3()}
          </Grid.Column>
          <Grid.Column computer='4' tablet='8'>
            {this.otherContent4()}
          </Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}

export default MainContent
