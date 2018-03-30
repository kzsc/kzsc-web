/*
 * src/App.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {  } from 'semantic-ui-react'
import axios from 'axios';

// import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Listen from './components/Listen/Listen'
import Donate from './components/Donate/Donate'
import Blogs from './components/Blogs/Blogs'
import Schedule from './components/Schedule/Schedule'
import Studio from './components/Studio/Studio'
import Concert from './components/Concert/Concert'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Underwriting from './components/Underwriting/Underwriting'
import UnderwritingProduct from './components/Underwriting/UnderwritingProduct'
import TestBackend from './components/TestBackend'
import Slideshow from './components/Slideshow/Slideshow'
import BlogDetail from './components/BlogDetail/BlogDetail'
import Title from './components/Title/Title'
import TopMenuBar from './components/TopMenuBar/TopMenuBar'

class App extends Component {

  constructor(){
    super();
    this.state = {
      navBarVisible: false,
      domain: "https://www.kzsc.org/",
      blogCategories: [],
      blogPosts: [],
      count: 15,
      requestStringState: 'get_recent_posts/?',
      numberPostsToLoad: 15,
      blogsPostsLoading: false,
      blogsButtonLoading: false,
      homeRequestsLoaded: 0,
      homeRecentPosts: [],
      homeMusicChartsPosts: [],
      homeEventsPosts: [],
      homeInterviewsPosts: [],
      homeFeaturedContent: [],
      homeFeaturedContent2: [],
      currentShowData: { ShowUsers: [] },
      socialMediaLinks: [
        {
          id: 'facebook', link: 'https://www.facebook.com/kzscradio', icon: 'facebook square',
        },
        {
          id: 'twitter', link: 'https://twitter.com/kzsc', icon: 'twitter square',
        },
        {
          id: 'instagram', link: 'http://instagram.com/kzsc', icon: 'instagram',
        },
        {
          id: 'googleplus', link: 'https://plus.google.com/117475604967899823150/posts', icon: 'google plus square',
        },
        {
          id: 'youtube', link: 'http://www.youtube.com/user/kzscfm/videos', icon: 'youtube square',
        },
        {
          id: 'soundcloud', link: 'https://soundcloud.com/kzsc/', icon: 'soundcloud',
        },
        {
          id: 'feedburner', link: 'http://feeds.feedburner.com/kzsc', icon: "feed"
        },
        {
          id: "mail", link: "/about", icon: "mail"
        }
      ]
    }
  }

  kzscApiGetCategoryList(request) {
    let postCategoryUrl = this.state.domain + 'api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const blogCategories = res.data.categories.map(category => {
        return ({ id: category.id, title: category.title });
      });
      this.setState({ blogCategories });
    });
  }

  kzscApiGetRequest(request, stateVar) {
    let postCategoryUrl = this.state.domain + 'api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const holdData = res.data.posts.map(obj => obj)
      this.updateBlogPosts(holdData, res.data.count_total)
      this.setState({ blogsButtonLoading: false, blogsPostsLoading: false })
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  kzscApiGet4FromCategory(request, stateVar) {
    let postCategoryUrl = this.state.domain + 'api/' + request;
    axios.get(postCategoryUrl).then(res => {
      const holdData = res.data.posts.map(obj => obj);
      this.setState({ [stateVar]: holdData, homeRequestsLoaded: this.state.homeRequestsLoaded + 1 });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  kzscApiGetPostById(id, stateVar) {
    let postUrl = this.state.domain + 'api/get_post/?post_id=' + id;
    axios.get(postUrl).then(res => {
      const holdData = [res.data.post];
      this.setState({ [stateVar]: holdData });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  trueBlogsPostsLoading() {
    this.setState({ blogsPostsLoading: true });
  }

  trueBlogsButtonLoading() {
    this.setState({ blogsButtonLoading: true });
  }

  getCurrentShowInfo() {
    axios.get('http://localhost:3001/currentShowInfo').then(res => {
      let data = res.data
      this.setState({ currentShowData: data })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentWillMount(){
    this.kzscApiGetCategoryList('get_category_index');
    let requestString = this.state.requestStringState + 'count=' + this.state.numberPostsToLoad;
    this.kzscApiGetRequest(requestString, 'blogPosts');
    this.kzscApiGetPostById('38048', 'homeFeaturedContent');
    this.kzscApiGetPostById('36472', 'homeFeaturedContent2');
    this.kzscApiGet4FromCategory('get_recent_posts/?count=4', 'homeRecentPosts');
    this.kzscApiGet4FromCategory('get_category_posts/?id=5&count=1', 'homeMusicChartsPosts');
    this.kzscApiGet4FromCategory('get_category_posts/?id=15&count=1', 'homeEventsPosts');
    this.kzscApiGet4FromCategory('get_category_posts/?id=17&count=1', 'homeInterviewsPosts');
  }

  componentDidMount() {
    this.updateCurrentShowData = setInterval(
      () => this.getCurrentShowInfo(), 120000
    )
  }

  componentWillUnmount() {
    clearInterval(this.updateCurrentShowData);
  }

  toggleVisibilityNavBar() {
    this.setState({ navBarVisible: !this.state.navBarVisible });
  }

  hideVisibilityNavBar() {
    this.setState({ navBarVisible: false });
  }

  scrollToWindowTop() {
    window.scrollTo(0, 0)
  }

  updateActiveNavItem(newActiveItem) {
    this.setState({
      activeNavItem: newActiveItem
    });
    window.scrollTo(0, 0)
  }

  toDateString(date) {
    let dateB = new Date(date);
    let month = dateB.getMonth() + 1;
    let monthString;
    switch (month) {
      case 1:
        monthString = 'January'; break;
      case 2:
        monthString = 'February'; break;
      case 3:
        monthString = 'March'; break;
      case 4:
        monthString = 'April'; break;
      case 5:
        monthString = 'May'; break;
      case 6:
        monthString = 'June'; break;
      case 7:
        monthString = 'July'; break;
      case 8:
        monthString = 'August'; break;
      case 9:
        monthString = 'September'; break;
      case 10:
        monthString = 'October'; break;
      case 11:
        monthString = 'November'; break;
      case 12:
        monthString = 'December'; break;
      default:
        monthString = month;
    }
    let fullDate = monthString + ' ' + dateB.getDate() + ', ' + dateB.getFullYear();
    return fullDate
  }

  updateBlogPosts(newPosts, countTotal) {
    if( typeof(countTotal) === "number" ) {
      this.setState({ count: countTotal })
    }
    this.setState({ blogPosts: newPosts })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar activeItem={this.activeNavMenuItem}
            onActiveNavItemChange={this.updateActiveNavItem.bind(this)}
            toggleVisibility={this.toggleVisibilityNavBar.bind(this)}
            hideVisibility={this.hideVisibilityNavBar.bind(this)}
            navBarVisible={this.state.navBarVisible}
            currentShow={this.state.currentShowData} />
          <Title />
          <TopMenuBar onActiveNavItemChange={this.updateActiveNavItem.bind(this)} />
          <div className="k-container margin-t-20" onClick={this.hideVisibilityNavBar.bind(this)}>
            <Route exact path='/home' render={() =>
              <Home convertDate={this.toDateString.bind(this)}
                    requestsLoaded={this.state.homeRequestsLoaded}
                    recentPosts={this.state.homeRecentPosts}
                    musicChartsPosts={this.state.homeMusicChartsPosts}
                    eventsPosts={this.state.homeEventsPosts}
                    interviewsPosts={this.state.homeInterviewsPosts}
                    featuredContent={this.state.homeFeaturedContent}
                    featuredContent2={this.state.homeFeaturedContent2}
                    scrollToTop={this.scrollToWindowTop}
                    socialMediaLinks={this.state.socialMediaLinks} />
            } />
            <Route exact path='/' render={() =>
              <Home convertDate={this.toDateString.bind(this)}
                    requestsLoaded={this.state.homeRequestsLoaded}
                    recentPosts={this.state.homeRecentPosts}
                    musicChartsPosts={this.state.homeMusicChartsPosts}
                    eventsPosts={this.state.homeEventsPosts}
                    interviewsPosts={this.state.homeInterviewsPosts}
                    featuredContent={this.state.homeFeaturedContent}
                    featuredContent2={this.state.homeFeaturedContent2}
                    scrollToTop={this.scrollToWindowTop}
                    socialMediaLinks={this.state.socialMediaLinks} />
            } />
            <Route path='/listen' render={() => <Listen /> } />
            <Route path='/donate' render={() => <Donate /> } />
            <Route path='/blogs' render={() =>
              <Blogs convertDate={this.toDateString.bind(this)}
                     blogCategories={this.state.blogCategories}
                     blogPosts={this.state.blogPosts}
                     kzscApiGetRequest={this.kzscApiGetRequest.bind(this)}
                     postsLoading={this.state.blogsPostsLoading}
                     buttonLoading={this.state.blogsButtonLoading}
                     truePostsLoading={this.trueBlogsPostsLoading.bind(this)}
                     trueButtonLoading={this.trueBlogsButtonLoading.bind(this)}
                     domain={this.state.domain}
                     numberPostsToLoad={this.state.numberPostsToLoad}
                     count={this.state.count}
              />
            } />
            <Route path='/schedule' render={() => <Schedule /> } />
            <Route path='/studio' render={() => <Studio convertDate={this.toDateString.bind(this)} /> }/>
            <Route path='/concert' render={() => <Concert /> } />
            <Route path='/about' render={() => <About /> } />
            <Route path='/underwriting' render={() => <Underwriting /> } />
            <Route path='/underwritingproduct' render={() => <UnderwritingProduct /> } />
            <Route path='/testbackend' render={() =>  <TestBackend /> } />
            <Route path='/slideshow' render={() =>  <Slideshow /> } />
            <Route path='/blogdetail/:id' component={BlogDetail} />

            <Footer socialMediaLinks={this.state.socialMediaLinks}
                    scrollToTop={this.scrollToWindowTop}
                    recentPosts={this.state.homeRecentPosts} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
