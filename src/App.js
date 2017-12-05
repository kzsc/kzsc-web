import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home.js';
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
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
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
