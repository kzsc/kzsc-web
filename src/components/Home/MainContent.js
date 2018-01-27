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
import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  featuredContent() {

    return (
      <Container className="kzsc-blog-tile">
        <Image className="kzsc-blog-tile-image" src={back50thaniversery927x1030} fluid />
        <div className="kzsc-blog-tile-bottom">
          <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank' rel="noopener noreferrer">
            <h1>Fierce New Apparel for our 50th Anniversary!</h1>
          </a>
          <span>November 8, 2017 / Category / by Design Director</span>
        </div>
      </Container>
    );
  }

  underwritingContent() {
    return (
      <Container>
        <h3 className="text-align-center">SUPPORT LOCAL BUSINESSES</h3>
        <Image src={underwriting1} fluid />
      </Container>
    );
  }

  render(){
    return(
      <Grid stackable centered padded>

        <Grid.Row>
          <Grid.Column width={10}>
            {this.featuredContent()}
          </Grid.Column>
          <Grid.Column width={5} stretched>
            {this.underwritingContent()}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}>
            <Segment>
              Featured Content 3
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              Featured Content 4
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              Featured Content 5
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              Featured Content 6
            </Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}

export default MainContent
