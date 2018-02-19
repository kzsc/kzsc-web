import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import TopMenuBar from '../TopMenuBar/TopMenuBar'

class Psa extends Component{

  constructor() {
    super();
    this.state = {
      activeMenuItem: 'psa',
      menuItems: [
        { name: 'psa', title: 'Public Service Announcments' }
      ]
    };
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

  render() {
    return (
      <div className="Psa">
        <Grid centered padded>
          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/>
        </Grid>
      </div>
    );
  }

}

export default Psa;
