/*
 * src/components/Concert/Concert.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Concert extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeMenuItem: 'concert',
      menuItems: [
        { name: 'concert', title: 'Concert Calendar' }
      ]
    }
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

  render(){
    let iFrameStyle = {
      frameBorder: "0"
    }

    return(
      <div className="concert">
        <Grid centered padded>

          {/* <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/> */}

          <Grid.Row>
            <Grid.Column computer='12' tablet='14' mobile='16'>
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
              <iframe title="concertcalendar" src="https://www.google.com/calendar/embed?src=calendar%40kzsc.org&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showCalendars=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23f7f7f7&amp;color=%23528800&amp;ctz=America%2FLos_Angeles" width="100%" height="600" scrolling="no" style={iFrameStyle}>
              </iframe>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Concert;
