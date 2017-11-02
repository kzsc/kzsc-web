import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home.js';
import Listen from './components/Listen/Listen';
import Donate from './components/Donate/Donate';
import Schedule from './components/Schedule/Schedule';
import Studio from './components/Studio/Studio';
import Concert from './components/Concert/Concert';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
            <Route exact path='/home' render={() => <Home /> } />
            <Route path='/listen' render={() => <Listen /> } />
            <Route path='/donate' render={() => <Donate /> } />
            <Route path='/schedule' render={() => <Schedule /> } />
            <Route path='/studio' render={() => <Studio /> }/>
            <Route path='/concert' render={() => <Concert /> } />
            <Route path='/about' render={() => <About /> } />
          <Footer/> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
