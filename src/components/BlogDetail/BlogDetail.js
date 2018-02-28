/*
 * src/components/Blog/BlogDetail.js
 * Used by:
 *  src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React from 'react'
import {  } from 'react-router-dom'
import BlogPost from './BlogPost'

const BlogDetail = (props) => {
 return (
   <BlogPost blogid={props.match.params.id} />
 )
}

export default BlogDetail
