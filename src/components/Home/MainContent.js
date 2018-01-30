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
import Tile from '../Tile/Tile';
import Slideshow from '../Slideshow/Slideshow';
import axios from 'axios';

import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      featuredContent: [],
      recentPosts: [],
      requestsLoaded: 0,
      musicChartsPosts: [],
      eventsPosts: [],
      giveawaysPosts: [],
      tempHolder: []
    };
  }

  kzscApiGetRequest(request, stateVar) {
    let postCategoryUrl = 'https://www.kzsc.org/api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const holdData = res.data.posts.map(obj => obj);
      this.setState({ [stateVar]: holdData, requestsLoaded: this.state.requestsLoaded + 1 });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    axios.get(`https://www.kzsc.org/api/get_post/?post_id=36472/`).then(res => {
      const featuredContent = [res.data.post];
      this.setState({ featuredContent });
    })
    .catch(function (error) {
      console.log(error);
    });
    this.kzscApiGetRequest('get_recent_posts/?count=4', 'recentPosts');
    this.kzscApiGetRequest('get_category_posts/?id=5&count=4', 'musicChartsPosts');
    this.kzscApiGetRequest('get_category_posts/?id=15&count=4', 'eventsPosts');
    this.kzscApiGetRequest('get_category_posts/?id=267&count=4', 'giveawaysPosts');
  }

  underwritingContent() {
    return (
      <div>
        <h3 className="text-align-center">SUPPORT LOCAL BUSINESSES</h3>
        <Image src={underwriting1} fluid />
      </div>
    );
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  getFeaturedContent() {
    let blogTiles = this.state.featuredContent.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
      return (
        <Grid.Column key={post.id} width={11}>
          <Tile image={post.thumbnail_images.full.url} title={post.title}
          type='big' desc={description} url={post.url}/>
        </Grid.Column>
       );
    });
    return blogTiles;
  }

  getBlogContent(item, size) {
    let blogTiles = item.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
      return (
        <Grid.Column key={post.id} computer='4' tablet='8'>
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
            {this.getFeaturedContent()}
            <Grid.Column width={5} stretched>
              <Segment>
                <Slideshow />
              </Segment>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row columns='equal'>
            {this.getBlogContent(this.state.recentPosts, 'small')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Events</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.state.eventsPosts, 'small')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Music Charts</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.state.musicChartsPosts, 'small')}
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <h1>Giveaways</h1>
          </Grid.Row>

          <Grid.Row columns='equal'>
            {this.getBlogContent(this.state.giveawaysPosts, 'small')}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default MainContent
