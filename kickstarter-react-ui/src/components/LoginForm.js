import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import $ from 'jquery';



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state.email, this.state.password)
    $.ajax({
        url:"http://localhost:3000/sessions",
        type:"POST",
        data: {email: this.state.email, password: this.state.password},
        dataType: "json",
        // contentType: "; charset=utf-8",
        success: function(data){
          window.location = data.redirect_to
        }
      })
    // $.post('http://localhost:3000/sessions', JSON.stringify([{email: this.state.email, password: this.state.password}]),
    //   function(data) {
    //   console.log(data)
    //   // this.setState({email: data.email},{password: data.password});
    // });
  }

  render() {
     return (
       <div>
       <Form onSubmit={this.handleSubmit}>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="yourname@youremail.com"
            value={this.state.email} onChange={this.emailHandleChange} />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Password</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="your password"
            value={this.state.password} onChange={this.passwordHandleChange} />
         </FormGroup>
         <FormGroup>
         <Button color="warning" type="Submit" onClick={this.onSave}>Submit</Button>
         </FormGroup>
        </Form>
        </div>
    )
  }
}


export default LoginForm;
