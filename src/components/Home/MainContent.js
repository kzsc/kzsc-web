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
import Tile from '../Tile/Tile';
import Slideshow from '../Slideshow/Slideshow';
import axios from 'axios';

import './MainContent.css';
import underwriting1 from '../../assets/images/underwriting1.jpeg';


class MainContent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      recentPosts: [],
      requestsLoaded: 0,
      musicChartsPosts: [],
      eventsPosts: [],
      giveawaysPosts: []
    };
  }

  componentWillMount() {
    axios.get(`https://www.kzsc.org/api/get_recent_posts/`).then(res => {
      const recentPosts = res.data.posts.map(obj => obj);
      this.setState({ recentPosts, requestsLoaded: this.state.requestsLoaded + 1 });
      console.log(this.state.requestsLoaded);
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get(`https://www.kzsc.org/api/get_category_posts/?id=5`).then(res => {
      const musicChartsPosts = res.data.posts.map(obj => obj);
      this.setState({ musicChartsPosts, requestsLoaded: this.state.requestsLoaded + 1 });
      console.log(this.state.requestsLoaded);
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get(`https://www.kzsc.org/api/get_category_posts/?id=15`).then(res => {
      const eventsPosts = res.data.posts.map(obj => obj);
      this.setState({ eventsPosts, requestsLoaded: this.state.requestsLoaded + 1 });
      console.log(this.state.requestsLoaded);
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get(`https://www.kzsc.org/api/get_category_posts/?id=267`).then(res => {
      const giveawaysPosts = res.data.posts.map(obj => obj);
      this.setState({ giveawaysPosts, requestsLoaded: this.state.requestsLoaded + 1 });
      console.log(this.state.requestsLoaded);
    })
    .catch(function (error) {
      console.log(error);
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

  toDateString(date){
    return this.props.convertDate(date);
  }

  blogContent() {
    let blogTiles = this.state.recentPosts.map((post, index) => {
      if(index < 4) {
        let categories = post.categories.map(c => {
          return c.title + ' ';
        });
        let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
        return (
          <Grid.Column key={post.id} computer='4' tablet='8'>
            <Tile image={post.thumbnail_images.full.url} title={post.title}
            type='small' desc={description} url={post.url}/>
          </Grid.Column>
         );
       }
    });
    return blogTiles;
  }

  blogMusicChartContent() {
    let blogTiles = this.state.musicChartsPosts.map((post, index) => {
      if(index < 4) {
        let categories = post.categories.map(c => {
          return c.title + ' ';
        });
        let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
        return (
          <Grid.Column key={post.id} computer='4' tablet='8'>
            <Tile image={post.thumbnail_images.full.url} title={post.title}
            type='small' desc={description} url={post.url}/>
          </Grid.Column>
         );
       }
    });
    return blogTiles;
  }

  blogEventsContent() {
    let blogTiles = this.state.eventsPosts.map((post, index) => {
      if(index < 4) {
        let categories = post.categories.map(c => {
          return c.title + ' ';
        });
        let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
        return (
          <Grid.Column key={post.id} computer='4' tablet='8'>
            <Tile image={post.thumbnail_images.full.url} title={post.title}
            type='small' desc={description} url={post.url}/>
          </Grid.Column>
         );
       }
    });
    return blogTiles;
  }

  blogGiveawaysContent() {
    let blogTiles = this.state.giveawaysPosts.map((post, index) => {
      if(index < 4) {
        let categories = post.categories.map(c => {
          return c.title + ' ';
        });
        let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
        return (
          <Grid.Column key={post.id} computer='4' tablet='8'>
            <Tile image={post.thumbnail_images.full.url} title={post.title}
            type='small' desc={description} url={post.url}/>
          </Grid.Column>
         );
       }
    });
    return blogTiles;
  }

  render(){
    return(
      <div className="MainContent">
        <Grid stackable centered padded>

          <Grid.Row>
            <Grid.Column width={11}>
              <Tile image={back50thaniversery927x1030} title='Fierce New Apparel for our 50th Anniversary!'
               type='big' desc='November 8, 2017 / Category / by Design Director' url='https://www.kzsc.org/blog/2017/11/08/fierce-new-apparel-for-our-50th/'/>
            </Grid.Column>
            <Grid.Column width={5} stretched>
              <Segment>
                <Slideshow />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Segment loading={this.state.requestsLoaded !== 4} basic>
          <Grid stackable centered padded>

            <Grid.Row columns='equal'>

              {this.blogContent()}
            </Grid.Row>

            <Grid.Row textAlign='center'>
              <h1>Music Charts</h1>
            </Grid.Row>

            <Grid.Row columns='equal'>
              {this.blogMusicChartContent()}
            </Grid.Row>

            <Grid.Row textAlign='center'>
              <h1>Events</h1>
            </Grid.Row>

            <Grid.Row columns='equal'>
              {this.blogEventsContent()}
            </Grid.Row>

            <Grid.Row textAlign='center'>
              <h1>Giveaways</h1>
            </Grid.Row>

            <Grid.Row columns='equal'>
              {this.blogGiveawaysContent()}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>

    );
  }
}

export default MainContent
