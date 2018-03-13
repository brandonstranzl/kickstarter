import React, { Component } from 'react';
import DemosContainer from './DemosContainer'
import TopNav from './TopNav'
import LoginForm from './LoginForm'


class App extends Component {

  render() {
    return (
      <div>
      <TopNav />

        <header className="App-header">
          <h1 className="App-title">Demo88</h1>
        </header>
        <div class="container">
        <DemosContainer />
        {" "}
        </div>
        <div class="container">
        <LoginForm />
        </div>

      </div>
      )
    };
}


export default App;
