/*
 * src/components/NavBar/PlayButton.js
 * Used by:
 *  src/components/NavBar/NavBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import './NavBar.css';

class PlayButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
    this.playButtonClicked = this.playButtonClicked.bind(this);
  }

  setPlayingToFalse() {
    this.setState({ playing: false })
  }

  playButtonClicked() {
    var liveStream = document.getElementById('player');
    if(!this.state.playing) {
      liveStream.play()
      this.setState({ playing: true  })
    } else if (this.state.playing) {
      liveStream.pause()
      this.setState({ playing: false })
    }
  }

  showPlay() {
    return <Icon size="big" name="video play outline" color="black" fitted link/>
  }

  showPause() {
    return <Icon size="big" name="pause circle outline" color="black" fitted link/>
  }

  getShowText() {
    const { currentShow } = this.props
    console.log(currentShow)
    let programmers = currentShow.ShowUsers.map(dj => {
      return " " + dj.DJName
    })
    return (
      <div className="play-button-info">
        <span dangerouslySetInnerHTML={{__html: currentShow.ShowName}}></span><br/>
        with<span dangerouslySetInnerHTML={{__html: programmers}}></span><br/>
        {currentShow.OnairTime} - {currentShow.OffairTime}
      </div>
    )
  }

  render() {
    const { playing } = this.state

    return (
      <div>
        {this.getShowText()}
        <div className="play-button-div" onClick={this.playButtonClicked}>
          {playing ? this.showPause() : this.showPlay()}
        </div>
      </div>
    );
  }
}


export default PlayButton
