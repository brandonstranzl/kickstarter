import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink} from 'react-router-dom'
import {Grid} from 'react-bootstrap'

import TopNav from './TopNav'
import Dashboard from './Dashboard'
import Dialog from './Dialog'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Demos from './Demos'
import Categories from './Categories'
import Events from './Events'
import Demo from './Demo'

const App = (props) => (
  <div>
    <TopNav />
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route exact path="/demos" component={Demos} />
        <Route path="/categories" component={Categories} />
        <Route path="/events" component={Events} />
        <Route path="/demos/:id" component={Demo} />
      </Switch>
    </Grid>
  </div>
)


export default App;
