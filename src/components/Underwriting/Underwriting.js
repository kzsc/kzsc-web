/*
 * src/components/Underwriting/Underwriting.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Icon, Button } from 'semantic-ui-react';
import underwritersList from './underwritersList.json';

class Underwriting extends Component{

  constructor(){
    super();
    this.state = { }
  }

  getUnderwriters() {
    let underwriters = underwritersList.map((u, i) => {
      let color;
      let secondary;
      if(i % 4 === 0) {
        color = 'grey';
        secondary = true;
      }
      if(i % 4 === 1) {
        color = 'kblue';
        secondary = true;
      }
      if(i % 4 === 2) {
        color = 'grey';
        secondary = false;
      }
      if(i % 4 === 3) {
        color = 'kblue'
        secondary = false;
      }
      let details = '';
      if(u.site) {
        details += '<a href=' + u.site + ' target="_blank">' + u.site + '</a><br />'
      }
      if(u.street) { details += u.street + '<br/>' }
      if(u.address) { details += u.address + '<br/>'}
      if(u.phone) { details += u.phone + '<br/>'}
      if(u.email) { details += u.email + '<br/>'}
      return (
        <Grid.Column key={i} stretched className='padding-tb-1rem' textAlign='center'>
          <Segment basic inverted className={'k-border-radius-10 '+color} secondary={secondary}>
            <h3>{u.name}</h3>
            <p className='word-warp-break'>
              <span dangerouslySetInnerHTML={{__html: details}}></span>
            </p>
          </Segment>
        </Grid.Column>
      )
    });
    return underwriters;
  }

  render(){
    return(
      <div className="Underwriting">

        <Grid centered padded stackable>

          <Grid.Row columns="1">
            <Grid.Column textAlign='center'>
              <h2>LOYALTY AND REACH</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="2">
            <Grid.Column>
              <Segment padded>
                <h3>MAKE A CONNECTION</h3>
                <div>
                  A KZSC Underwriting is a great way to connect with our fiercely
                  loyal listeners
                </div>
                <div>
                  We broadcast 24/7 to over 25,000 students, faculty, and staff
                  on the UC Santa Cruz campus and into the heart of the Greater
                  Monterey Bay Area, with a potential listening audience of 3.2
                  million. Our webstreams are followed around the world and we
                  have more than 6,000 followers on social media
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column stretched>
              <Segment padded>
                <div>
                  We offer a variety of underwriting opportunities with on-air, online, and in print options.
                </div>
                <div>
                  We broadcast 24/7 to over 25,000 students, faculty, and staff
                  on the UC Santa Cruz campus and into the heart of the Greater
                  Monterey Bay Area, with a potential listening audience of 3.2
                  million. Our webstreams are followed around the world and we
                  have more than 6,000 followers on social media
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns='3'>
            <Grid.Column>
              <div>
                <h2>
                  <Icon name='microphone' /> On Air
                </h2>
                <p className="p-desc">
                  Your on-air announcements can be aired during your choice of
                  programs or specific times. With over 60 different music and
                  public affairs programs, KZSC’s Underwriting Program offers a
                  unique opportunity for you or your company to reach a targeted
                  audience
                </p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>
                  <Icon name='computer' /> Online
                </h2>
                <p className="p-desc">
                  All KZSC underwriters are featured on our website including your
                  phone number, address, and website if desired
                </p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>
                  <Icon name='newspaper' /> In Print
                </h2>
                <p className="p-desc">
                  Underwriting space in the quarterly KZSC Program Guide is available
                  on a first-come, first-serve basis as part of specific underwriting
                  contracts. The guide is available at locations on campus and
                  throughout the community
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="1">
            <Grid.Column textAlign='center'>
              <h2>ONGOING UNDERWRITING</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="2">
            <Grid.Column stretched>
              <Segment padded>
                You can save money and increase your exposure on KZSC by getting a
                customized contract. For more information, please email Luisa Cardoza
                at <a href='mailto@underwriting@kzsc.org'>underwriting@kzsc.org</a> OR
                call (831) 471-7830
              </Segment>
            </Grid.Column>
            <Grid.Column stretched>
              <Segment padded>
                <h3>Support KZSC Santa Cruz Radio</h3>
                <div>
                  Purchase an underwriting package today to become a part of our
                  community
                </div>
                <NavLink to='/underwritingproduct'>
                  <Button className='kblue margin-t-5'>Become an Underwriter</Button>
                </NavLink>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <h2>KZSC THANKS THE FOLLOWING LOCAL BUSINESSES FOR THEIR SUPPORT:</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="4">
            {this.getUnderwriters()}
          </Grid.Row>

        </Grid>

      </div>
    );
  }
}

export default Underwriting;
