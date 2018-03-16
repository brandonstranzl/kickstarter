import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from 'universal-cookie'


import $ from 'jquery';



class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  emailHandleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordHandleChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Your info submitted');
    event.preventDefault();
    $.post('http://localhost:3000/users', JSON.stringify([{email: this.state.email, password: this.state.password}]),
      function(data) {
      console.log(data)
      this.setState({email: data.email},{password: data.password});
    });
  }

  render() {
     return (
       <div>
       <Form onSubmit={this.handleSubmit}>
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
         <Button color="warning" type="Submit" onClick={this.onSave}>Submit</Button>
         </FormGroup>
        </Form>
        </div>
    )
  }
}


export default SignUpForm;
