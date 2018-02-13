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
import axios from 'axios';


import './NavBar.css';

class PlayButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
    this.playButtonClicked = this.playButtonClicked.bind(this);
  }

  componentWillMount(){
    this.setPlayingToFalse();
  }

  componentDidUpdate(prevProps, prevState) {
    const { playing } = this.state

    if( prevState.playing !== playing ) {
      console.log(this.state);
    }

  }

  setPlayingToFalse(){
    this.setState({playing: false});
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
      <Icon size="big" name="video play outline" color="red" fitted link/>
    )
  };

  showPause() {
    return (
      <Icon size="big" name="pause circle outline" color="red" fitted link/>
    )
  };

  getCurrentShowInfo() {
    axios.get('http://localhost:3001/spinitron').then(res => {
      console.log(res);
      this.setState({
        showName: res.s
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const { playing } = this.state;

    return(
      <div>
        <div className="playButtonShowInformation">
          Radio Behind the Diner<br/>
          with Cassette Dream<br/>
          12:00 - 2:00 pm
        </div>
        <div className="playButtonDiv" onClick={this.playButtonClicked}>
          {playing ? this.showPause() : this.showPlay()}
        </div>
      </div>
    );
  }
}


export default PlayButton
