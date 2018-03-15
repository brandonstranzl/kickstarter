import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'

// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Navbar, Nav, NavItem} from 'reactstrap';
// import LoginForm from './LoginForm';
// class TopNav extends Component {
//
//
// constructor(props){
//   super(props);
//   this.state={
//   username:'',
//   password:''
//   }
//  }
//
// //  render() {
// //     return (
// //       <nav className="navbar navbar-default">
// //         <div className="navbar-header">
// //           <img className="navbar-left" alt="Brand" src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="75" alt=""/>
// //           <a href="http://localhost:3000/events" className="navbar-brand">Demo88</a>
// //         </div>
// //         <ul className="nav navbar-nav navbar-right">
// //           <li><Button active className="btn btn-warning log">Log In</Button>  </li>
// //           <li><NavLink href="http://localhost:3000/sessions/:id" active className="btn btn-warning log">Log Out</NavLink>  </li>
// //           <li><NavLink href="http://localhost:3000/users/new" active className="btn btn-warning log">NEW<br></br>USERS</NavLink></li>
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }
const TopNav = (props) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <Link to='/'>  Demo88  </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  <Navbar.Collapse>
  <Nav>
  <NavItem eventKey={1} href="#">
    Link
  </NavItem>
  <NavItem eventKey={2} href="#">
    Link
  </NavItem>
  </Nav>
    <Nav pullRight>

      <NavItem className="navbar-right" eventKey={2}>
      <Link to="/signup">Signup</Link>
        </NavItem>

      <NavItem className="navbar-right" eventKey={2}>
        <Link to="/logout">Logout</Link>
      </NavItem>

      <NavItem className="navbar-right" eventKey={1}>
        <Link to="/login">Login</Link>
      </NavItem>

    </Nav>
  </Navbar.Collapse>
  </Navbar>
)

export default TopNav
