import React, {Component} from 'react';
import { Menu, large, Icon, Image } from 'semantic-ui-react';

import './NavBar.css';

class PlayButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
    this.playButtonClicked = this.playButtonClicked.bind(this);
  }

  playButtonClicked() {
      var liveStream = document.getElementById('player');
      if(!this.state.playing) {
        liveStream.play();
        this.setState({
            playing: true
        });
      } else if (this.state.playing) {
        liveStream.pause();
        this.setState({
            playing: false
        });
      }
  };

  showPlay() {
    return (
      <Icon size="big" name="video play outline" color="red" fitted/>
    )
  };

  showPause() {
    return (
      <Icon size="big" name="pause circle outline" color="red" fitted/>
    )
  };

  render(){
    const { playing } = this.state;

    return(
      <div onClick={this.playButtonClicked}>
        {this.state.playing ? this.showPause() : this.showPlay()}
      </div>
    );
  }
}


export default PlayButton
