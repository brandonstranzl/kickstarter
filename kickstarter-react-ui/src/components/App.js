import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink, withRouter} from 'react-router-dom'
import {Grid} from 'react-bootstrap'

import TopNav from './TopNav'
import LogoutModal from './LogoutModal'
import Dashboard from './Dashboard'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Demos from './Demos'
import Categories from './Categories'
import Events from './Events'
import Demo from './Demo'

// handleLogout = () => {
//   fetch(`http://localhost:3000:sessions/${this.props.match.params.id},
//   { method: DELETE }).then(response => response.json())
//   .catch(error => console.error('Error:', error))
//   .then(response => console.log('Success:', response));


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


export default withRouter(App);
