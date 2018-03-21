import React, { Component } from 'react'
import { Menu, Label } from 'semantic-ui-react'

class LeftSideBar extends Component {

  constructor(props){
    super(props);
    this.state = { }
    this.getMenuItem = this.getMenuItem.bind(this);
  }

  getMenuItem() {
    let menuItemsHtml = this.props.items.map(item => {
      return (
        <Menu.Item key={item.name}
                   name={item.name}
                   active={this.props.active === item.name}
                   onClick={this.props.handleItemClick}>
          {item.label ? <Label className='kblue'>{item.label}</Label> : null}
          {item.title}
        </Menu.Item>
      )
    })
    return menuItemsHtml
  }

  render() {
    return (
      <Menu fluid vertical> {this.getMenuItem()} </Menu>
    )
  }
}

export default LeftSideBar;
