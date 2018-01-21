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
    this.state = { }
  }

  changeActiveNavItem = (e, { name }) => this.props.onActiveNavItemChange(name);

  render(){

    return(
      <div>
        <Menu size="massive" className="navbar" secondary pointing>
          <Menu.Menu position="left">
            <Menu.Item>
              <Image src={logo} width='107px'/>
            </Menu.Item>
            <Menu.Item as={NavLink} to='/home'
            className="item nav-item kzsc-nav-link left"
            name = "home"
            active={this.props.activeItem === 'home'}
            onClick={this.changeActiveNavItem}>
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} to='/donate'
            className="nav-item kzsc-nav-link left"
            name = "donate"
            active={this.props.activeItem === 'donate'}
            onClick={this.changeActiveNavItem}>
                Donate
            </Menu.Item>
            <Menu.Item as={NavLink} to='/listen'
            className="nav-item kzsc-nav-link left"
            name='listen'
            active={this.props.activeItem === 'listen'}
            onClick={this.changeActiveNavItem}>
               Listen
            </Menu.Item>
            <Menu.Item as={NavLink} to='/blog'
            className="nav-item kzsc-nav-link left"
            name='blog'
            active={this.props.activeItem === 'blog'}
            onClick={this.changeActiveNavItem}>
               Blog
            </Menu.Item>
            <Menu.Item as={NavLink} to='/schedule'
            className="nav-item kzsc-nav-link left"
            name='schedule'
            active={this.props.activeItem === 'schedule'}
            onClick={this.changeActiveNavItem}>
               Schedule
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className="nav-item kzsc-nav-icon right">
                <PlayButton></PlayButton>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}


export default NavBarFull
