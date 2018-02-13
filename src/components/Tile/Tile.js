/*
 * src/components/Tile/Tile.js
 * Used by:
 *  src/components/Home/MainContent.js
 *
 * Properties (props): type, image, title, desc
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tile.css';

class Tile extends Component {

  render(){
    let tileClassList = 'kzsc-blog-tile kzsc-blog-tile-' + this.props.type;
    let tileStyleList = {
      backgroundImage: 'url(' + this.props.image + ')'
    }
    return(
      <div className={tileClassList}>
        <div className="kzsc-blog-tile-image" style={tileStyleList}></div>
        <Link to={this.props.url} rel="noopener noreferrer">
          <div className="kzsc-blog-tile-bottom">
            <h1 dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
            <span className="kzsc-blog-tile-desc" dangerouslySetInnerHTML={{__html: this.props.desc}}></span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Tile
