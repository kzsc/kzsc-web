/*
 * src/components/Listen/Listen.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';

class TopMenuBar extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }

  handleItemClick = (e, { name }) => this.props.handleItemClick(name);

  getMenuItems() {
    const { activeMenuItem } = this.props;
    let menuItems = this.props.menuItems.map(item => {
      return(
        <Menu.Item key={item.name} name={item.name} active={activeMenuItem === item.name} onClick={this.handleItemClick}>
          <span dangerouslySetInnerHTML={{__html: item.title}}></span>
        </Menu.Item>
      )
    });
    return menuItems
  }

  render(){
    return(
      <Grid.Row>
        <Grid.Column width={16} className='bg-color-grey-1' textAlign='center'>
          <Menu size='massive' pointing secondary compact stackable>
            {this.getMenuItems()}
          </Menu>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default TopMenuBar;
