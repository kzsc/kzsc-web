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
import Slideshow from '../Slideshow/Slideshow';
import kzscI from '../../assets/images/kzsc.jpg'
import './Home.css';
import TopMenuBar from '../TopMenuBar/TopMenuBar'

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      activeMenuItem: 'none',
      underwritingImages: [
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_9716-1-300x150.jpg' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/SCNFC-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/bsc_logo_stacked-2-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/kelly-wachs-logo-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/BFCUlogoblue_1000_wTag-300x150.jpeg' }
      ],
      showImages: [
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/34c49bf5b1114a1204002f050ce534d1-300x300.jpeg', link: 'http://www.radiofreeamerica.com/show/backroads-9-kzsc-santa-cruz' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/KZSC-Edible-Ad-1-e1506644994993-300x300.png', link: 'http://kzsc.fm/listen'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/02/RS-2-300x300.png', link: 'http://www.radiofreeamerica.com/show/radio-spectacular-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/02/RS-2-300x300.png', link: ''  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/image_01-1-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/santa-cruz-laboratory-for-dance-based-sciences-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/af44f83b9015b960e092eb600eba490e-300x300.jpeg', link: 'http://www.radiofreeamerica.com/show/test-of-time-2-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/af44f83b9015b960e092eb600eba490e-300x300.jpeg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/VocesCriticas-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/voces-criticas-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/¡Que-te-Importa-300x300.png', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/VocesCriticas-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/image_01-300x300.jpg', link: ''  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/IMG_0227-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/cr8-diggers-anonymous-2-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/OldColdRiver-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/IMG_0227-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-26-at-3.42.43-PM-300x300.png', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/OldColdRiver-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/unnamed-1-300x300.png', link: 'http://www.radiofreeamerica.com/show/super-8-1-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_20170815_223711_238-e1508213755992-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/wiki-wiki-wednesday-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/Purgatory-300x300.png', link: 'http://www.radiofreeamerica.com/show/purgatory-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/Living-in-the-80s-logo-300x300.jpg', link: 'http://kzsc.fm/80s'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/unnamed-e1506646563979-300x300.png', link: 'http://www.radiofreeamerica.com/show/queen-beats-kzsc-santa-cruz'  }
      ]
    }
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

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
        return c.title + ' ';
      });
      let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
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
          type={size} desc={description} url={post.url}/>
        </Grid.Column>
       );
    });
    return blogTiles;
  }

  getBlogContent(item, size) {
    let blogTiles = item.map(post => {
      let categories = post.categories.map(c => {
        return c.title + ' ';
      });
      let description = this.toDateString(post.date) + ' / in ' + categories + '/ by ' + post.author.name;
      if (!post.thumbnail_images) {
        post['thumbnail_images'] = {
          full: {
            url: kzscI
          }
        }
      }
      return (
        <Tile key={post.id} image={post.thumbnail_images.full.url} title={post.title}
        type={size} desc={description} url={post.url}/>
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
      border: "none", overflow: "hidden", width:"100%", height: "20px"
    }
    return(
      <div className="Home">
        <Grid stackable centered padded>

          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={[{ name: 'date', title: this.state.todayDate }]}/>

          <Grid.Row>
            <Grid.Column computer={11} tablet={11}>
              {this.getBlogContent(this.props.featuredContent, 'big')}
            </Grid.Column>
            <Grid.Column width={5} stretched>
              <Segment loading={this.state.requestsLoaded < 4} textAlign='center'>
                <h3>Support Local Businesses</h3>
                <Slideshow images={this.state.underwritingImages}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <div className="title2-hr">
                <NavLink to='/blogs' onClick={this.props.scrollToTop}>Latest From the Blog</NavLink>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal'>
            {this.getBlogContentColumn(this.props.recentPosts, 'small', '4', '8')}
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

          <Grid.Row>
            <Grid.Column width={16}>
              <div className="title2-hr">
                <NavLink to='/blogs' onClick={this.props.scrollToTop}>Events</NavLink>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal'>
            {this.getBlogContentColumn(this.props.eventsPosts, 'small', '4', '8')}
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column stretched>
              <Segment>
                Featured Shows
                <Slideshow images={this.state.showImages}/>
              </Segment>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Home;
