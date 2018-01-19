/*
 * src/components/Footer/Footer.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Form, Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';
import './Footer.css';

class Footer extends Component{

  constructor(){
    super();
    this.state = {
      pageLinks: [],
      contactLinks: []
    }
  }

  getPageInformation(){
    this.setState({
      pageLinks: [
        {
          id: uuid.v4(),
          link: 'donate',
          name: 'Donate'
        },
        {
          id: uuid.v4(),
          link: 'sponser',
          name: 'Business Underwriting'
        },
        {
          id: uuid.v4(),
          link: 'listen',
          name: 'Listen'
        },
        {
          id: uuid.v4(),
          link: 'blog',
          name: 'Blog'
        },
        {
          id: uuid.v4(),
          link: 'schedule',
          name: 'Schedule'
        },
        {
          id: uuid.v4(),
          link: 'studio',
          name: 'Studio'
        },
        {
          id: uuid.v4(),
          link: 'concert',
          name: 'Concert'
        },
        {
          id: uuid.v4(),
          link: 'about',
          name: 'About'
        }
      ],
      contactLinks: [
        {
          id: 'facebook',
          link: 'https://www.facebook.com/kzscradio',
          icon: 'facebook square',
        },
        {
          id: 'twitter',
          link: 'https://twitter.com/kzsc',
          icon: 'twitter square',
        },
        {
          id: 'instagram',
          link: 'http://instagram.com/kzsc',
          icon: 'instagram',
        },
        {
          id: 'googleplus',
          link: 'https://plus.google.com/117475604967899823150/posts',
          icon: 'google plus square',
        },
        {
          id: 'youtube',
          link: 'http://www.youtube.com/user/kzscfm/videos',
          icon: 'youtube square',
        }
      ]
    });
  }

  //

  //

  componentWillMount(){
    this.getPageInformation();
  }

  firstColumn() {
      return (
        <div className="footerColumnOne">
          <h3>Join Our Mailing List</h3>

          <Form inverted>
            <Form.Field label='Email' control='input' placeholder='Email' required/>
            <Form.Field label='First Name' control='input' placeholder='First name' required/>
            <Form.Field label='Last Name' control='input' placeholder='Last Name' required/>
            <Form.Button>Subscribe</Form.Button>
          </Form>
        </div>
      )
  }

  secondColumn() {
      return (
        <h3 className="footerColumnTwo">Top Products</h3>
      )
  }

  thirdColumn() {

    let pageLinks;
    pageLinks = this.state.pageLinks.map(page => {
      //console.log(project);
      return (
        <div key={page.id} className="footer-item-list">
          <NavLink to={page.link}>{page.name}</NavLink>
        </div>
      );
    });

    return (
      <div className="footerColumnThree">
        <h3>Support Us</h3>
        <div id="kzsc-footer-support" className="footer-list">
          {pageLinks}
        </div>
      </div>
    )
  }

  fourthColumn() {
    let contactLinks;
    contactLinks = this.state.contactLinks.map(contact => {
      //console.log(project);
      return (
        <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">
          <Icon name={contact.icon} size='big' link/>
        </a>
      );
    });

    return (
      <div id="kzsc-footer-contact" className="footerColumnFour">
        <h3>Contact Us</h3>

        <div>
          {contactLinks}
        </div>

        <div className="padding-tb-10">
          <h4>
            Air room and the Current DJ:<br />
            (831) 459-4036
          </h4>

           <h4>
            Lobby line for any questions:<br />
            (831) 459-2811.
           </h4>

           <h4>
            KZSC Radio, UC Santa Cruz, <br />
            1156 High St., Santa Cruz, CA 95064.
           </h4>
        </div>

      </div>
    )
  }

  render(){
      return(
          <div id="kzsc-footer" className="footer">
              <Grid columns='equal' divided inverted padded stackable>
                <Grid.Row color='black' textAlign='center'>
                  <Grid.Column>
                    <Segment textAlign={'left'} color='black' inverted >
                      {this.firstColumn()}
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment textAlign={'left'} color='black' inverted>
                      {this.secondColumn()}
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment textAlign={'left'} color='black' inverted>
                      {this.thirdColumn()}
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment textAlign={'left'} color='black' inverted>
                      {this.fourthColumn()}
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
          </div>
      );
  }
}

export default Footer
