import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from 'universal-cookie'
import ErrorMsg from './ErrorMsg'


import $ from 'jquery';

import Resource from '../utilities/resource'
const UserStore = Resource('users')


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signOnErrorShow: false
    };
  }

  emailHandleChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  passwordHandleChange = (event) => {
    this.setState({password: event.target.value});
  }

  // handleSignUpSuccess = (event) => {
  //   alert('Your info submitted');
  //   event.preventDefault();
  //   $.post('http://localhost:3000/users', {data},
  //     function(data) {
  //     console.log(data)
  //     this.setState({email: data.email},{password: data.password});
  //     const cookies = new Cookies();
  //     cookies.set("userCookie", data.id, { path: '/'})
  //     this.setState({user: data})
  //     this.props.history.push('/demos', this.state);
  //     console.log('Success:', data)
  //   });
  // }
  handleSignUpSuccess = (event) => {
    event.preventDefault();
    console.log(event.data)
    fetch(`http://localhost:3000/users`,
    { method: "POST",
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      const cookies = new Cookies();
      cookies.set("userCookie", response.id, { path: '/'})
      this.setState({user: response})
      if (response.status = 403) { alert('something is wrong please try again') }
      // this.props.history.push('/demos', this.state);

    });
  };

  //   UserStore.create() // DemoStore does the API fetching!
  //   .then((result) => this.setState({user: data, errors: null}))
  //   .catch((errors) => this.setState({errors: errors}))
  // }

  render() {
     return (
       <div>
       {this.state.SignOnErrorShow ?  <ErrorMsg /> :null }
       <Form onSubmit={this.handleSignUpSuccess}>
         <FormGroup>
           <Label for="exampleEmail">Please Enter Your Email:</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="yourname@youremail.com"
            value={this.state.email} onChange={this.emailHandleChange} />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Please Choose A Password*: </Label>
           <Input type="password" name="password" id="examplePassword" placeholder="your password"
            value={this.state.password} onChange={this.passwordHandleChange} />
         </FormGroup>
          <FormGroup>
          <p>*We will not save your password. It will be encrypted on signup, and we will ony save the key.
          Pease see <Link to="/https://en.wikipedia.org/wiki/Public-key_cryptography">Wikipedia </Link>for more information</p>
          </FormGroup>
         <FormGroup>
         <Button color="warning" type="Submit">Submit</Button>
         </FormGroup>
        </Form>
        </div>
    )
  }
}


export default SignUpForm;
