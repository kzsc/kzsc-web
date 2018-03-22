/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Segment, Grid, Button, Dropdown } from 'semantic-ui-react'
import Tile from '../Tile/Tile';
import kzscI from '../../assets/images/kzsc.jpg'

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestStringState: 'get_recent_posts/?',
      numberOfPostsRestart: 15,
      numberPostsToIncreaseBy: 6,
      // activeCategoryButton: 'All',
      currentCategoryId: 0,
      activeMenuItem: 'none',
      menuItems: [
        { name: 'blog', title: 'KZSC Blog' }
      ],
      categoryDropdownOptions: []
    }
    this.onChangeCategory = this.onChangeCategory.bind(this)
  }

  handleItemClick(name) { this.setState({ activeMenuItem: 'none' }) }

  newBlogPosts(newPost) {
    this.props.updateBlogPosts(newPost);
  }
  componentWillMount() {
    this.setState({
      domain: this.props.domain,
      numberPostsToLoad: this.props.numberPostsToLoad
    });
  }

  componentDidMount() {
    this.getCategoryDropdownOptions()
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberPostsToLoad, requestStringState, currentCategoryId } = this.state
    const { blogCategories } = this.props

    if( prevProps.blogCategories !== blogCategories ) {
      this.getCategoryDropdownOptions()
    }

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
      let dateWithSlashes = post.date.replace(/-/g, '/');
      let description = this.toDateString(dateWithSlashes) + ' / in' + categories + ' / by ' + post.author.name;
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

  // changeCategory(cid, cname) {
  //   this.setState({ activeCategoryButton: cname });
  //   let numberOfPosts;
  //   if( this.state.currentCategoryId === cid ) {
  //     numberOfPosts = this.state.numberPostsToLoad;
  //   } else {
  //     numberOfPosts = this.state.numberOfPostsRestart;
  //   }
  //   if( cname === 'All' ){
  //     this.setState({
  //       requestStringState: 'get_recent_posts/?',
  //       numberPostsToLoad: numberOfPosts,
  //       currentCategoryId: 0
  //     });
  //   } else {
  //     this.setState({
  //       requestStringState: 'get_category_posts/?',
  //       numberPostsToLoad: numberOfPosts,
  //       currentCategoryId: cid
  //     });
  //   }
  // }

  onChangeCategory(event, data) {
    let categoryId = data.value
    let numberOfPosts;
    if( this.state.currentCategoryId === categoryId ) {
      numberOfPosts = this.state.numberPostsToLoad;
    } else {
      numberOfPosts = this.state.numberOfPostsRestart;
    }

    if( categoryId === '0' ){
      this.setState({
        requestStringState: 'get_recent_posts/?',
        numberPostsToLoad: numberOfPosts,
        currentCategoryId: 0
      });
    } else {
      this.setState({
        requestStringState: 'get_category_posts/?',
        numberPostsToLoad: numberOfPosts,
        currentCategoryId: categoryId
      });
    }
  }

  getCategoryDropdownOptions() {
    let options = this.props.blogCategories.map((c,i) => {
      let title = c.title.replace("&amp;", "&")
      var obj = { key: c.id, text: title, value: c.id }
      return obj
    })
    options.push({ key: '0',text: 'All', value: '0' })
    options.sort(function(a, b){
      var x = a.text.toLowerCase();
      var y = b.text.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
    this.setState({ categoryDropdownOptions: options })
  }

  // getCategoryButtons() {
  //   let categoryButtons = this.props.blogCategories.map((c, i) => {
  //     return (
  //       <div className='margin-5 display-inline-block' key={c.id}>
  //         <Button compact color='black' secondary size='small' active={this.state.activeCategoryButton === c.title}
  //          onClick={this.changeCategory.bind(this, c.id, c.title)}>
  //           <span dangerouslySetInnerHTML={{__html: c.title}}></span>
  //         </Button>
  //       </div>
  //     );
  //   });
  //   return categoryButtons;
  // }

  loadMorePosts() {
    this.setState({
      numberPostsToLoad: this.state.numberPostsToLoad + this.state.numberPostsToIncreaseBy
    });
  }

  render() {
    return (
      <div className="Blogs">
        <Grid centered padded>

          <Grid.Row>
            <Grid.Column width="15">
              <Dropdown placeholder='Category' search selection fluid
                options={this.state.categoryDropdownOptions}
                onChange={this.onChangeCategory} />
            </Grid.Column>
          </Grid.Row>

          {/* <Grid.Row>
            <Grid.Column width={16}>
              <Segment padded textAlign='center' basic>
                <div className='margin-5 display-inline-block' key='all'>
                  <Button compact color='black' size='small' active={this.state.activeCategoryButton === 'All'}
                   onClick={this.changeCategory.bind(this, 0, 'All')}>
                    <span>All</span>
                  </Button>
                </div>
               {this.getCategoryButtons()}
              </Segment>
            </Grid.Column>
          </Grid.Row> */}

          <Grid.Row>
            <Grid.Column width={16}>
              <Segment loading={this.props.postsLoading} basic>
                <Grid stackable columns='3' doubling>
                  <Grid.Row>
                    {this.blogContent()}
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <Button disabled={this.props.buttonLoading} loading={this.props.buttonLoading}
               className='kblue' onClick={this.loadMorePosts.bind(this)}>
                Load More
              </Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>

      </div>
    );
  }
}

export default Blogs;
