import React, {Component} from 'react';

class TestBackend extends Component{
    state = {users: []}
    
    componentDidMount() {
        fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));

        fetch('/spinitron');
      }
    
      render() {
        return (
          <div className="App">
            <h1>Users</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </div>
        );
      }
}

export default TestBackend;