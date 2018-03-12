import React, { Component } from 'react';
import './App.css';
import DemosContainer from './components/DemosContainer'

class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Kickstarter</h1>
        </header>
        <div>
        <DemosContainer />
        </div>

      </div>
      )
    };
}


export default App;
