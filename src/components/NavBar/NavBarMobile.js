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
import logo from '../../assets/images/logo1.png';
import '../../App.css'
import './NavBar.css';

class NavBarMobile extends Component{

  constructor(){
    super();
    this.state = {
      menuItems: [
        { to: '/home', name: 'home', title: 'Home' },
        { to: '/donate', name: 'donate', title: 'Donate' },
        { to: '/listen', name: 'listen', title: 'Listen' },
        { to: '/blogs', name: 'blog', title: 'Blog' },
        { to: '/about', name: 'about', title: 'About' },
        { to: '/concert', name: 'concert', title: 'Concert' },
        { to: '/psa', name: 'psa', title: 'Psa' },
        { to: '/schedule', name: 'schedule', title: 'Schedule' },
        { to: '/sponser', name: 'sponser', title: 'Sponser' },
        { to: '/studio', name: 'studio', title: 'Studio' }
      ]
    }
  }

  changeActiveNavItem = (e, { name }) => this.props.onActiveNavItemChange(name);

  toggleNavBar() {
    this.props.toggleVisibility();
  }

  hideNavBar() {
    this.props.hideVisibility();
  }

  getSidebarMenuItems() {
    let sidebarMenuItems = this.state.menuItems.map(item => {
      return(
        <Menu.Item as={NavLink} to={item.to} name={item.name} key={item.name}
        active={this.props.activeItem === item.name} onClick={this.changeActiveNavItem}>
          {item.title}
        </Menu.Item>
      );
    });
    return sidebarMenuItems;
  }

  render(){

    return(
      <div>
        <Menu inverted size="massive" className="kblue customnav" fixed='top'>
          <Menu.Menu position="left" onClick={this.hideNavBar.bind(this)}>
            <Menu.Item>
              <Image src={logo} width='107px'/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item id="playButtonItem" className="center"
             onClick={this.hideNavBar.bind(this)}>
                <PlayButton></PlayButton>
            </Menu.Item>
            <Menu.Item className="center">
              <Icon className="clickable-icon" size="big" name="sidebar"
              color="red" onClick={this.toggleNavBar.bind(this)} fitted/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Sidebar as={Menu} size="massive" animation='push' width='thin' direction='right'
         visible={this.props.navBarVisible} icon='labeled' vertical
         onClick={this.toggleNavBar.bind(this)} inverted className='kblue'>
          {this.getSidebarMenuItems()}
        </Sidebar>

      </div>
    );
  }
}

export default NavBarMobile
