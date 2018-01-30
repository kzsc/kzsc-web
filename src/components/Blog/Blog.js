/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import Tile from '../Tile/Tile';

import axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allposts: [],
      postsLoading: true,
      blogCategories: [],
      numberPostsToLoad: 16
    };
  }

  kzscApiGetCategory(request, stateVar) {
    let postCategoryUrl = 'https://www.kzsc.org/api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const holdData = res.data.posts.map(obj => obj);
      this.setState({ [stateVar]: holdData, postsLoading: false });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  kzscApiGetCategoryList(request) {
    let postCategoryUrl = 'https://www.kzsc.org/api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const blogCategories = res.data.categories.map(category => {
        return ({ id: category.id, title: category.title });
      });
      this.setState({ blogCategories });
    });
  }

  componentWillMount() {
    this.setState({ numberPostsToLoad: 16 });
    let requestString = 'get_recent_posts/?count=16';
    this.kzscApiGetCategory(requestString, 'allposts');
    this.kzscApiGetCategoryList('get_category_index');
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberPostsToLoad } = this.state

    if(prevState.numberPostsToLoad !== numberPostsToLoad) {
      let requestString = 'get_recent_posts/?count=' + this.state.numberPostsToLoad;
      this.kzscApiGetCategory(requestString, 'allposts');
    }
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  blogContent() {
    let blogTiles = this.state.allposts.map(post => {
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
    });
    return blogTiles
  }

  getCategoryButtons() {
    let categoryButtons = this.state.blogCategories.map((c, i) => {
      return (
        <div className='margin-5 display-inline-block' key={c.id}>
          <Button inverted compact color='red' size='small'>
            <span dangerouslySetInnerHTML={{__html: c.title}}></span>
          </Button>
        </div>
      );
    });
    return categoryButtons;
  }

  loadMorePosts() {
    this.setState({ numberPostsToLoad: this.state.numberPostsToLoad + 8 });
  }

  render() {
    return (
      <div className="Blog">
        <Grid padded textAlign='center'>
          <Grid.Row>
            <Grid.Column>
               {this.getCategoryButtons()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment loading={this.state.postsLoading} basic>
          <Grid stackable centered padded>
            <Grid.Row columns='equal'>
              {this.blogContent()}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button inverted color='red' onClick={this.loadMorePosts.bind(this)}>Load More Posts</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Blog;
