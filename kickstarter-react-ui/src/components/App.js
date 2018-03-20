import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Link, NavLink, withRouter} from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import Cookies from 'universal-cookie'
import moment from 'moment';


import TopNav from './TopNav'
import LogoutModal from './LogoutModal'
import Dashboard from './Dashboard'
import LoginModal from './LoginModal'
import SignUpForm from './SignUpForm'
import Demos from './Demos'
import Demo from './Demo'
// import Order from './order'
import OrderModal from './OrderModal2'
import NewDemoCreate from './NewDemoCreate'
import NewDemoForm from './NewDemoForm'

const cookies = new Cookies();
console.log('here', cookies.get('userCookie'))

const App = (props) => (
  <div>
    <TopNav user={cookies.get('userCookie')}/>
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/SignUpForm" component={SignUpForm}/>
        <Route exact path="/demos" component={Demos} />
        <Route path="/demos/:id" component={Demo} />
        {/*<Route path="/order" component={Order} />*/}
        <Route path="/ordermodal" component={OrderModal} />
        <Route path="/newdemo" component={NewDemoCreate} />
      </Switch>
    </Grid>
  </div>
)

export default withRouter(App);
