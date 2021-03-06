/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react'
import { Segment, Grid, Button, Input, Dropdown, Icon } from 'semantic-ui-react'
import Tile from '../Tile/Tile'
import kzscI from '../../assets/images/kzsc.jpg'
import date from '../date.json'

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestStringState: 'get_recent_posts/?',
      numberOfPostsRestart: 15,
      numberPostsToIncreaseBy: 6,
      currentCategoryId: 0,
      categoryDropdownOptions: [],
      searchString: '',
      selectedCategory: '',
      searchOptions: false,
      searchOptionsArrow: 'chevron down',
      searchYear: '',
      searchMonth: '',
      searchDate: ''
    }
    this.onChangeCategory = this.onChangeCategory.bind(this)
    this.onClickSearchPosts = this.onClickSearchPosts.bind(this)
    this.toggleSearchOptions = this.toggleSearchOptions.bind(this)
    this.loadMorePosts = this.loadMorePosts.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
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
    const { numberPostsToLoad, requestStringState, currentCategoryId, searchString, searchDate } = this.state
    const { blogCategories } = this.props

    if( prevProps.blogCategories !== blogCategories ) {
      this.getCategoryDropdownOptions()
    }

    if( prevState.currentCategoryId !== currentCategoryId ||
        prevState.searchString !== searchString  ||
        prevState.searchDate !== searchDate ||
        prevState.requestStringState !== requestStringState ) {
      this.props.truePostsLoading();
    }

    if(prevState.numberPostsToLoad !== numberPostsToLoad ||
       prevState.requestStringState !== requestStringState ||
       prevState.currentCategoryId !== currentCategoryId ||
       prevState.searchString !== searchString ||
       prevState.searchDate !== searchDate ) {
      let optionalArgs = ''
      if( requestStringState === 'get_category_posts/?' ) {
        optionalArgs = '&id=' + currentCategoryId
      } else if ( requestStringState === 'get_search_results/?' ) {
        optionalArgs = '&search=' + searchString
      } else if ( requestStringState === 'get_date_posts/?' ) {
        optionalArgs = '&date=' + searchDate
      }
      let requestString = requestStringState + optionalArgs + '&count=' + numberPostsToLoad;
      this.props.trueButtonLoading();
      this.props.kzscApiGetRequest(requestString, 'blogPosts');
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
       )
    });
    return blogTiles
  }

  resetSearch() {
    // Reset input fields
    this.setState({
      selectedCategory: "",
      searchString: "",
      searchMonth: "",
      searchYear: ""
    })
    // Set request
    this.setState({
      requestStringState: 'get_recent_posts/?',
      numberPostsToLoad: this.state.numberOfPostsRestart,
      currentCategoryId: 0
    });
  }

  onChangeCategory = (e, { value }) => {
    // Reset Other Search Fields
    this.setState({
      searchString: "",
      searchMonth: "",
      searchYear: ""
    })
    // Generate Request String
    let categoryId = value
    this.setState({ selectedCategory: value })
    let numberOfPosts
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

  onClickSearchPosts = (e) => {
    let value = e.target.previousSibling.value
    // Reset Other Search Fields
    this.setState({
      selectedCategory: "",
      searchMonth: "",
      searchYear: ""
    })
    // Generate Request String
    let numberOfPosts = this.state.numberOfPostsRestart;
    this.setState({
      requestStringState: 'get_search_results/?',
      numberPostsToLoad: numberOfPosts,
      searchString: value
    })
  }

  onChangeMonth = (e, { value }) => {
    // Reset and Set Other Search Fields
    this.setState({
      selectedCategory: "",
      searchString: "",
      searchMonth: value
    })
    // Generate Request String
    let numberOfPosts = this.state.numberOfPostsRestart
    let year = this.state.searchYear ? this.state.searchYear : '2018'
    this.setState({
      requestStringState: 'get_date_posts/?',
      numberPostsToLoad: numberOfPosts,
      searchDate: year + '' + value
    })
  }

  onChangeYear = (e, { value }) => {
    // Reset Other Search Fields
    this.setState({
      selectedCategory: "",
      searchString: "",
      searchYear: value
    })
    // Generate Request String
    let numberOfPosts = this.state.numberOfPostsRestart
    this.setState({
      requestStringState: 'get_date_posts/?',
      numberPostsToLoad: numberOfPosts,
      searchDate: value + '' + this.state.searchMonth
    })
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

  loadMorePosts() {
    this.setState({
      numberPostsToLoad: this.state.numberPostsToLoad + this.state.numberPostsToIncreaseBy
    });
  }

  toggleSearchOptions() {
    let icon;
    if( this.state.searchOptionsArrow === 'chevron down' ) {
      icon = 'chevron up'
    } else {
      icon = 'chevron down'
    }
    this.setState({
      searchOptions: !this.state.searchOptions,
      searchOptionsArrow: icon
    })
  }

  render() {
    return (
      <Grid centered padded stackable className="Blogs">

        <Grid.Row>
          <Grid.Column width="15">
            <Input className="margin-r-20 margin-t-5"
              icon={
                <Icon inverted circular link
                  name='search'
                  onClick={this.onClickSearchPosts}
                />
              }
              placeholder='Search...'
            />
            <Button labelPosition='right' className="kblue margin-t-5"
              icon={this.state.searchOptionsArrow}
              content='More search options'
              onClick={this.toggleSearchOptions}
            />
            <Button className="kblue margin-t-5"
              content='Reset'
              onClick={this.resetSearch}
            />
          </Grid.Column>
        </Grid.Row>

        { this.state.searchOptions ?
        <Grid.Row>
          <Grid.Column width="5">
            <Dropdown search selection fluid
              placeholder='By category'
              options={this.state.categoryDropdownOptions}
              onChange={this.onChangeCategory}
              value={this.state.selectedCategory}
            />
          </Grid.Column>
          <Grid.Column width="5">
            <Dropdown search selection fluid
              placeholder='By month'
              options={date.month}
              onChange={this.onChangeMonth}
              value={this.state.searchMonth}
            />
          </Grid.Column>
          <Grid.Column width="5">
            <Dropdown search selection fluid
              placeholder='By year'
              options={date.year}
              onChange={this.onChangeYear}
              value={this.state.searchYear}
            />
          </Grid.Column>
        </Grid.Row>
        : null }

        <Grid.Row>
          <Grid.Column width="16">
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
          <Grid.Column width="16" textAlign='center'>
            { this.state.numberPostsToLoad < this.props.count ?
            <Button disabled={this.props.buttonLoading}
              loading={this.props.buttonLoading}
              className='kblue'
              onClick={this.loadMorePosts}>
              Load More
            </Button>
            :
            <Button disabled={true}
              className='kblue'>
              All Posts Loaded
            </Button>
            }
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Blogs;
