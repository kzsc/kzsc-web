/*
 * src/components/Listen/Listen.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Table, Segment, Icon, Container } from 'semantic-ui-react';
import './Listen.css';

class Listen extends Component {
  render(){
    return(
      <div className="listen">
        <Grid textAlign='left' padded centered stackable>

          <Grid.Row>
            <Grid.Column>
              <Segment>
                <h1>Listen to KZSC 88.1 fm </h1>
                <p>
                  KZSC doesn’t just broadcast to 3 million people over the radio
                  airwaves at 88.1FM, we also broadcast to the entire world over
                  the internet tubes! These tables below explains how you can tune
                  in, even when you’re not in lovely Santa Cruz.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='8'>
              <h3 className="centered-block">
                KZSC Main Stream Downloadable Files
              </h3>
              <Table size="large" unstackable>
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
                      <a href="http://streaming.kzsc.org/kzsclow.m3u">
                        Download Link
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>mp3</Table.Cell>
                    <Table.Cell>128kbps</Table.Cell>
                    <Table.Cell>DSL/Cable</Table.Cell>
                    <Table.Cell>
                      <a href="http://streaming.kzsc.org/kzschigh.m3u">
                        Download Link
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>

            <Grid.Column width='8'>
              <h3 className="centered-block">
                Webstream Suggested Softwares
              </h3>
              <Table size="large" unstackable>
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
                      <a href="http://www.winamp.com/">
                        Winamp
                      </a>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="http://www.itunes.com/">
                        iTunes
                      </a>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="http://www.xmms.org/">
                        XMMS
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <a href="http://www.itunes.com/">
                        iTunes
                      </a>
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='8' stretched>
              <Segment>
                <h2>Listen to KZSC 88.1 fm on your smart phone</h2>
                <p>
                  On the iPhone, KZSC Radio is simple and easy to use – one click
                  and you’re listening! You’ll have access to the main station,
                  our secondary webstream, and current playlist information.
                </p>
                <Container textAlign='center'>
                  <a href="https://play.google.com/store/apps/details?id=org.kzsc.streaming">
                    <Icon className="color-android" name='android' size='massive' link />
                  </a>
                  <a href="https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8#">
                    <Icon className="color-apple" name='apple' size='massive' link />
                  </a>
                </Container>
              </Segment>
            </Grid.Column>

            <Grid.Column width='8' stretched>
              <Segment>
                <h2>KZSC News and Interviews</h2>
                <p>
                  Our Soundcloud documents our volunteer&#39;s News and Interview
                  work
                </p>
                <Container textAlign='center'>
                  <a href="https://soundcloud.com/kzsc">
                    <Icon className="color-soundcloud" name='soundcloud' size='massive' link />
                  </a>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

// The KZSC Radio app is a free Internet radio streaming service tuned to community radio station 88.1 FM KZSC, featuring award-winning music programming, UCSC sports, local news and stimulating conversation.

export default Listen;
