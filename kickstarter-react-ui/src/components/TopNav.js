import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Navbar, NavLink } from 'reactstrap';
import LoginForm from './LoginForm';
class TopNav extends Component {


constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <img className="navbar-left" alt="Brand" src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="75" alt=""/>
          <a href="http://localhost:3000/events" className="navbar-brand">Demo88</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><NavLink href="http://localhost:3000/sessions/new" active className="btn btn-warning log">Log In</NavLink>  </li>
          <li><NavLink href="http://localhost:3000/sessions/:id" active className="btn btn-warning log">Log Out</NavLink>  </li>
          <li><NavLink href="http://localhost:3000/users/new" active className="btn btn-warning log">NEW<br></br>USERS</NavLink></li>
        </ul>
      </nav>
      // <nav className="navbar navbar-default navbar-fixed-top">
      //   <div className="container-fluid">
      //   <div className="navbar-header">
      //       <a className="navbar-brand" href="#">
      //         <img className="navbar-left" alt="Brand" src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="35" alt=""/>
      //       </a>
      //       <span className="navbar-text">
      //       Demo88
      //       </span>
      //   </div>
      //     <Button color="danger" onClick={render }>Existing Users Login</Button>
      //       <button type="button" className="btn btn-default navbar-btn">New Users: Sign Up</button>
      //       <LoginModal />
      //   </div>
      // </nav>
      // className="d-inline-block align-top"
      // <nav className="navbar navbar-light bg-light">
      //   <a className="navbar-brand" href="#">
      //     <img src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="30" height="30" className="d-inline-block align-top" alt=""/>
      //   </a>
      // </nav>

    );
  }
}

export default TopNav
