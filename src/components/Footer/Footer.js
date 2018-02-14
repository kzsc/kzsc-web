/*
 * src/components/Footer/Footer.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid, Form, Segment, Icon, List, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';
import './Footer.css';

class Footer extends Component{

  constructor(){
    super();
    this.state = {
      pageLinks: [],
      socialMediaLinks: [],
      productLinks: []
    }
  }

  getPageInformation(){
    this.setState({
      pageLinks: [
        {
          id: uuid.v4(),
          link: '/donate',
          name: 'Donate'
        },
        {
          id: uuid.v4(),
          link: '/underwriting',
          name: 'Business Underwriting'
        },
        {
          id: uuid.v4(),
          link: '/listen',
          name: 'Listen'
        },
        {
          id: uuid.v4(),
          link: '/blog',
          name: 'Blog'
        },
        {
          id: uuid.v4(),
          link: '/schedule',
          name: 'Schedule'
        },
        {
          id: uuid.v4(),
          link: '/studio',
          name: 'Studio'
        },
        {
          id: uuid.v4(),
          link: '/concert',
          name: 'Concert'
        },
        {
          id: uuid.v4(),
          link: '/about',
          name: 'About'
        }
      ],
      socialMediaLinks: [
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
      ],
      productLinks: [
        {
          id: uuid.v4(),
          header: 'Donate to KZSC',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2016/11/money-652560-400x400.jpg'
        },
        {
          id: uuid.v4(),
          header: "KZSC's canvas tote bag",
          description: 'Suggested Donation $50.00',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2016/10/totewebfront-e1476844178228-400x400.jpg'
        },
        {
          id: uuid.v4(),
          header: 'KZSC Studio Rental',
          imageSrc: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2011/01/radio-mic-120x120.jpg'
        },
        {
          id: uuid.v4(),
          header: 'Business Underwriting Sponsorship Packages',
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
    let productLinks;
    productLinks = this.state.productLinks.map(product => {
      if( product.description ) {
        return (
          <List.Item key={product.id}>
            <Image avatar src={product.imageSrc} />
            <List.Content>
              <List.Header as='a'>{product.header}</List.Header>
              <List.Description>{product.description}</List.Description>
            </List.Content>
          </List.Item>
        );
      } else {
        return (
          <List.Item key={product.id}>
            <Image avatar src={product.imageSrc} />
            <List.Content>
              <List.Header as='a'>{product.header}</List.Header>
            </List.Content>
          </List.Item>
        );
      }
    });

    return (
      <div className="footerColumnTwo">
        <h3>Popular Links</h3>

        <List divided relaxed inverted>
          {productLinks}
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
          <NavLink to={page.link} onClick={this.props.scrollToTop}>{page.name}</NavLink>
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
    let socialMediaLinksHtml;
    socialMediaLinksHtml = this.state.socialMediaLinks.map(contact => {
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
          {socialMediaLinksHtml}
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
          <Grid.Row color='grey' textAlign='center' >
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
        </Grid>
      </div>
    );
  }
}

export default Footer
