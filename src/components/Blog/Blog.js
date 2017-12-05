import React, { Component } from 'react';
import { Container, Button, Form, Grid, Column } from 'semantic-ui-react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import imgDefault from './kzsc.jpg';
<<<<<<< HEAD




=======
var i = Math.floor(Math.random() * 93) + 1;
>>>>>>> 3bf4596688208f40a2bee95c902b8663b3062d64

class Blog extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
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

=======
    }

>>>>>>> 3bf4596688208f40a2bee95c902b8663b3062d64
    blogContent() {
      return (
          <div class="ui four link cards">
            {this.state.allposts.map(curpost =>
              <div class="card">
                <div class="image">
                  <img src={curpost.thumbnail_images.full.url}/>
                </div>
                <div class="content">
                  <div class="header" key={curpost.id}>{curpost.title}</div>
                  <div class="meta">
                    <a>By {curpost.author.name}</a>
                  </div>
                  <div class="description">
                    {curpost.excerpt}
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">
                    {curpost.date}
                  </span>
                  <span>
                    <i class="tags icon"></i>

                  </span>
                </div>
                </div>
            )}
          </div>
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
