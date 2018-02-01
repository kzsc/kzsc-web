/*
 * src/App.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Listen from './components/Listen/Listen';
import Donate from './components/Donate/Donate';
import Blog from './components/Blog/Blog';
import Schedule from './components/Schedule/Schedule';
import Studio from './components/Studio/Studio';
import Concert from './components/Concert/Concert';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Sponsor from './components/Sponsor/Sponsor';
import TestBackend from './components/TestBackend';
import Slideshow from './components/Slideshow/Slideshow';

class App extends Component {

  constructor(){
    super();
    this.state = {
      navBarVisible: false,
    }
  }

  componentWillMount(){
    this.setState({
      navBarVisible: false
    });
  }

  toggleVisibilityNavBar() {
    this.setState({ navBarVisible: !this.state.navBarVisible });
  }

  hideVisibilityNavBar() {
    this.setState({ navBarVisible: false });
  }

  updateActiveNavItem(newActiveItem) {
    this.setState({
      activeNavItem: newActiveItem
    });
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

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar activeItem={this.activeNavMenuItem} onActiveNavItemChange={this.updateActiveNavItem.bind(this)}
           toggleVisibility={this.toggleVisibilityNavBar.bind(this)}
           hideVisibility={this.hideVisibilityNavBar.bind(this)} navBarVisible={this.state.navBarVisible}/>
          <Container className="margin-t-70" fluid onClick={this.hideVisibilityNavBar.bind(this)}>

            <Route exact path='/home' render={() => <Home convertDate={this.toDateString.bind(this)} /> } />
            <Route exact path='/' render={() => <Home convertDate={this.toDateString.bind(this)} /> } />
            <Route path='/listen' render={() => <Listen /> } />
            <Route path='/donate' render={() => <Donate /> } />
            <Route path='/blog' render={() => <Blog  convertDate={this.toDateString.bind(this)} /> } />
            <Route path='/schedule' render={() => <Schedule /> } />
            <Route path='/studio' render={() => <Studio convertDate={this.toDateString.bind(this)} /> }/>
            <Route path='/concert' render={() => <Concert /> } />
            <Route path='/about' render={() => <About /> } />
            <Route path='/sponsor' render={() => <Sponsor /> } />
            <Route path='/testbackend' render={() =>  <TestBackend /> } />
            <Route path='/slideshow' render={() =>  <Slideshow /> } />

            <br />

            <Footer/>

          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
