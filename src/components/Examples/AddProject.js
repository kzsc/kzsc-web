import React, { Component } from 'react'


class AddProject extends Component {

  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Dev', 'Mobile Dev']
  }

  handleSubmit() {
    if(this.refs.title.value === '') {
      alert('title is required');
    } else {
      this.setState({newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
    console.log(this.refs.title.value);
  }

  render() {

    // Map through categories to fill in the select field
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div className="AdProject">
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddProject;
