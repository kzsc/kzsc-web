/*
 * src/components/Home/Home.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Segment, Icon, Button } from 'semantic-ui-react';
import Tile from '../Tile/Tile';
import kzscI from '../../assets/images/kzsc.jpg';
import './Home.css';
import RightSideBar from '../RightSideBar/RightSideBar';

class Home extends Component{

  constructor(props){
    super(props);
    this.state = { }
  }

  toDateString(date){
    return this.props.convertDate(date);
  }

  componentWillMount() {
    let todayDate = this.toDateString( new Date() );
    this.setState({ todayDate: todayDate })
  }

  getBlogContentColumn(item, size, c, t) {
    let blogTiles = item.map(post => {
      let categories = post.categories.map(c => {
        return ' ' + c.title;
      });
      let dateWithSlashes = post.date.replace(/-/g, '/');
      let description = this.toDateString(dateWithSlashes) + ' / in' + categories + ' / by ' + post.author.name;
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Grid.Column key={post.id} computer={c} tablet={t}>
          <Tile image={post.thumbnail_images.full.url} title={post.title}
          type={size} desc={description} url={`/blogdetail/${post.id}`}/>
        </Grid.Column>
       );
    });
    return blogTiles;
  }

  getBlogContent(item, size) {
    let blogTiles = item.map(post => {
      let categories = post.categories.map(c => {
        return ' ' + c.title;
      });
      let dateWithSlashes = post.date.replace(/-/g, '/');
      let description = this.toDateString(dateWithSlashes) + ' / in' + categories + ' / by ' + post.author.name;
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Tile key={post.id} image={post.thumbnail_images.full.url} title={post.title}
        type={size} desc={description} url={`/blogdetail/${post.id}`}/>
       );
    });
    return blogTiles;
  }

  getSocialMediaLinks() {
    let socialMediaLinksHtml;
    socialMediaLinksHtml = this.props.socialMediaLinks.map(contact => {
      //console.log(project);
      return (
        <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">
          <Icon color='blue' name={contact.icon} size='big' link/>
        </a>
      );
    });
    return socialMediaLinksHtml
  }

  render(){
    let likeFacebookStyle = {
      border: "none", overflow: "hidden", width:"100%", height: "28px"
    }
    return(
      <div className="Home">
        <Grid stackable centered padded>

          <Grid.Row>
            <Grid.Column computer={12} tablet={12}>

              {/* Left Column BEGIN */}
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={16}>
                    {this.getBlogContent(this.props.featuredContent, 'big')}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns='equal'>
                  {this.getBlogContentColumn(this.props.recentPosts, 'small', '8', '8')}
                </Grid.Row>
              </Grid>
              {/* Left Column END */}

            </Grid.Column>
            <Grid.Column width={4} stretched>
              <RightSideBar />
            </Grid.Column>
          </Grid.Row>

        </Grid>

        <Grid stackable centered padded>

          <Grid.Row>
            <Grid.Column width={16} className="k-divider">
              <div className='k-divider-title'>
                <div><span>Follow Us</span></div>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column stretched>
              <Segment className='kblue' tertiary>
                <h3>{'Follow us on Social Media'.toUpperCase()}</h3>
                {this.getSocialMediaLinks()}
              </Segment>
            </Grid.Column>

            <Grid.Column stretched>
              <Segment className='kblue' secondary>
                <h3>RADIO FREE AMERICA ARCHIVES</h3>
                <Button color='blue' as='a' href='http://www.radiofreeamerica.com/station/kzsc'>
                  Stream past KZSC shows on demand
                </Button>
              </Segment>
            </Grid.Column>

            <Grid.Column stretched>
              <Segment className='kblue' tertiary>
                <h3>Like Us On Facebook</h3>
                <div>
                  <iframe title='lof' src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fkzscradio&amp;send=false&amp;layout=standard&amp;width=300&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=80" scrolling="no" frameBorder="0" style={likeFacebookStyle} allowTransparency="true"></iframe>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>
              <div className="text-align-center k-divider">
                <NavLink to='/blogs' onClick={this.props.scrollToTop}>
                  <div className='color-black-default'>
                    <span className="third-container-title">Events</span>
                  </div>
                </NavLink>
              </div>
              {this.getBlogContent(this.props.eventsPosts, 'small')}
            </Grid.Column>

            <Grid.Column>
              <div className="text-align-center k-divider">
                <NavLink to='/blogs' onClick={this.props.scrollToTop}>
                  <div className='color-black-default'>
                    <span className="third-container-title">Interviews</span>
                  </div>
                </NavLink>
              </div>
              {this.getBlogContent(this.props.interviewsPosts, 'small')}
            </Grid.Column>

            <Grid.Column>
              <div className="text-align-center k-divider">
                <NavLink to='/blogs' onClick={this.props.scrollToTop}>
                  <div className='color-black-default'>
                    <span className="third-container-title">Music Charts</span>
                  </div>
                </NavLink>
              </div>
              {this.getBlogContent(this.props.musicChartsPosts, 'small')}
            </Grid.Column>

          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Home;
