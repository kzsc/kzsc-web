/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import Tile from '../Tile/Tile';
import kzscI from '../../assets/images/kzsc.jpg'

import axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allposts: [],
      postsLoading: true,
      blogCategories: [],
      requestStringState: 'get_recent_posts/?',
      numberOfPostsRestart: 15,
      numberPostsToLoad: 15,
      numberPostsToIncreaseBy: 6,
      buttonLoadingString: false,
      activeCategoryButton: 'All',
      currentCategoryId: 0
    };
  }

  kzscApiGetCategory(request, stateVar, callback) {
    let self = this;
    let postCategoryUrl = 'https://www.kzsc.org/api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const holdData = res.data.posts.map(obj => obj);
      this.setState({ [stateVar]: holdData, postsLoading: false });
      if (typeof callback === "function") {
        callback(self);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  kzscApiGetCategoryList(request) {
    let postCategoryUrl = 'https://www.kzsc.org/api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const blogCategories = res.data.categories.map(category => {
        console.log(category.title + ': ' + category.id);
        return ({ id: category.id, title: category.title });
      });
      this.setState({ blogCategories });
    });
  }

  componentWillMount() {
    let requestString = this.state.requestStringState + 'count=' + this.state.numberPostsToLoad;
    this.kzscApiGetCategory(requestString, 'allposts');
    this.kzscApiGetCategoryList('get_category_index');
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberPostsToLoad, requestStringState, currentCategoryId } = this.state

    if(prevState.numberPostsToLoad !== numberPostsToLoad) {
      let requestForACategory = '';
      if( requestStringState === 'get_category_posts/?' ) {
        requestForACategory = '&id=' + currentCategoryId;
      }
      let requestString = requestStringState + requestForACategory + '&count=' + numberPostsToLoad;
      this.kzscApiGetCategory(requestString, 'allposts', function(self) {
        self.setState({ buttonLoadingString: false});
      });
    }

    if(prevState.requestStringState !== requestStringState || prevState.currentCategoryId !== currentCategoryId) {
      let requestForACategory = '';
      if( requestStringState === 'get_category_posts/?' ) {
        requestForACategory = '&id=' + currentCategoryId;
      }
      let requestString = requestStringState + requestForACategory + '&count=' + numberPostsToLoad;
      this.setState({ buttonLoadingString: true });
      this.kzscApiGetCategory(requestString, 'allposts', function(self) {
        self.setState({ buttonLoadingString: false});
      });
    }
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  blogContent() {
    let blogTiles = this.state.allposts.map(post => {
      let categories = post.categories.map(c => {
        return ' ' + c.title;
      });
      let description = this.toDateString(post.date) + ' / in' + categories + ' / by ' + post.author.name;
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Grid.Column key={post.id}>
          <Tile image={post.thumbnail_images.full.url} title={post.title}
          type='small' desc={description} url={post.url}/>
        </Grid.Column>
       );
    });
    return blogTiles
  }

  changeCategory(cid, cname) {
    this.setState({ activeCategoryButton: cname });
    let numberOfPosts;
    if( this.state.currentCategoryId === cid ) {
      numberOfPosts = this.state.numberPostsToLoad;
    } else {
      numberOfPosts = this.state.numberOfPostsRestart;
    }
    if( cname === 'All' ){
      this.setState({
        requestStringState: 'get_recent_posts/?',
        numberPostsToLoad: numberOfPosts,
        currentCategoryId: 0
      });
    } else {
      this.setState({
        requestStringState: 'get_category_posts/?',
        numberPostsToLoad: numberOfPosts,
        currentCategoryId: cid
      });
    }
  }

  getCategoryButtons() {
    let categoryButtons = this.state.blogCategories.map((c, i) => {
      return (
        <div className='margin-5 display-inline-block' key={c.id}>
          <Button inverted compact color='red' size='small' active={this.state.activeCategoryButton === c.title}
           onClick={this.changeCategory.bind(this, c.id, c.title)}>
            <span dangerouslySetInnerHTML={{__html: c.title}}></span>
          </Button>
        </div>
      );
    });
    return categoryButtons;
  }

  loadMorePosts() {
    this.setState({
      numberPostsToLoad: this.state.numberPostsToLoad + this.state.numberPostsToIncreaseBy,
      buttonLoadingString: true
    });
  }

  render() {
    return (
      <div className="Blog">
        <Segment padded textAlign='center' basic>
          <div className='margin-5 display-inline-block' key='all'>
            <Button inverted compact color='red' size='small' active={this.state.activeCategoryButton === 'All'}
             onClick={this.changeCategory.bind(this, 0, 'All')}>
              <span>All</span>
            </Button>
          </div>
         {this.getCategoryButtons()}
        </Segment>
        <Segment loading={this.state.postsLoading} basic>
          <Grid stackable padded columns='3' doubling>
            <Grid.Row>
              {this.blogContent()}
            </Grid.Row>
          </Grid>
          <Grid centered padded columns='1'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button disabled={this.state.buttonLoadingString} loading={this.state.buttonLoadingString} color='red' onClick={this.loadMorePosts.bind(this)}>
                  Load More
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Blog;
