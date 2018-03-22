/*
 * src/components/TopMenuBar/TopMenuBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class TopMenuBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeMenuItem: 'none',
      menuItems: [
        { to: '/underwriting', name: 'underwriting', title: 'Business Underwriting' },
        { to: '/schedule', name: 'schedule', title: 'Program Schedule' },
        { to: '/studio', name: 'studio', title: 'Studio Rental' },
        { to: '/concert', name: 'concert', title: 'Concert Calendar' },
        { to: '/about', name: 'about', title: 'About' }
      ]
    }
  }

  handleItemClick = (e, { name }) => this.props.handleItemClick(name);

  changeActiveNavItem = (e, { name }) => this.props.onActiveNavItemChange(name);

  getMenuItems() {
    const { activeMenuItem, menuItems } = this.state;
    let menuItemsHTML = menuItems.map(item => {
      return(
        <Menu.Item key={item.name} to={item.to} as={NavLink} name={item.name} active={activeMenuItem === item.name} onClick={this.changeActiveNavItem}>
          <span>{item.title}</span>
        </Menu.Item>
      )
    });
    return menuItemsHTML
  }

  render(){
    return(
      <Grid className="TopMenuBar">
        <Grid.Row columns={1} only='computer tablet'>
          <Grid.Column className='bg-color-grey-1 text-align-center'>
            <Menu size='massive' pointing secondary compact stackable>
              {this.getMenuItems()}
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default TopMenuBar;
