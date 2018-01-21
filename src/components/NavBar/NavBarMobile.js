/*
 * src/components/NavBar/NavBarMobile.js
 * Used by:
 *  src/components/NavBar/NavBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PlayButton from './PlayButton';
import logo from '../../logo_dark_orange_sm.png';

import './NavBar.css';

class NavBarMobile extends Component{

  constructor(){
    super();
    this.state = {
    }
  }

  changeActiveNavItem = (e, { name }) => this.props.onActiveNavItemChange(name);

  toggleNavBar() {
    this.props.toggleVisibility();
  }

  hideNavBar() {
    this.props.hideVisibility();
  }

  render(){

    return(
      <div>
        <Menu size="massive" className="navbar" secondary pointing>
          <Menu.Menu position="left" onClick={this.hideNavBar.bind(this)}>
            <Menu.Item>
              <Image src={logo}  width='107px'/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className="nav-item kzsc-nav-icon center"
             onClick={this.hideNavBar.bind(this)}>
                <PlayButton></PlayButton>
            </Menu.Item>
            <Menu.Item className="nav-item kzsc-nav-icon center">
              <Icon className="clickable-icon" size="big" name="sidebar"
              color="red" onClick={this.toggleNavBar.bind(this)} fitted/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Sidebar as={Menu} animation='push' width='thin' direction='right'
        visible={this.props.navBarVisible} icon='labeled' vertical
         onClick={this.toggleNavBar.bind(this)}>
          <Menu.Item as={NavLink} to='/home' name = "home"
          className="item nav-item kzsc-nav-link left"
          active={this.props.activeItem === 'home'}
          onClick={this.changeActiveNavItem}>
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to='/donate' name = "donate"
          className="nav-item kzsc-nav-link left"
          active={this.props.activeItem === 'donate'}
          onClick={this.changeActiveNavItem}>
            Donate
          </Menu.Item>
          <Menu.Item as={NavLink} to='/listen' name='listen'
          className="nav-item kzsc-nav-link left"
          active={this.props.activeItem === 'listen'}
          onClick={this.changeActiveNavItem}>
            Listen
          </Menu.Item>
          <Menu.Item as={NavLink} to='/blog' name='blog'
          className="nav-item kzsc-nav-link left"
          active={this.props.activeItem === 'blog'}
          onClick={this.changeActiveNavItem}>
            Blog
          </Menu.Item>
        </Sidebar>

      </div>
    );
  }
}

export default NavBarMobile
