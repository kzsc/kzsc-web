/*
 * src/components/Blog/BlogDetail.js
 * Used by:
 *  src/components/Blog/Blog.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {  } from 'react-router-dom'
import BlogPost from './BlogPost'
import Blogs from '../Blogs/Blogs'

 const BlogDetail = (props) => {
   const player = props.match.params.id
   console.log(props);

   return (
     <div>
       <h1>{player}</h1>
       <h3>Blog Detail</h3>
       <Switch>
        <Route exact path='/blogdetail' component={BlogPost}/>
        <Route path='/blogdetail/:id' component={BlogPost}/>
      </Switch>
     </div>
   )
 }

 export default BlogDetail
