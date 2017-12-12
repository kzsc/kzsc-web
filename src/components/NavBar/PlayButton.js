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
      var playButton = document.getElementById('p-playIcon');
      var pauseButton = document.getElementById('p-pauseIcon');
      if(!this.state.playing) {
        liveStream.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-block";
        this.setState({
            playing: true
        });
      } else if (this.state.playing) {
        liveStream.pause();
        playButton.style.display = "inline-block";
        pauseButton.style.display = "none";
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
          <Icon id="p-playIcon" size="big"
          name="video play outline" color="red" fitted/>
          <Icon id="p-pauseIcon" size="big"
          name="pause circle outline" color="red" fitted/>
        </div>
        <audio id="player" preload="auto">>
          <source src="http://188.165.192.5:8242/kzschigh?type=.mp3"
          type="audio/mpeg" preload="auto"/>
        </audio>
      </div>
    );
  }
}


export default PlayButton
