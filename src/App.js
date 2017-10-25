import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
      <Router>

        <div className="App">
          <NavBar/>
            <Route path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/listen' component ={Listen} />
            <Route path='/donate' component ={Donate} />
            <Route path='/schedule' component ={Schedule} />
            <Route path='/studio' component ={Studio} />
            <Route path='/concert' component ={Concert} />
            <Route path='/about' component ={About} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
