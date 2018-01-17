import React, { Component } from 'react'
import AddProject from './AddProject'
import Projects from './Projects'
import ProjectItem from './ProjectItem'

//installed npm install --save uuid

class Examples extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  // fires everytime the component is rerendered
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]})
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind{this}}/>
        <Projects />
      </div>
    );
  }
}

export default Examples
