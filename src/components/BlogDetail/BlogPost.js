/*
 * src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import kzscI from '../../assets/images/kzsc.jpg'

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  render() {
    return (
      <div className="BlogPost">
        Hiii
      </div>
    );
  }
}

export default BlogPost;
