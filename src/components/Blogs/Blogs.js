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

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestStringState: 'get_recent_posts/?',
      numberOfPostsRestart: 15,
      numberPostsToIncreaseBy: 6,
      activeCategoryButton: 'All',
      currentCategoryId: 0,
    };
  }

  newBlogPosts(newPost) {
    this.props.updateBlogPosts(newPost);
  }
  componentWillMount() {
    this.setState({
      domain: this.props.domain,
      numberPostsToLoad: this.props.numberPostsToLoad
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberPostsToLoad, requestStringState, currentCategoryId } = this.state

    if( prevState.currentCategoryId !== currentCategoryId ) {
      this.props.truePostsLoading();
    }

    if(prevState.numberPostsToLoad !== numberPostsToLoad ||
       prevState.requestStringState !== requestStringState ||
       prevState.currentCategoryId !== currentCategoryId) {
      let requestForACategory = '';
      if( requestStringState === 'get_category_posts/?' ) {
        requestForACategory = '&id=' + currentCategoryId;
      }
      let requestString = requestStringState + requestForACategory + '&count=' + numberPostsToLoad;
      this.props.trueButtonLoading();
      this.props.kzscApiGetCategory(requestString, 'blogPosts');
    }
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  blogContent() {
    let blogTiles = this.props.blogPosts.map(post => {
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
          type='small' desc={description} url={`/blogdetail/${post.id}`} post={post}/>
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
    let categoryButtons = this.props.blogCategories.map((c, i) => {
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
      numberPostsToLoad: this.state.numberPostsToLoad + this.state.numberPostsToIncreaseBy
    });
  }

  render() {
    return (
      <div className="Blogs">
        <Segment padded textAlign='center' basic>
          <div className='margin-5 display-inline-block' key='all'>
            <Button inverted compact color='red' size='small' active={this.state.activeCategoryButton === 'All'}
             onClick={this.changeCategory.bind(this, 0, 'All')}>
              <span>All</span>
            </Button>
          </div>
         {this.getCategoryButtons()}
        </Segment>
        <Segment loading={this.props.postsLoading} basic>
          <Grid stackable padded columns='3' doubling>
            <Grid.Row>
              {this.blogContent()}
            </Grid.Row>
          </Grid>
          <Grid centered padded columns='1'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button disabled={this.props.buttonLoading} loading={this.props.buttonLoading}
                 color='red' onClick={this.loadMorePosts.bind(this)}>
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

export default Blogs;
