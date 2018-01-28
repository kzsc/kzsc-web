/*
 * src/components/Home/ListContent.js
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import './ListContent.css';
import back50thaniversery927x1030 from '../../assets/images/back50thaniversery927x1030.jpg'
import testblog1 from '../../assets/images/testblog1.jpg'
import testblog2 from '../../assets/images/testblog2.png'
import testblog3 from '../../assets/images/testblog3.png'

class ListContent extends Component{

  fromKCRW() {
    let innerStyle = {
      backgroundImage: 'url(' + back50thaniversery927x1030 + ')'
    }
    let innerStyle2 = {
      backgroundImage: 'url(' + testblog1 + ')'
    }
    let innerStyle3 = {
      backgroundImage: 'url(' + testblog2 + ')'
    }
    let innerStyle4 = {
      backgroundImage: 'url(' + testblog3 + ')'
    }
    let innerStyle5 = {
      backgroundImage: 'url(https://www.kzsc.org/wp-content/uploads/2018/01/IMG_4885.jpg)'
    }
    return(

      <div className="feed-page-content">
        <div className="feed-page-wrapper">
          <div className="group">
            <div className="tile live-stream">
              <div className="inner" style={innerStyle}></div>
              <div className="bottom">
                <a href="http://www.kcrw.com/music/shows/aaron-byrd" title="A Global&#13;&#10;Exploration of Sounds.">
                  <h2>Aaron Byrd</h2>
                </a>
                <div className="controls">
                  <div className="info">
                    <a href="http://www.kcrw.com/music/shows/aaron-byrd" className="source">Aaron Byrd</a>
                    <span className="performance cf">
                      <span className="text">KCRW Live</span>
                      <span className="circle"></span>
                    </span>
                  </div>
                  <a href="http://www.kcrw.com/music/shows/aaron-byrd" className="custom-audio-button button audio" title="Listen">
                    <Icon className="icon-audio" name="play" />
                  </a>
                </div>
              </div>
            </div>

            <div className="tile review-state-published">
              <div className="inner" style={innerStyle2}></div>
              <div className="bottom">
                <a href="http://www.kcrw.com/latest/two-cloned-monkeys-make-us-wonder-when-will-humans-be-cloned" title="Zhong Zhong and Hua Hua are two monkey clones in China. It’s the first time researchers have cloned a primate, and it could lead to major medical advances.">
                  <h2>Two cloned monkeys make us wonder: When will humans be cloned?</h2>
                </a>
                <div className="controls">
                  <div className="info">
                    <a href="http://www.kcrw.com/news-culture/shows/press-play-with-madeleine-brand" className="source">Press Play with Madeleine Brand</a>
                    <span className="timestamp relative-date">2018-01-25T20:00:00-08:00</span>
                  </div>
                  <a href="http://www.kcrw.com/latest/two-cloned-monkeys-make-us-wonder-when-will-humans-be-cloned" className="custom-audio-button button audio" title="Listen">
                    <Icon className="icon-audio" name="play" />
                  </a>
                </div>
              </div>
            </div>

            <div className="tile review-state-published">
              <div className="inner" style={innerStyle3}></div>
              <div className="bottom">
                <a href="http://www.kcrw.com/latest/latest-show-1516913585.36" title="Jeremy Sole hosts a sonic trip through the past, present and future of Roots music. Listen On-Demand to the latest show.">
                  <h2>Latest Show</h2>
                </a>
                <div className="controls">
                  <div className="info">
                    <a href="http://www.kcrw.com/music/shows/jeremy-sole" className="source">Jeremy Sole</a>
                    <span className="timestamp relative-date">2018-01-25T16:00:00-08:00</span>
                  </div>
                  <a href="http://www.kcrw.com/latest/latest-show-1516913585.36" className="custom-audio-button button audio" title="Listen">
                    <Icon className="icon-audio" name="play" />
                  </a>
                </div>
              </div>
            </div>

            <div className="tile review-state-published">
              <div className="inner" style={innerStyle4}></div>
              <div className="bottom">
                <a href="http://www.kcrw.com/latest/two-cloned-monkeys-make-us-wonder-when-will-humans-be-cloned" title="Zhong Zhong and Hua Hua are two monkey clones in China. It’s the first time researchers have cloned a primate, and it could lead to major medical advances.">
                  <h2>Two cloned monkeys make us wonder: When will humans be cloned?</h2>
                </a>
                <div className="controls">
                  <div className="info">
                    <a href="http://www.kcrw.com/news-culture/shows/press-play-with-madeleine-brand" className="source">Press Play with Madeleine Brand</a>
                    <span className="timestamp relative-date">2018-01-25T20:00:00-08:00</span>
                  </div>
                  <a href="http://www.kcrw.com/latest/two-cloned-monkeys-make-us-wonder-when-will-humans-be-cloned" className="custom-audio-button button audio" title="Listen">
                    <Icon className="icon-audio" name="play" />
                  </a>
                </div>
              </div>
            </div>

            <div className="tile review-state-published">
              <div className="inner" style={innerStyle5}></div>
              <div className="bottom">
                <a href="http://www.kcrw.com/latest/latest-show-1516913585.36" title="Jeremy Sole hosts a sonic trip through the past, present and future of Roots music. Listen On-Demand to the latest show.">
                  <h2>Latest Show</h2>
                </a>
                <div className="controls">
                  <div className="info">
                    <a href="http://www.kcrw.com/music/shows/jeremy-sole" className="source">Jeremy Sole</a>
                    <span className="timestamp relative-date">2018-01-25T16:00:00-08:00</span>
                  </div>
                  <a href="http://www.kcrw.com/latest/latest-show-1516913585.36" className="custom-audio-button button audio" title="Listen">
                    <Icon className="icon-audio" name="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

  render(){
    return(
      <div className="list-content">
        <h2>Interviews</h2>

        {this.fromKCRW()}


      </div>
    );
  }
}


export default ListContent
