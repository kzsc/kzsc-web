import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import NavBarFull from './NavBarFull';
import NavBarMobile from './NavBarMobile';

class Home extends Component{
    render(){
        return(
            <Grid>
              <Grid.Row columns={1} only='mobile'>
                <Grid.Column>
                  <NavBarMobile></NavBarMobile>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1} only='tablet computer'>
                <Grid.Column>
                  <NavBarFull></NavBarFull>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        );
    }
}

export default Home;



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
