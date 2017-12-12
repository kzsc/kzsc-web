import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBarFull from './NavBarFull';
import NavBarMobile from './NavBarMobile';

class Home extends Component{
    render(){
        return(
          <div>
            <Grid>
              <Grid.Row columns={1} only='mobile'>
                <Grid.Column>
                  <NavBarMobile></NavBarMobile>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1} only='tablet computer'>
                <Grid.Column>
                  <NavBarFull></NavBarFull>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <audio id="player" preload="auto">>
              <source src="http://188.165.192.5:8242/kzschigh?type=.mp3"
              type="audio/mpeg" preload="auto"/>
            </audio>
          </div>
        );
    }
}

export default Home;
