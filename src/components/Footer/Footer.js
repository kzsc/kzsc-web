/*
 * src/components/Footer/Footer.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Form, Segment, Icon, List, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import kzscI from '../../assets/images/kzsc.jpg'
import uuid from 'uuid';
import './Footer.css';

class Footer extends Component{

  constructor(){
    super();
    this.state = { }
  }

  getPageInformation(){
    this.setState({
      pageLinks: [
        { id: uuid.v4(), link: '/underwriting', name: 'Business Underwriting' },
        { id: uuid.v4(), link: '/schedule', name: 'Program Schedule' },
        { id: uuid.v4(), link: '/studio', name: 'Studio Rental' },
        { id: uuid.v4(), link: '/concert', name: 'Concert Calendar' },
        { id: uuid.v4(), link: '/donate', name: 'Donate' },
        { id: uuid.v4(), link: '/listen', name: 'Listen' },
        { id: uuid.v4(), link: '/blog', name: 'Blog' },
        { id: uuid.v4(), link: '/about', name: 'About' }
      ],
      productLinks: [
        {
          id: uuid.v4(), header: 'Donate to KZSC',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2016/11/money-652560-400x400.jpg'
        },
        {
          id: uuid.v4(), header: "KZSC's canvas tote bag",
          description: 'Suggested Donation $50.00',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2016/10/totewebfront-e1476844178228-400x400.jpg'
        },
        {
          id: uuid.v4(), header: 'KZSC Studio Rental',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2011/01/radio-mic-120x120.jpg'
        },
        {
          id: uuid.v4(), header: 'Business Underwriting Sponsorship Packages',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2013/02/Shop-Small-120x120.jpeg'
        }
      ]
    });
  }

  componentWillMount(){
    this.getPageInformation();
  }

  firstColumn() {
    return (
      <div className="footerColumnOne">
        <div className="footer-title">Join Our Mailing List</div>

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
    let links = this.props.recentPosts.map(link => {
      if (!link.thumbnail) {
        link['thumbnail'] = kzscI
      }
      return (
        <List.Item key={link.id}>
          <Image floated='left' avatar src={link.thumbnail} />
          <a className="font-15" href={`/blogdetail/${link.id}`} dangerouslySetInnerHTML={{__html: link.title}}></a>
        </List.Item>
      );
    });

    return (
      <div className="footerColumnTwo">
          <div className="footer-title">Latest Posts</div>

        <List divided relaxed inverted>
          {links}
        </List>
      </div>
    )
  }

  thirdColumn() {

    let pageLinks;
    pageLinks = this.state.pageLinks.map(page => {
      //console.log(project);
      return (
        <div key={page.id} className="footer-item-list">
          <NavLink className="font-16" to={page.link} onClick={this.props.scrollToTop}>{page.name}</NavLink>
        </div>
      );
    });

    return (
      <div className="footerColumnThree">
        <div className="footer-title">Support Us</div>
        <div id="kzsc-footer-support" className="footer-list">
          {pageLinks}
        </div>
      </div>
    )
  }

  fourthColumn() {
    return (
      <div id="kzsc-footer-contact" className="footerColumnFour">
          <div className="footer-title">Contact Us</div>

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

  socialMediaSection() {
    let socialMediaLinksHtml;
    socialMediaLinksHtml = this.props.socialMediaLinks.map(contact => {
      //console.log(project);
      return (
        <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">
          <Icon name={contact.icon} size='big' link/>
        </a>
      );
    });

    return socialMediaLinksHtml;
  }

  render(){
    return(
      <div id="kzsc-footer" className="footer">
        <Grid columns='equal' divided inverted padded stackable>
          <Grid.Row color='grey'>
            <Grid.Column>
              <Segment textAlign={'left'} color='grey' inverted >
                {this.firstColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign={'left'} color='grey' inverted>
                {this.secondColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign={'left'} color='grey' inverted>
                {this.thirdColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign={'left'} color='grey' inverted>
                {this.fourthColumn()}
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row color='grey' textAlign='center'>
            <Grid.Column width={16}>
              <Segment color='grey' inverted>
                {this.socialMediaSection()}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              © 2018 KZSC Santa Cruz. All Rights Reserved
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Footer
