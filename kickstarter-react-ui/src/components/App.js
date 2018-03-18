import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink, withRouter} from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import Cookies from 'universal-cookie'

import TopNav from './TopNav'
import LogoutModal from './LogoutModal'
import Dashboard from './Dashboard'
import LoginModal from './LoginModal'
import SignUpForm from './SignUpForm'
import Demos from './Demos'
import Demo from './Demo'

const cookies = new Cookies();

const App = (props) => (
  <div>
    <TopNav user={cookies.get('userCookie')}/>
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/SignUpForm" component={SignUpForm}/>
        <Route exact path="/demos" component={Demos} />
        <Route path="/demos/:id" component={Demo} />
      </Switch>
    </Grid>
  </div>
)


export default withRouter(App);
