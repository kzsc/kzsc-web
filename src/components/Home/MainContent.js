import React, {Component} from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';
import back50thaniversery927x1030 from '../../assets/images/back50thaniversery927x1030.jpg'
import './MainContent.css';

class MainContent extends Component{

  featuredContent() {
    return (
      <Container>
        <Image src={back50thaniversery927x1030} fluid />
        <a href='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/' target='_blank'>
          <h1>Fierce New Apparel for our 50th Anniversary!</h1>
        </a>
        <span>November 8, 2017 / Category / by Design Director</span>
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
          <Grid.Column width={5}>
            <Segment>
              Business Underwriting Section
            </Segment>
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
