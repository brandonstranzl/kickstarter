import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: []
    }
  }

componentDidMount() {
  fetch('http://localhost:3000/demos')
  .then(res => res.json())
  .then(demos => this.setState({ demos }))
}


  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Kickstarter</h1>
        </header>
        <div>
          { this.state.demos.map((val, idx) =>
            <ul>
            <li key={idx}>{val.name}</li>
            <li key={idx}>{val.live}</li>
            <li key={idx}>{val.description}</li>
            <li key={idx}>{val.fundingreq}</li>
            <li key={idx}>{val.votes}</li>

            </ul>
          )}
        </div>
      </div>
      )
    };
}


export default App;
