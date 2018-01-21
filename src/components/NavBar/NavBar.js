/*
 * src/components/NavBar/NavBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBarFull from './NavBarFull';
import NavBarMobile from './NavBarMobile';

class NavBar extends Component{

  constructor(){
    super();
    this.state = { }
  }

  toggleNavBar() {
    this.props.toggleVisibility();
  }

  hideNavBar() {
    this.props.hideVisibility();
  }

  changeActiveNavItem(newItem) {
    this.props.onActiveNavItemChange(newItem);
  }

  render(){

    return(
      <div className="kzsc-fixed-navbar">
        <Grid>
          <Grid.Row columns={1} only='mobile'>
            <Grid.Column>
              <NavBarMobile activeItem={this.props.activeItem} onActiveNavItemChange={this.changeActiveNavItem.bind(this)}
               toggleVisibility={this.toggleNavBar.bind(this)}
               hideVisibility={this.hideNavBar.bind(this)} navBarVisible={this.props.navBarVisible}></NavBarMobile>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only='tablet computer'>
            <Grid.Column>
              <NavBarFull activeItem={this.props.activeItem} onActiveNavItemChange={this.changeActiveNavItem.bind(this)}>
              </NavBarFull>
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

export default NavBar;
