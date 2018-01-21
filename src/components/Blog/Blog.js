/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Icon, Image, Card, Container, Button } from 'semantic-ui-react';

import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allposts: []
        };
    }

    componentDidMount() {
      axios.get(`https://www.kzsc.org/api/get_recent_posts/`)
        .then(res => {
          console.log(res);
          const allposts = res.data.posts.map(obj => obj);
          this.setState({ allposts });
        });
    }

    blogContent() {
      return (
          <Card.Group itemsPerRow={4}>
            {this.state.allposts.map(curpost =>
              <Card key={curpost.id} href = {curpost.url}>
                <Image src={curpost.thumbnail_images.full.url}/>
                <Card.Content>
                  <Card.Header key={curpost.id}>{curpost.title}</Card.Header>
                  <Card.Meta>
                    By {curpost.author.name}
                  </Card.Meta>
                  <Card.Description>
                    {curpost.excerpt}
                  </Card.Description>
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
      );
    }

    render() {
        return (
            <Container className="blog-container">
                <span className="content-header"> From the KZSC Blog </span>
                {this.blogContent()}


                <div className="div-load-more-blogs">
                    <Button color="red">Load more</Button>
                </div>

            </Container>
        );
    }
}

export default Blog;
