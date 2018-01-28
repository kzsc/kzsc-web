/*
 * src/components/Home/MainContent.js
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import back50thaniversery927x1030 from '../../assets/images/back50thaniversery927x1030.jpg'
import testblog1 from '../../assets/images/testblog1.jpg'
import testblog2 from '../../assets/images/testblog2.png'
import testblog3 from '../../assets/images/testblog3.png'
import testblog4 from '../../assets/images/testblog4.jpg'
import Tile from '../Tile/Tile';
import Slideshow from '../Slideshow/Slideshow';
import axios from 'axios';

import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      allposts: []
    };
  }

  componentWillMount() {
    axios.get(`https://www.kzsc.org/api/get_recent_posts/`).then(res => {
      const allposts = res.data.posts.map(obj => obj);
      this.setState({ allposts });
    });
  }

  underwritingContent() {
    return (
      <div>
        <h3 className="text-align-center">SUPPORT LOCAL BUSINESSES</h3>
        <Image src={underwriting1} fluid />
      </div>
    );
  }

  blogContent() {
    let blogTiles = this.state.allposts.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      let description = post.date + ' / in ' + categories + '/ by ' + post.author.name;
      return (
        <Grid.Column key={post.id} computer='4' tablet='8'>
          <Tile image={post.thumbnail_images.full.url} title={post.title}
          type='small' desc={description}/>
        </Grid.Column>
       );
    });

    return blogTiles;
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
            <Segment>
              <Slideshow />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
          {this.blogContent()}
        </Grid.Row>

      </Grid>

    );
  }
}

export default MainContent
