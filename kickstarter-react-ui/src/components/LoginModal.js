import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import { Modal } from 'react-bootstrap';
// import $ from 'jquery';
import Cookies from 'universal-cookie'

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
      email: '',
      password: '',
      errors: ''
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password)
    // $.ajax({
    //     url:"http://localhost:3000/sessions",
    //     type:"POST",
    //     data: {email: this.state.email, password: this.state.password},
    //     dataType: "json",
    //     success:(data) => {
    //       console.log("here is the res ", data)
    //       this.setState({user: data})
    //       const cookies = new Cookies();
    //       cookies.set("userCookie", data.email, { path: '/'})
    //       this.props.history.push('/demos', this.state);
    //       // document.cookie = "userId=" + data.id
    //       // window.location = '/demos'
    //     }
    //   })
    // }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.email, this.state.password)
    fetch(`http://localhost:3000/sessions`,
    { method: "POST",
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (response.ok) {
        this.setState({ user: response.data })
        const cookies = new Cookies();
        cookies.set("userCookie", JSON.stringify(response.data), { path: '/'})
        // this.props.history.push('/demos', this.state);
        this.props.toggleModal()
      } else {
        this.setState({ errors: response.error_msg })
      }
    });
  };

  render() {
    if (!this.props.show) {
      return ""
    } else {
     return (
       <div>
       <Modal.Dialog>

         <Modal.Header>
           <Modal.Title>Login Modal</Modal.Title>
           <Button className="close" onClick={this.props.toggleModal}>&times;</Button>
         </Modal.Header>

         <Modal.Body>

        <Form onSubmit={this.handleSubmit}>
        <h3 className="loginErrorMsg">{this.state.errors}</h3>
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
          <Button color="warning" type="Submit">Submit</Button>
         </FormGroup>
        </Form>

        </Modal.Body>

        </Modal.Dialog>

        </div>
    )}
  }
}


export default LoginModal;

// onClick={this.onSave}
