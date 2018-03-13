import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}};
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailHandleChange(event) {
  this.setState({email: event.target.value});
  }

  passwordHandleChange(event) {
  this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Your info submitted: ' + this.state.credentials);
    event.preventDefault();
  }

    onSubmit(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  // onSave(event) {
  // event.preventDefault();
  // this.props.actions.loginUser(this.state.credentials);
  // }

  render() {
     return (
       <div>
       <Form onSubmit={this.handleSubmit}>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="yourname@youremail.com"
            value={this.state.credentials.email} onChange={this.handleChange} />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Password</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="your password"
            value={this.state.credentials.password} onChange={this.handleChange} />
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
