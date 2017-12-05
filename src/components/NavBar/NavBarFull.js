import React, {Component} from 'react';
import { Menu, large, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo_dark_orange_sm.png';

import './NavBar.css';

class NavBarFull extends Component{
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render(){
    const {activeItem} = this.state

    return(
      <div>
        <Menu size="massive" className="navbar" secondary pointing>
          <Menu.Menu position="left">
            <Menu.Item
            className="nav-item">
              <Image src={logo}  size='big' id="kzsc-icon"/>
            </Menu.Item>
            <Menu.Item as={NavLink} to='/home'
            className="item nav-item kzsc-nav-link left"
            name = "home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} to='/donate'
            className="nav-item kzsc-nav-link left"
            name = "donate"
            active={activeItem === 'donate'}
            onClick={this.handleItemClick}>
                Donate
            </Menu.Item>
            <Menu.Item as={NavLink} to='/listen'
            className="nav-item kzsc-nav-link left"
            name='listen'
            active={activeItem === 'listen'}
            onClick={this.handleItemClick}>
               Listen
            </Menu.Item>
            <Menu.Item as={NavLink} to='/blog'
            className="nav-item kzsc-nav-link left"
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}>
               Blog
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className="nav-item kzsc-nav-icon right">
                <Icon name="video play outline" color="red" className="icon"/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}


export default NavBarFull
