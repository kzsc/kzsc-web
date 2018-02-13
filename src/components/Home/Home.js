/*
 * src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Tile from '../Tile/Tile';
import Slideshow from '../Slideshow/Slideshow';
import kzscI from '../../assets/images/kzsc.jpg'
import './Home.css';

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  getBlogContent(item, size, c, t) {
    let blogTiles = item.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Grid.Column key={post.id} computer={c} tablet={t}>
          <Tile image={post.thumbnail_images.full.url} title={post.title}
          type={size} desc={description} url={post.url}/>
        </Grid.Column>
       );
    });
    return blogTiles;
  }

  render(){
    return(
      <Segment loading={this.state.requestsLoaded < 4} basic>
        <Grid stackable centered padded>

          <Grid.Row>
            {this.getBlogContent(this.props.featuredContent, 'big', '11', '11')}
            <Grid.Column width={5} stretched>
              <Segment>
                <Slideshow />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.props.recentPosts, 'small', '4', '8')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Events</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.props.eventsPosts, 'small', '4', '8')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Music Charts</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.props.musicChartsPosts, 'small', '4', '8')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Giveaways</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.props.giveawaysPosts, 'small', '4', '8')}
          </Grid.Row>

        </Grid>
      </Segment>
    );
  }
}

export default Home;
