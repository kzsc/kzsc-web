/*
 * src/components/Footer/Footer.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Form, Segment, Icon, List, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import kzscI from '../../assets/images/kzsc.jpg'
import uuid from 'uuid';
import './Footer.css';

class Footer extends Component{

  constructor(){
    super();
    this.state = {
      FNAME: '',
      LNAME: '',
      EMAIL: '',
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
    }
  }

  handleChangeSubscribe = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmitSubscribe = () => this.setState({ FNAME: '', LNAME: '', EMAIL: '' })

  firstColumn() {
    const { FNAME, LNAME, EMAIL } = this.state

    let mcStyle = {
      "position": "absolute", "left": "-5000px"
    }
    return (
      <div className="footerColumnOne">
        <div className="footer-title">Join Our Mailing List</div>

        <div id="mc_embed_signup">
          <Form inverted onSubmit={this.handleSubmitSubscribe} action="https://kzsc.us1.list-manage.com/subscribe/post?u=9a675d0a0067e2707ffbb7ffb&amp;id=735dcc9562" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <Form.Input id="mce-FNAME" name="FNAME" label='First Name' placeholder='first name' value={FNAME} onChange={this.handleChangeSubscribe} required/>
            <Form.Input id="mce-LNAME" name="LNAME" label='Last Name' placeholder='last name' value={LNAME} onChange={this.handleChangeSubscribe} required />
            <Form.Input id="mce-EMAIL" name="EMAIL" label='Email Address' placeholder='email' value={EMAIL} onChange={this.handleChangeSubscribe} required />
            <div id="mce-responses" className="clear display-none">
              <div className="response display-none" id="mce-error-response"></div>
              <div className="response display-none" id="mce-success-response"></div>
            </div>
            <div style={mcStyle} aria-hidden="true">
              <input type="text" name="b_9a675d0a0067e2707ffbb7ffb_735dcc9562" tabIndex="-1" />
            </div>
            <Button type='submit' value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Submit</Button>
          </Form>
        </div>
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

        <div>
          <p>
            Air room and the Current DJ:<br />
            (831) 459-4036
          </p>

          <p>
            Lobby line for any questions:<br />
            (831) 459-2811
          </p>

          <p>
            KZSC Radio, UC Santa Cruz, <br />
            1156 High St., Santa Cruz, CA 95064
          </p>
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
        <Grid columns='equal' divided inverted padded>
          <Grid.Row color='grey'>
            <Grid.Column computer={4} tablet={4} mobile={8}>
              <Segment textAlign={'left'} color='grey' inverted >
                {this.firstColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={8}>
              <Segment textAlign={'left'} color='grey' inverted>
                {this.secondColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={8}>
              <Segment textAlign={'left'} color='grey' inverted>
                {this.thirdColumn()}
              </Segment>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={8}>
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
