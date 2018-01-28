/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Icon, Image, Card, Button } from 'semantic-ui-react';
import Tile from '../Tile/Tile';

import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allposts: []
        };
    }

    componentWillMount() {
      axios.get(`https://www.kzsc.org/api/get_recent_posts/`)
        .then(res => {
          const allposts = res.data.posts.map(obj => obj);
          this.setState({ allposts });
        });
    }

    blogContent() {
      let blogTiles = this.state.allposts.map(post => {
        let categories = post.categories.map(c => {
          return c.title + ' ';
        });
        let description = post.date + ' / in ' + categories + '/ by ' + post.author.name;
        return (
          <Grid.Column key={post.id} computer='4' tablet='8'>
            <Tile image={post.thumbnail_images.full.url} title={post.title}
            type='small' desc={description}/>
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

          <Card.Group itemsPerRow={4}>
            {this.state.allposts.map(curpost =>
              <Card key={curpost.id} href = {curpost.url}>
                <Image src={curpost.thumbnail_images.full.url}/>
                <Card.Content>
                  <Card.Header key={curpost.id} dangerouslySetInnerHTML={{__html: curpost.title}}></Card.Header>
                  <Card.Meta>
                    By {curpost.author.name}
                  </Card.Meta>
                  <Card.Description dangerouslySetInnerHTML={{__html: curpost.excerpt}}></Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <span className="right floated">
                    {curpost.date}
                  </span>
                  <span>
                    <Icon name = 'tags'/>
                  </span>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        </div>
      );
    }

    render() {
      return (
        <div className="Blog">
          {this.blogContent()}


          <div className="div-load-more-blogs">
            <Button color="red">Load more</Button>
          </div>
        </div>
      );
    }
}

export default Blog;
