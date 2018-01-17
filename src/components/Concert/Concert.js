/*
 * src/components/Concert/Concert.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';


class Concert extends Component{
  render(){
    return(
      <div className="concert">
        <Grid textAlign='left' padded centered stackable>

          <Grid.Row>
            <Grid.Column>
              <Segment>
                <h1>Concert Calendar</h1>
                <p>
                  Here are concerts and other cultural events happening in the
                  Monterey Bay Area! Click on any entry to see more information
                  about it. If you have an event you’d like added to the
                  calendar, please fill
                  out <a href='https://www.kzsc.org/events/submit-concert/'>this </a>
                  form.
                </p>
                <p>
                  Non-musical/entertainment events (e.g., classes, fundraisers,
                  association events, etc.) should be directed to KZSC’s
                  Public Service Announcement Director <a href='https://www.kzsc.org/psa'>
                  here</a>.
                </p>
                <p>
                  Want more options? Check the <a href='http://www.gtweekly.com/index.php/santa-cruz-music-art-activities.html'>
                  Santa Cruz GOOD TIMES</a>.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Concert;
