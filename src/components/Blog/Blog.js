/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Tile from '../Tile/Tile';

import axios from 'axios';

class Blog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allposts: [],
        postsLoading: true
      };
    }

    componentWillMount() {
      axios.get(`https://www.kzsc.org/api/get_recent_posts/`)
        .then(res => {
          const allposts = res.data.posts.map(obj => obj);
          this.setState({ allposts });
          this.setState({ postsLoading: false });
        });
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

      return (
        <div>
          <Grid stackable centered padded>
            <Grid.Row columns='equal'>
              {blogTiles}
            </Grid.Row>
          </Grid>
        </div>
      );
    }

    render() {
      return (
        <Segment loading={this.state.postsLoading} basic className="Blog">
          {this.blogContent()}
        </Segment>
      );
    }
}

export default Blog;
