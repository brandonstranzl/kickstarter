import React, { Component } from 'react';
import DemosContainer from './DemosContainer'
import Login from './Login'
import Navbar from './TopNav'


class App extends Component {

  render() {
    return (
      <div>
      <Navbar />

        <header className="App-header">
          <h1 className="App-title">Kickstarter</h1>
        </header>
        <div>
        <DemosContainer />
        <Login />
        </div>

      </div>
      )
    };
}


export default App;
