/*
 * src/components/Home/ListContent.js
 * Used by:
 *  src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import './ListContent.css';

class ListContent extends Component{
  render(){
    return(
      <div className="list-content">
        <h2>Interviews</h2>
        <Grid>
          <Grid.Row className="list-row">
            <Grid.Column width={4} color="red" className="grid-item">
              Content 1
            </Grid.Column>
            <Grid.Column width={4} color="green" className="grid-item">
              Content 2
            </Grid.Column>
            <Grid.Column width={4} color="yellow" className="grid-item">
              Content 3
            </Grid.Column>
            <Grid.Column width={4} color="grey" className="grid-item">
              Content 4
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <h2> Events </h2>
        <Grid>
          <Grid.Row className="list-row">
            <Grid.Column width={4} color="red" className="grid-item">
              Content 1
            </Grid.Column>
            <Grid.Column width={4} color="green" className="grid-item">
              Content 2
            </Grid.Column>
            <Grid.Column width={4} color="yellow" className="grid-item">
              Content 3
            </Grid.Column>
            <Grid.Column width={4} color="grey" className="grid-item">
              Content 4
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <h2> Blog </h2>
        <Grid>
          <Grid.Row className="list-row">
            <Grid.Column width={4} color="red" className="grid-item">
              Content 1
            </Grid.Column>
            <Grid.Column width={4} color="green" className="grid-item">
              Content 2
            </Grid.Column>
            <Grid.Column width={4} color="yellow" className="grid-item">
              Content 3
            </Grid.Column>
            <Grid.Column width={4} color="grey" className="grid-item">
              Content 4
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


export default ListContent
