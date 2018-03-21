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
import NewDemoCreate from './NewDemoCreate'
import NewDemoForm from './NewDemoForm'
import Order from './Order'
import MyStoreCheckout from './MyStoreCheckout';
import StripeButton from './StripeButton';


const cookies = new Cookies();
console.log('here', cookies.get('userCookie'))


const App = (props) => (
  <div>
    <TopNav user={cookies.get('userCookie')}/>
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route exact path="/demos" component={Demos} />
        <Route path="/demos/:id" component={Demo} />
        <Route path="/order" component={Order} />

      </Switch>
    </Grid>
  </div>
)


export default withRouter(App);
