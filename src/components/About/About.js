import React, { Component } from 'react';
import { Grid, Button, Icon, Image, Form,
         Select, TextArea, Segment, Divider,
         Dimmer, Container } from 'semantic-ui-react'
import uuid from 'uuid';

class About extends Component{

  constructor(){
    super();
    this.state = {
      missionStatement: "",
      frcPurposeIntro: "",
      frcPurpose: "",
      kzscPurpose: "",
      psaInto: "",
      govBoardMembers: [],
      regardingOptions: [
        { key: 'ms', text: 'Music Submission', value: 'musicsubmission' },
        { key: 'pr', text: 'Programming', value: 'programming' },
        { key: 'pl', text: 'Pledging/Pledge Shop', value: 'pledgingpledgeshop' },
        { key: 'st', text: 'Streaming/KZSC Website', value: 'streamingkzscwebsite' }
      ]
    }
  }

  getMissionStatement() {
    this.setState({
      missionStatement:
      "KZSC is a non-commercial, educational public radio station licensed by "
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
    + "outside of the station (refer to FCC policies and the UCSC Rule book.)"
    });
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

  getPsaText() {
    this.setState ({
      psaInto: "Public Service Announcements (PSAs) can help get the word out "
    + "about your event! The airing of Public Service Announcements is essential "
    + "to KZSC’s mission to serve and inform the public. KZSC takes seriously "
    + "its role to assist non-profit organizations who receive little exposure "
    + "through commercial and corporate media sources."
    });
  }

  getGovBoardStaff(){
    this.setState({govBoardMembers: [
      {
        id: uuid.v4(),
        name: 'Parker Kaye',
        position: 'Music / Rock Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Neroli Devaney',
        position: 'Hip Hop Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Kavya Aswadhati',
        position: 'Jazz & Blues Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Melissa Cabrera',
        position: 'Loud Rock Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Shayan Vandani',
        position: 'Electronic Music Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Rebecca Mu',
        position: 'World Music Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'music',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Morgan Corona',
        position: 'Station Manager',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Keith Rozendal',
        position: 'Broadcast Advisor',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Zach Holbrook',
        position: 'Volunteer Coordinator',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Jasmine Stade',
        position: 'Promotions Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Kavya Aswadhati',
        position: 'Talk and News Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Lani Bandhauer',
        position: 'Member Services Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Eve Suva',
        position: 'Training Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Program Review Committee',
        position: 'Internal Quality Panel',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Bennett Williamson',
        position: 'Digital Librarian',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Duncan Ober',
        position: 'Production Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Han Ngo',
        position: 'Business Manager',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Dustin Choto',
        position: 'New Media Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Rocko Bauman',
        position: 'Design Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Jane Verlaine',
        position: 'Program Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Eric Partika',
        position: 'Physical Librarian',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Dylan Fabris',
        position: 'Student Media Rep',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Shanee Dinay',
        position: 'Web Team Rep',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Maelin Rose',
        position: 'Alumni Coordinator',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      },
      {
        id: uuid.v4(),
        name: 'Riz Aliga',
        position: 'Sports Director',
        email: 'rock@kzsc.org',
        mailto: 'mailto:rock@kzsc.org',
        category: 'other',
        dimmerActive: false
      }
    ]});
  }

  componentWillMount() {
    this.getMissionStatement();
    this.getPurpose();
    this.getPsaText();
    this.getGovBoardStaff();
  }

  handleShow(id) {
    var cloneGovBoardMembers = JSON.parse(JSON.stringify(this.state)).govBoardMembers;
		for(var i = 0; i < cloneGovBoardMembers.length; i++) {
      if( cloneGovBoardMembers[i].id === id ) {
        cloneGovBoardMembers[i].dimmerActive = true;
      }
    }
		this.setState({
			govBoardMembers: cloneGovBoardMembers
    });
  }

  handleHide(id) {
    var cloneGovBoardMembers = JSON.parse(JSON.stringify(this.state)).govBoardMembers;
		for(var i = 0; i < cloneGovBoardMembers.length; i++) {
      if( cloneGovBoardMembers[i].id === id ) {
        cloneGovBoardMembers[i].dimmerActive = false;
      }
    }
		this.setState({
			govBoardMembers: cloneGovBoardMembers
    });
  }

  render(){

    let govBoardMusicDirectors;
    govBoardMusicDirectors = this.state.govBoardMembers.map(member => {
      if( member.category === "music" ) {

        var styleDetails = {
          backgroundImage: 'url(' + 'https://react.semantic-ui.com/assets/images/wireframe/image.png' + ')'
        };
        return (
          <Grid.Column width={5} key={member.id} className='padding-tb-10' textAlign='center'>
            <Dimmer.Dimmable as={Image} dimmed={member.dimmerActive}
            onMouseEnter={this.handleShow.bind(this, member.id)}
            onMouseLeave={this.handleHide.bind(this, member.id)}>
              <Dimmer active={member.dimmerActive}>
                <h2>
                  <a href={member.mailto}>
                    <Icon name='mail' /><br />
                    {member.email}
                  </a>
                </h2>
              </Dimmer>


              <Container className="height-286" style={styleDetails} fluid>
                <span><strong>{member.name}</strong></span><br />
                <span>{member.position}</span>
              </Container>
            </Dimmer.Dimmable>
          </Grid.Column>
        );
      }
      return null;
    });

    let govBoardOtherStaff;
    govBoardOtherStaff = this.state.govBoardMembers.map(member => {
      if( member.category === "other" ) {
        return (
          <Grid.Column width={5} key={member.id} className='padding-tb-10' textAlign='center'>
            <Dimmer.Dimmable as={Image} dimmed={member.dimmerActive}
            onMouseEnter={this.handleShow.bind(this, member.id)}
            onMouseLeave={this.handleHide.bind(this, member.id)}>
              <Dimmer active={member.dimmerActive}>
                <h2>
                  <a href={member.mailto}>
                    <Icon name='mail' /><br />
                    {member.email}
                  </a>
                </h2>
              </Dimmer>

              <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <p>
                <span><strong>{member.name}</strong></span><br />
                <span>{member.position}</span>
              </p>
            </Dimmer.Dimmable>
          </Grid.Column>
        );
      }
      return null;
    });

    return(
      <div className="About">
        <Grid centered padded>

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
                <h2>Mission Statement</h2>
                <div>{this.state.missionStatement}</div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
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

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
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

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
                <h3>Get In Touch With Us</h3>
                <h4>CALL US</h4>
                <div>
                  You can reach the air room and the current DJ at (831) 459-4036.
                  Please call the lobby line for any questions about the station or
                  upcoming events at (831) 459-2811.
                </div>
                <br />
                <h4>MUSIC SUBMISSIONS</h4>
                <div>
                  Please send all packages to the correct Music Director listed
                  below, care of: KZSC Radio, UC Santa Cruz, 1156 High St., Santa
                  Cruz, CA 95064.
                </div>
                <br />
                <h4>MUSIC QUESTIONS</h4>
                <div>
                  Email a specific Music Director below.
                  Charting for CMJ is typically done Monday afternoons.
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <h3 className="centered-block">STATION MUSIC DIRECTORS</h3>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            {govBoardMusicDirectors}
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={15}>
              <h3 className="centered-block">OTHER KZSC STAFF / NON-MUSIC NEEDS</h3>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            {govBoardOtherStaff}
          </Grid.Row>

          <Divider hidden />

          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
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
