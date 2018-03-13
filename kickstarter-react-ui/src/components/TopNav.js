import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Navbar } from 'reactstrap';

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
      // <nav className="navbar navbar-inverse navbar-fixed-top">
      //   <div class="container-fluid">
      //   <div class="navbar-header">
      //       <a className="navbar-brand" href="#">
      //         <img className="navbar-left" alt="Brand" src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="35" alt=""/>
      //       </a>
      //       <span className="navbar-text">
      //       Demo88
      //       </span>
      //   </div>
      //       <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">Mark Otto</a></p>
      //   </div>
      // </nav>
      // className="d-inline-block align-top"
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + "/flux_capacitor.svg"} width="30" height="30" className="d-inline-block align-top" alt=""/>
        </a>
      </nav>
    );
  }
}

export default TopNav
