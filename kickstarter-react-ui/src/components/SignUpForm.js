import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Cookies from 'universal-cookie';

// import $ from 'jquery';

// import Resource from '../utilities/resource'
// const UserStore = Resource('users')


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signOnErrorShow: false,
      errors: []
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

  handleSignUpSuccess = (event) => {
    event.preventDefault();
    console.log(this.state)
    fetch(`http://localhost:3000/users`,
    { method: "POST",
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (response.ok) {
        // this.setState({ user: response.data })
        const cookies = new Cookies();
        cookies.set("userCookie", JSON.stringify(response.data), { path: '/'})
        this.props.toggleModal()
      } else {
        this.setState({errors: response.error_msg})
      }
      // this.props.history.push('/demos', this.state);
      // window.location = '/demos'

    });
  };

  render() {
     return (
       <div>
       {this.state.errors.map((errorText) => {
         return <h3 className="error-msg-sign-up"><em>{errorText}</em></h3>
       })}

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
