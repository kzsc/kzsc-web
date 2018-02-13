/*
 * src/components/NavBar/NavBarFull.js
 * Used by:
 *  src/components/NavBar/NavBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo_dark_orange_sm.png';
import PlayButton from './PlayButton';

import './NavBar.css';

class NavBarFull extends Component {

  constructor(){
    super();
    this.state = {
      menuItems: [
        {
          to: '/home', name: 'home', title: 'Home'
        },
        {
          to: '/donate', name: 'donate', title: 'Donate'
        },
        {
          to: '/listen', name: 'listen', title: 'Listen'
        },
        {
          to: '/blogs', name: 'blog', title: 'Blog'
        }
      ]
    }
  }

  changeActiveNavItem = (e, { name }) => this.props.onActiveNavItemChange(name);

  getMenuItems() {
    let menuItems = this.state.menuItems.map(item => {
      return(
        <Menu.Item as={NavLink} to={item.to} name={item.name} key={item.name}
        active={this.props.activeItem === item.name} onClick={this.changeActiveNavItem}>
          {item.title}
        </Menu.Item>
      );
    });
    return menuItems;
  }

  render(){

    return(
      <div>
        <Menu inverted size="massive" className="navbar kblue" fixed='top'>
          <Menu.Menu position="left">
            <Menu.Item as='a' href='/home'>
              <Image src={logo} width='107px'/>
            </Menu.Item>
            {this.getMenuItems()}
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
                <PlayButton></PlayButton>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}


export default NavBarFull
