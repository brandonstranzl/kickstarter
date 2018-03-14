import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink} from 'react-router-dom'
import {Grid} from 'react-bootstrap'

import TopNav from './TopNav'
import Dashboard from './Dashboard'
import Dialog from './Dialog'
import LoginForm from './LoginForm'
import SignUpForm from './LoginForm'
import Demos from './Demos'
import Categories from './Categories'

const App = (props) => (
  <div>
    <TopNav />
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/demos" component={Demos} />
        <Route path="/categories" component={Categories} />
        <Route path="/events" component={Categories} />

      </Switch>
    </Grid>
  </div>
)


export default App;
