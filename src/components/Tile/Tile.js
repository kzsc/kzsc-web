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
        <div className="kzsc-blog-tile-bottom">
          <a href={this.props.url} target='_blank' rel="noopener noreferrer">
            <h1 dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
          </a>
          <span className="kzsc-blog-tile-desc">{this.props.desc}</span>
        </div>
      </div>
    );
  }
}

export default Tile
