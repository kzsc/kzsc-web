import React, {Component} from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PlayButton from './PlayButton';
import logo from '../../logo_dark_orange_sm.png';

import './NavBar.css';

class NavBarMobile extends Component{
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render(){
    const {activeItem} = this.state
    const { visible } = this.state

    return(
      <div>
        <Menu size="massive" className="navbar" secondary pointing>
          <Menu.Menu position="left">
            <Menu.Item>
              <Image src={logo}  width='107px'/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className="nav-item kzsc-nav-icon center">
                <PlayButton></PlayButton>
            </Menu.Item>
            <Menu.Item className="nav-item kzsc-nav-icon center">
              <Icon className="clickable-icon" size="big" name="sidebar"
              color="red" onClick={this.toggleVisibility} fitted/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Sidebar as={Menu} animation='push' width='thin' direction='right'
        visible={visible} icon='labeled' vertical
         onClick={this.toggleVisibility}>
          <Menu.Item as={NavLink} to='/home' name = "home"
          className="item nav-item kzsc-nav-link left"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to='/donate' name = "donate"
          className="nav-item kzsc-nav-link left"
          active={activeItem === 'donate'}
          onClick={this.handleItemClick}>
            Donate
          </Menu.Item>
          <Menu.Item as={NavLink} to='/listen' name='listen'
          className="nav-item kzsc-nav-link left"
          active={activeItem === 'listen'}
          onClick={this.handleItemClick}>
            Listen
          </Menu.Item>
          <Menu.Item as={NavLink} to='/blog' name='blog'
          className="nav-item kzsc-nav-link left"
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}>
            Blog
          </Menu.Item>
        </Sidebar>

      </div>
    );
  }
}

export default NavBarMobile
