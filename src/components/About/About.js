/*
 * src/components/About/About.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Button, Icon, Image, Form, Select, TextArea, Segment, Container, Reveal } from 'semantic-ui-react'
import './About.css';
import govboardmembers from './govboardmembers.json';
import TopMenuBar from '../TopMenuBar/TopMenuBar'

class About extends Component{

  constructor(){
    super();
    this.state = {
      missionStatement: "KZSC is a non-commercial, educational public radio station licensed by "
        + "the Federal Communications Commission (FCC) to the University of "
        + "California. The station’s responsibilities are to both the license grantor "
        + "and license holder. The station’s responsibility to the UC Regents is to "
        + "serve as a training ground for UC Santa Cruz students wishing to pursue a "
        + "professional career or a vocational activity in the broadcast industry. "
        + "The station is also obligated by the FCC to operate as a public service "
        + "to Santa Cruz, San Benito, and Monterey county audiences, offering "
        + "programming in “the public interest.” KZSC is dedicated to airing "
        + "alternative viewpoints that often differ from the broadcasts found on many "
        + "commercial stations. Our creative and educational endeavors will be guided "
        + "by honesty, balance and sensitivity. KZSC is committed to soliciting and "
        + "providing access in a non- discriminatory, progressive fashion to those "
        + "traditionally underrepresented in the media. This includes, but is not "
        + "limited to, women, cultural, ethnic and racial minorities, people of various "
        + "sexual orientations, seniors, youth, children and the disabled. KZSC staff "
        + "shall at all times strive for completeness in news coverage. The station "
        + "shall strive conscientiously for unbiased and fair reporting on all events "
        + "and topics. With the exception of FCC and University rules, KZSC shall not "
        + "allow any censorship (“prior restraint”) in program content by any agency "
        + "outside of the station (refer to FCC policies and the UCSC Rule book.)",
      frcPurposeIntro: "",
      frcPurpose: "",
      kzscPurpose: "",
      psaInto: "Public Service Announcements (PSAs) can help get the word out "
        + "about your event! The airing of Public Service Announcements is essential "
        + "to KZSC’s mission to serve and inform the public. KZSC takes seriously "
        + "its role to assist non-profit organizations who receive little exposure "
        + "through commercial and corporate media sources.",
      regardingOptions: [
        { key: 'ms', text: 'Music Submission', value: 'musicsubmission' },
        { key: 'pr', text: 'Programming', value: 'programming' },
        { key: 'pl', text: 'Pledging/Pledge Shop', value: 'pledgingpledgeshop' },
        { key: 'st', text: 'Streaming/KZSC Website', value: 'streamingkzscwebsite' }
      ],
      activeMenuItem: 'about',
      menuItems: [
        { name: 'about', title: 'About' },
        { name: 'psa', title: 'Public Service Announcements' },
        { name: 'contact', title: 'Contact Us' },
      ]
    }
  }

  getPurpose() {
    this.setState({
      frcPurposeIntro: "In 1928, the Federal Radio Commission (the predecessor to "
      + "the FCC) elaborated a definition of “public interest” in the following "
      + "terms (cited in part):",

      frcPurpose: "Broadcasting stations are licensed to serve the public and not "
      + "for the purpose of furthering the private or selfish interests of "
      + "individuals or groups of individuals. The standard of public interest, "
      + "convenience, or necessity means nothing if it does not mean this... The "
      + "entire listening public within the service area of a station.., is "
      + "entitled to service from that station…A broadcasting station may be "
      + "regarded as a sort of ‘mouthpiece on the air for the community it serves, "
      + "over which its public events of general interest…may be broadcast. If... "
      + "the station performs its duty in furnishing a well-rounded program, the "
      + "rights of the community have been achieved.",

      kzscPurpose: "KZSC is dedicated to this definition of “public interest.” KZSC "
      + "is dedicated to producing the best radio our various personnel and "
      + "facilities will permit, serving the UCSC campus and our larger listening "
      + "audience with news, public affairs, music, entertainment and spoken word "
      + "programming as well as broadcasts and information about various UCSC "
      + "campus events and issues."
    });
  }

  componentWillMount() {
    this.getPurpose();
  }

  getGovBoardMembers(type) {
    const style = {
      maxHeight : '245px'
    }
    let govBoardMembersList = govboardmembers.map(member => {
      if( member.category === type ) {
        return (
          <Grid.Column width={5} key={member.id} className='padding-tb-10' textAlign='center' stretched>
            <Reveal animated='move'>
              <Reveal.Content visible className='k-fluid bg-color-grey-2'>
                <Image src={member.img} fluid style={style}/>
                <Container className="about-title-container" fluid>
                  <span><strong>{member.name}</strong></span><br />
                  <span>{member.position}</span>
                </Container>
              </Reveal.Content>
              <Reveal.Content hidden className="k-height-100pc bg-color-grey-1">
                <Container className="about-hidden-info" fluid>
                  <a href={member.mailto} className="font-size-22">
                    <Icon name='mail' /> {member.email}
                  </a>
                  <br />
                  { member.phone ?
                    ( <a href="" className="font-size-22">
                      <Icon name='phone' /> {member.phone}
                      </a>
                    )
                    : null
                  }
                </Container>
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        );
      }
      return null;
    });
    return govBoardMembersList
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

  infoMissionStatement() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <Segment className='kblue'>
            <h2>Mission Statement</h2>
            <div>{this.state.missionStatement}</div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoPurpose() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <Segment className='kblue'>
            <h2>PURPOSE</h2>
            <div>
              {this.state.frcPurposeIntro}
              <br /><br />
              {this.state.frcPurpose}
              <br /><br />
              {this.state.kzscPurpose}
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoPsa() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <Segment className='kblue'>
            <h3>Public Service Announcements</h3>
            <div>{this.state.psaInto}</div>
            <br />
            <Button animated='fade' secondary>
              <Button.Content visible>Learn more about PSA&rsquo;s</Button.Content>
              <Button.Content hidden>
                Learn more about PSA&rsquo;s
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoGetInTouch() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <Segment className='kblue'>
            <h3>Get In Touch With Us</h3>
          </Segment>
          <Segment className='kblue'>
            <h4>CALL US</h4>
            <div>
              You can reach the air room and the current DJ at (831) 459-4036.
              Please call the lobby line for any questions about the station or
              upcoming events at (831) 459-2811.
            </div>
            <br />
          </Segment>
          <Segment className='kblue'>
            <h4>MUSIC SUBMISSIONS</h4>
            <div>
              Please send all packages to the correct Music Director listed
              below, care of: KZSC Radio, UC Santa Cruz, 1156 High St., Santa
              Cruz, CA 95064.
            </div>
            <br />
          </Segment>
          <Segment className='kblue'>
            <h4>MUSIC QUESTIONS</h4>
            <div>
              Email a specific Music Director below.
              Charting for CMJ is typically done Monday afternoons.
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  infoGetMusicDirectors() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <h3 className="centered-block">STATION MUSIC DIRECTORS</h3>
        </Grid.Column>
        {this.getGovBoardMembers("music")}
      </Grid.Row>
    )
  }

  infoGetGovMembers() {
    return (
      <Grid.Row>
        <Grid.Column computer='12' tablet='14' mobile='16'>
          <h3 className="centered-block">OTHER KZSC STAFF / NON-MUSIC NEEDS</h3>
        </Grid.Column>
        {this.getGovBoardMembers("other")}
      </Grid.Row>
    )
  }

  render(){

    return(
      <div className="About">
        <Grid centered padded>

          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/>

          {this.state.activeMenuItem === 'about' ? this.infoMissionStatement() : null }
          {this.state.activeMenuItem === 'about' ? this.infoPurpose() : null }
          {this.state.activeMenuItem === 'psa' ? this.infoPsa() : null }
          {this.state.activeMenuItem === 'contact' ? this.infoGetInTouch() : null }
          {this.state.activeMenuItem === 'contact' ? this.infoGetMusicDirectors() : null }
          {this.state.activeMenuItem === 'contact' ? this.infoGetGovMembers() : null }

          <Grid.Row>
            <Grid.Column computer='12' tablet='14' mobile='16'>
              <Segment className='kblue'>
                <h3>SEND US A MESSAGE</h3>
                <p>
                  We would love to hear from you! Please fill out this form and we
                  will get in touch with you shortly. Please note that this form
                  goes directly to the KZSC Station Manager.
                </p>

                <Form>
                  <Form.Group widths='equal'>
                    <Form.Field label='First Name' control='input' placeholder='First name' />
                    <Form.Field label='Last Name' control='input' placeholder='Last Name' />
                  </Form.Group>
                  <Form.Field label='Email' control='input' placeholder='Email' />
                  <Form.Field control={Select} label='Regarding'
                   options={this.state.regardingOptions} placeholder='Regarding' />
                  <Form.Field control={TextArea} label='Comments' placeholder='Comments' />
                  <Form.Button>Submit</Form.Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default About;
