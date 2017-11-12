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
                <Menu.Menu position="left" compact={true}>
                    <Menu.Item
                    className="nav-item"
                    name="home"
                    onClick={this.handleItemClick}
                    id="kzsc-icon-container">
                       <NavLink to='./'>
                          <img src={logo} className="icon" id="kzsc-icon"/>
                       </NavLink>
                    </Menu.Item>
                    <Menu.Item className="nav-item kzsc-nav-link left"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}>
                       <NavLink to='./home'> Home </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='donate'
                    active={activeItem === 'donate'}
                    onClick={this.handleItemClick}>
                        <NavLink to='./donate'> Donate </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='listen'
                    active={activeItem === 'listen'}
                    onClick={this.handleItemClick}>
                       <NavLink to='listen'> Listen </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='schedule'
                    active={activeItem === 'schedule'}
                    onClick={this.handleItemClick}>
                        <NavLink to='./schedule'> Schedule & Playlists </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='studio'
                    active={activeItem === 'studio'}
                    onClick={this.handleItemClick}>
                        <NavLink to='./studio'> Studio Rental </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='concert'
                    active={activeItem === 'concert'}
                    onClick={this.handleItemClick}>
                        <NavLink to='./concert'> Concert Calendar </NavLink>
                    </Menu.Item>
                    <Menu.Item
                    className="nav-item kzsc-nav-link left"
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}>
                        <NavLink to='./about'> About </NavLink>
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
*/
