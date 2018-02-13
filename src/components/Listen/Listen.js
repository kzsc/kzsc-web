/*
 * src/components/Listen/Listen.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Table, Segment, Icon, Menu } from 'semantic-ui-react';
import './Listen.css';

class Listen extends Component {

  constructor(){
    super();
    this.state = {
      activeItem: 'listen',
      menuItems: [
        { name: 'listen', title: 'Listen to KZSC' },
        { name: 'downloadable', title: 'Downloadable Stream Files' },
        { name: 'phone', title: 'Listen on Your Smart Phone' },
        { name: 'news', title: 'KZSC News' }
      ]
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  infoListen() {
    return(
      <Grid.Row>
        <Grid.Column stretched computer='13' tablet='14' mobile='16'>
          <Segment>
            <h1>Listen to KZSC 88.1 fm </h1>
            <p>
              KZSC doesn’t just broadcast to 3 million people over the radio
              airwaves at 88.1FM, we also broadcast to the entire world over
              the internet tubes! Navigate through the tabs above to learn how
              you can tune in, even when you’re not in lovely Santa Cruz
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoDownloadable() {
    return (
      <Grid.Row>
        <Grid.Column stretched computer='13' tablet='14' mobile='16'>
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

        <hr className="k-hr-spacer"/>

        <Grid.Column stretched computer='13' tablet='14' mobile='16'>
          <h3 className="centered-block">
            Webstream Suggested Softwares
          </h3>
          <Table size="large" unstackable verticalAlign='top'>
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
    )
  }

  infoPhone() {
    return (
      <Grid.Row>
        <Grid.Column computer='13' tablet='14' mobile='16' stretched>
          <Segment>
            <div className='float-right'>
              <a href="https://play.google.com/store/apps/details?id=org.kzsc.streaming">
                <Icon className="color-android" name='android' size='massive' link />
              </a>
              <a href="https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8#">
                <Icon className="color-apple" name='apple' size='massive' link />
              </a>
            </div>
            <h2>Listen to KZSC 88.1 fm on your smart phone</h2>
            <p>
              On the iPhone, KZSC Radio is simple and easy to use – one click
              and you’re listening! You’ll have access to the main station,
              our secondary webstream, and current playlist information.
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoNews() {
    return (
      <Grid.Row>
        <Grid.Column computer='13' tablet='14' mobile='16' stretched>
          <Segment>
            <div className='float-right'>
              <a href="https://soundcloud.com/kzsc" target='_blank' rel="noopener noreferrer">
                <Icon className="color-soundcloud width-145" name='soundcloud' size='massive' link />
              </a>
            </div>
            <h2>KZSC News and Interviews</h2>
            <p>
              Our Soundcloud documents our volunteer&#39;s News and Interview
              work
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  getMenuItems() {
    const { activeItem } = this.state;
    let menuItems = this.state.menuItems.map(item => {
      return(
        <Menu.Item key={item.name} name={item.name} active={activeItem === item.name} onClick={this.handleItemClick}>
          {item.title}
        </Menu.Item>
      )
    });
    return menuItems
  }

  render(){
    return(
      <div className="listen">
        <Grid centered padded>
          <Grid.Row>
            <Grid.Column width={16} className='bg-color-grey-1' textAlign='center'>
              <Menu size='large' pointing secondary compact stackable>
                {this.getMenuItems()}
              </Menu>
            </Grid.Column>
          </Grid.Row>

          {this.state.activeItem === 'listen' ? this.infoListen() : null }
          {this.state.activeItem === 'downloadable' ? this.infoDownloadable() : null }
          {this.state.activeItem === 'phone' ? this.infoPhone() : null }
          {this.state.activeItem === 'news' ? this.infoNews() : null }

        </Grid>
      </div>
    );
  }
}

export default Listen;
