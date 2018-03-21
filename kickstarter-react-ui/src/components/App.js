import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink, withRouter} from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import Cookies from 'universal-cookie'
import moment from 'moment';
import {StripeProvider} from 'react-stripe-elements';

import TopNav from './TopNav'
import LogoutModal from './LogoutModal'
import Dashboard from './Dashboard'
import LoginModal from './LoginModal'
import SignUpForm from './SignUpForm'
import Demos from './Demos'
import Demo from './Demo'
import Order from './Order'
import NewDemoCreate from './NewDemoCreate'
import NewDemoForm from './NewDemoForm'
import StripeButton from './StripeButton';
import SignUpModal from './SignUpModal'

const cookies = new Cookies();
console.log('here', cookies.get('userCookie'))

let loggedIn = () => {
  const cookies = new Cookies();
  if (cookies.get('userCookie')) {
    return true
  } else {
    return false
  }
}

let requireAuth = () => {
  if (!loggedIn()) {
      pathname: '/login'
    }
  }


const App = (props) => (
  <div>
    <TopNav user={cookies.get('userCookie')}/>
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" exact component={LoginModal}/>
        <Route exact path="/demos" component={Demos} />
        <Route path="/demos/:id" component={Demo} />
        <Route path="/order" component={Order} onEnter={requireAuth} />
      </Switch>
    </Grid>
  </div>
)

export default withRouter(App);
