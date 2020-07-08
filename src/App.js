import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : []
      // string : "Hi I am srpsatish!"
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.monsters.map(monsters => (
            <h1 key={monsters.id}>{monsters.name}</h1>
            ))
          }
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick= {() => this.setState({ string : "Hi I am Satish Singh!"})}>Change It.</button> */}
        </header>
      </div>
    );
  }
}

export default App;
