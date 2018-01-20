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
import Psa from './components/Psa/Psa';

class App extends Component {

  constructor(){
    super();
    this.state = {
      navBarVisible: false
    }
  }

  componentWillMount(){
    this.setState({
      navBarVisible: false
    })
  }

  componentWillMount(){
    this.setState({
      navBarVisible: false
    })
  }

  handleClick = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }

  toggleVisibilityNavBar() {
    this.setState({ navBarVisible: !this.state.navBarVisible });
  }

  hideVisibilityNavBar() {
    this.setState({ navBarVisible: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar toggleVisibility={this.toggleVisibilityNavBar.bind(this)}
           hideVisibility={this.hideVisibilityNavBar.bind(this)} navBarVisible={this.state.navBarVisible}/>
          <Container className="margin-t-70" fluid onClick={this.hideVisibilityNavBar.bind(this)}>

            <Route exact path='/home' render={() => <Home /> } />
            <Route exact path='/' render={() => <Home /> } />
            <Route path='/listen' render={() => <Listen /> } />
            <Route path='/donate' render={() => <Donate /> } />
            <Route path='/blog' render={() => <Blog /> } />
            <Route path='/schedule' render={() => <Schedule /> } />
            <Route path='/studio' render={() => <Studio /> }/>
            <Route path='/concert' render={() => <Concert /> } />
            <Route path='/about' render={() => <About /> } />
            <Route path='/sponsor' render={() => <Sponsor /> } />
            <Route path='/testbackend' render={() =>  <TestBackend /> } />

            <br />

            <Footer/>

          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
