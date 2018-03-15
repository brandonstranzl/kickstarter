import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

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
  // <Navbar>
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <Link to='/'>
  //         Demo88
  //       </Link>
  //     </Navbar.Brand>
  //   </Navbar.Header>

  //   <Nav>
  //     <NavItem className="navbar-right" eventKey={1}>
  //       <Link to="/login">Login</Link>
  //     </NavItem>

  //     <NavItem className="navbar-right" eventKey={2}>
  //       <Link to="/signup">Signup</Link>
  //     </NavItem>
  //   </Nav>

  // </Navbar>

  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Demo88</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Explore
      </NavItem>
      <NavItem eventKey={2} href="#">
        Create
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="/login">
        Login
      </NavItem>
      <NavItem eventKey={2} href="/signup">
        Sign Up
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default TopNav
