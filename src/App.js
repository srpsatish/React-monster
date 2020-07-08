import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/Card-List/CardList';


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
        <CardList monsters= {this.state.monsters} />
      </div>
    );
  }
}

export default App;
