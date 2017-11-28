import React, { Component } from 'react';
import {Menu, large, Icon} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo_dark_orange_sm.png';
import './NavBar.css';

class NavBar extends Component{
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render(){
        const {activeItem} = this.state

        return(
        <div>
            <Menu pointing secondary size="massive" className="navbar">
                <Menu.Menu position="left" compact={true} id="kzsc-menu">
                    <Menu.Item as={NavLink} to='./' name="home"
                    className="item nav-item"
                    onClick={this.handleItemClick}
                    id="kzsc-icon-container">
                        <img src={logo} className="icon" id="kzsc-icon"/>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='./home'
                    className="active item nav-item kzsc-nav-link left"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='./donate'
                    className="nav-item kzsc-nav-link left"
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

                <Menu.Menu
                position="right"
                compact={true}>
                    <Menu.Item className="nav-item kzsc-nav-icon right">
                        <Icon name="video play outline" color="red" className="icon"/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
        );
    }
}

export default NavBar;

/* Removed Content

<Menu.Item className="nav-item kzsc-nav-icon right">
    <Icon name="search" className="icon"/>
</Menu.Item>

<Menu.Item
className="nav-item kzsc-nav-link left"
name='blog'
active={activeItem === 'blog'}
onClick={this.handleItemClick}>
   <NavLink to='blog'> Blog </NavLink>
</Menu.Item>
*/
