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
        liveStream.load();
        liveStream.play();
        this.setState({
            playing: true
        });
      } else {
        liveStream.pause();
        this.setState({
            playing: false
        });
      }
  };

  render(){
    const { playing } = this.state

    return(
      <div>
        <div onClick={this.playButtonClicked}>
        <Icon size="big" name="video play outline" color="red"/>
        </div>
    
        <audio id="player">
          <source src="http://188.165.192.5:8242/kzschigh?type=.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    );
  }
}


export default PlayButton
