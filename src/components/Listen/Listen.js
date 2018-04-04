/*
 * src/components/Listen/Listen.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Table, Segment, Icon } from 'semantic-ui-react';
import './Listen.css';

class Listen extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }


  infoListen() {
    return(
      <Grid.Row>
        <Grid.Column width="15" stretched>
          <Segment raised>
            <h1>Listen to KZSC 88.1 fm </h1>
            <p>
              KZSC doesn’t just broadcast to 3 million people over the radio airwaves at 88.1FM, we also broadcast to the entire world over the internet tubes! Keep scrolling to learn how you can tune in, even when you’re not in lovely Santa Cruz
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoPhone() {
    return (
      <Grid.Row>
        <Grid.Column width="15" stretched>
          <Segment raised>
            <div className='float-right'>
              <a href="https://play.google.com/store/apps/details?id=org.kzsc.streaming">
                <Icon className="color-android" name='android' size='massive' link />
              </a>
              <a href="https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8#">
                <Icon className="color-apple" name='apple' size='massive' link />
              </a>
            </div>
            <h1>Listen to KZSC 88.1 fm on your smart phone</h1>
            <p>
              On the iPhone, KZSC Radio is simple and easy to use – one click and you’re listening! You’ll have access to the main station, our secondary webstream, and current playlist information.
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoNews() {
    return (
      <Grid.Row>
        <Grid.Column width="15" stretched>
          <Segment raised>
            <div className='float-right'>
              <a href="https://soundcloud.com/kzsc" target='_blank' rel="noopener noreferrer">
                <Icon className="color-soundcloud width-145" name='soundcloud' size='massive' link />
              </a>
            </div>
            <h1>KZSC News and Interviews</h1>
            <p>
              Our Soundcloud documents our volunteer&#39;s News and Interview work
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoDownloadable() {
    return (
      <Grid.Row>
        <Grid.Column width="15">
          <h3 className="centered-block">
            KZSC Main Stream Downloadable Files
          </h3>

          <Table size="large" unstackable className='kblue' striped selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Format</Table.HeaderCell>
                <Table.HeaderCell>Quality</Table.HeaderCell>
                <Table.HeaderCell>Connection Type</Table.HeaderCell>
                <Table.HeaderCell>Stream</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>mp3</Table.Cell>
                <Table.Cell>56kbps</Table.Cell>
                <Table.Cell>Dial-up</Table.Cell>
                <Table.Cell>
                  <a href="http://streaming.kzsc.org/kzsclow.m3u">Download Link</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>mp3</Table.Cell>
                <Table.Cell>128kbps</Table.Cell>
                <Table.Cell>DSL/Cable</Table.Cell>
                <Table.Cell>
                  <a href="http://streaming.kzsc.org/kzschigh.m3u">Download Link</a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoWebstreamSoftwares() {
    return (
      <Grid.Row>
        <Grid.Column width="15">
          <h3 className="centered-block">
            Webstream Suggested Softwares
          </h3>
          <Table size="large" unstackable className='kblue' striped selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Windows</Table.HeaderCell>
                <Table.HeaderCell>Mac</Table.HeaderCell>
                <Table.HeaderCell>Linux</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <a href="http://www.winamp.com/">Winamp</a>
                </Table.Cell>
                <Table.Cell>
                  <a href="http://www.itunes.com/">iTunes</a>
                </Table.Cell>
                <Table.Cell>
                  <a href="http://www.xmms.org/">XMMS</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <a href="http://www.itunes.com/">iTunes</a>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    )
  }

  render(){
    return(
      <div className="Listen">
        <Grid centered padded colums="1" stackable>
          {this.infoListen()}
          {this.infoPhone()}
          {this.infoNews()}
          {this.infoDownloadable()}
          {this.infoWebstreamSoftwares()}
        </Grid>
      </div>
    );
  }
}

export default Listen;
