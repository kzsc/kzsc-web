/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import axios from 'axios';
import kzscI from '../../assets/images/kzsc.jpg'
import TopMenuBar from '../TopMenuBar/TopMenuBar'
import './base.css'
import './kzsc_santa_cruz.css'
import './shortcodes.css'
import './style.css'
import './BlogDetail.css'


class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "https://www.kzsc.org/",
      blogdata: [],
      activeMenuItem: 'none',
      menuItems: []
    }
  }

  componentWillMount(){
    this.kzscApiGetPostById(this.props.blogid, 'blogdata')
  }

  componentDidUpdate(prevProps, prevState) {
    const { blogdata } = this.state

    if( prevState.blogdata !== blogdata ) {
      this.setState({
        menuItems: [
          { name: 'blog', title: this.state.blogdata[0].title }
        ]
      })
    }
  }

  kzscApiGetPostById(id, stateVar) {
    let postUrl = this.state.domain + 'api/get_post/?post_id=' + id;
    axios.get(postUrl).then(res => {
      const holdData = [res.data.post];
      this.setState({ [stateVar]: holdData });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  toDateString(date) {
    let dateB = new Date(date);
    let month = dateB.getMonth() + 1;
    let monthString;
    switch (month) {
      case 1:
        monthString = 'January'; break;
      case 2:
        monthString = 'February'; break;
      case 3:
        monthString = 'March'; break;
      case 4:
        monthString = 'April'; break;
      case 5:
        monthString = 'May'; break;
      case 6:
        monthString = 'June'; break;
      case 7:
        monthString = 'July'; break;
      case 8:
        monthString = 'August'; break;
      case 9:
        monthString = 'September'; break;
      case 10:
        monthString = 'October'; break;
      case 11:
        monthString = 'November'; break;
      case 12:
        monthString = 'December'; break;
      default:
        monthString = month;
    }
    let fullDate = monthString + ' ' + dateB.getDate() + ', ' + dateB.getFullYear();
    return fullDate
  }

  getBlogDataTags(postTags) {
    let tags = postTags.map(t => {
      return '#' + t.title + ' ';
    })
    return (
      <div className="blogDetailTags color-grey-1">Tags: {tags}</div>
    )
  }

  getBlogData(item) {
    let blog = item.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Grid.Row key={post.id}>
          <Grid.Column computer={12} tablet={14} mobile={16}>
            <div className='overflow-hidden width-190 height-180 float-right margin-l-20 margin-b-20'>
              <Image src={post.thumbnail_images.full.url} size='medium'/>
            </div>
            <div className="blogDetailTitle" dangerouslySetInnerHTML={{__html: post.title}}></div>
            <div className="blogDetailDescription">
              {this.toDateString(post.date)} / in {categories} / by {post.author.name}
            </div>
            { post.tags.length ? this.getBlogDataTags(post.tags) : null }
            <div className="wordpressHTML" dangerouslySetInnerHTML={{__html: post.content}}></div>
          </Grid.Column>
        </Grid.Row>
      );
    });
    return blog;
  }

  handleItemClick(name) { this.setState({ activeMenuItem: 'none' }) }

  render() {
    return (
      <div className="BlogPost">
        <Grid centered padded>

          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/>

          {this.getBlogData(this.state.blogdata)}
        </Grid>
      </div>
    );
  }
}

export default BlogPost;
