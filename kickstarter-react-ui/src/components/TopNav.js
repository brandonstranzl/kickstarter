import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, Image, Button, Modal} from 'react-bootstrap'
import LogoutModal from './LogoutModal'
import SignUpModal from './SignUpModal'
import SignUpForm from './SignUpForm'
import Cookies from 'universal-cookie';
import LoginModal from './LoginModal'
import NewDemoCreate from './NewDemoCreate'
import ErrorModal from './ErrorModal'
import { withRouter } from "react-router-dom";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      SignUpShow: false,
      LoginShow: false,
      NewDemoShow: false,
      ShowErrorModal: false,
      SignUpModal: false,
      user: ""
    }
    if (props.location && props.location.state) {
      this.state.user = this.props.location.state.user
    }
    this.handleNewDemoClick = this.handleNewDemoClick.bind(this)
    this.toggleErrorModal = this.toggleErrorModal.bind(this)
  }

  componentDidMount() {
    const cookies = new Cookies();
    if (cookies.get('userCookie')) {
      this.setState({
        user: cookies.get('userCookie')
      });
      console.log("here is the user cookie", cookies.get('userCookie'))
    }
  }

  handleLogoutClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  handleSignUpClick = () => {
    this.setState({
      SignUpShow: !this.state.SignUpShow
    });
  }

  handleLoginClick = () => {
   this.setState({
     LoginShow: !this.state.LoginShow
   });
 }

 handleNewDemoClick = () => {
   const cookies = new Cookies();
   if (cookies.get('userCookie')) {
    this.setState({
      NewDemoShow: !this.state.NewDemoShow
    });
  } else {
    this.setState({
      ShowErrorModal: !this.state.ShowErrorModal
    })
  }
}

toggleErrorModal = () => {
 this.setState({
   ShowErrorModal: !this.state.ShowErrorModal
 });
}

    // this.props.user.id
    handleLogoutPost = (data) => {
      const cookies = new Cookies();
      fetch(`http://localhost:3000/sessions/${cookies.get('userCookie')}`,
        { method: 'DELETE' })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        const cookies = new Cookies();
        cookies.remove('userCookie')
        console.log('Success:', response)
        window.location='/'
      });
    };

    render() {
      this.state ? console.log("HERE IS THE STATE", this.props) : console.log("MAJOR ISSUE")

      const cookies = new Cookies();

      let displayLogin
      if (cookies.get('userCookie')) {
        displayLogin = <Button>Logged in as {cookies.get('userCookie').email}</Button>
      } else {
        displayLogin = <Button onClick={this.handleLoginClick}>Login</Button>
      };

      let displaySignUp
      if (cookies.get('userCookie')) {
        displaySignUp = ""
      } else {
        displaySignUp = <Button onClick={this.handleSignUpClick}>SignUp</Button>
      };

      let displayLogOut
      if (cookies.get('userCookie')) {
        displayLogOut =
        <NavItem className="navbar-right" eventKey={2}>
        <Button onClick={this.handleLogoutClick}>Logout</Button>
        </NavItem>
      } else {
        displayLogOut = ""
      };

      return(

        // <Navbar collapseOnSelect className="topNav">
        // <Navbar.Header>
        // <Navbar.Brand>
        // <Link to='/' className="brand-name">Demo88</Link>
        // </Navbar.Brand>
        // <Image src="/logo.png" />
        // </Navbar.Header>
        // <Nav className="TopNav">
        // <NavItem className="demosLink" eventKey={1}>
        // <Link to='/demos' className="linkToDemos"> Explore Demos </Link>
        // </NavItem>
        // <NavItem eventKey={2}>
        // <Button onClick={this.handleNewDemoClick} bsStyle="link"> Create </Button>
        // </NavItem>
        // </Nav>

        // <Nav pullRight>
        // <NavItem className="navbar-right" eventKey={2}>
        //   {displaySignUp}
        // </NavItem>
        //   {displayLogOut}
        // <NavItem className="navbar-right" eventKey={1}>
        //   {displayLogin}
        // </NavItem>
        // <LogoutModal show={this.state.isToggleOn} toggleLogOutModal={this.handleLogoutClick} onSave={this.handleLogoutPost}/>
        // <SignUpModal show={this.state.SignUpShow} toggleModal={this.handleSignUpClick} />
        // <LoginModal show={this.state.LoginShow} toggleModal={this.handleLoginClick} />
        // <NewDemoCreate user={this.state.user} show={this.state.NewDemoShow} toggleModal={this.handleNewDemoClick} />
        // <ErrorModal toggleErrorModal={this.toggleErrorModal} show={this.state.ShowErrorModal} />
        // </Nav>
        // </Navbar>





        <Navbar className="topNav" bsStyle="inverse" collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
        <Link to='/'>
          <img className="logo" src={process.env.PUBLIC_URL + "/images/logo"} alt="Go to W3Schools!"  border="0"></img>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        <NavItem eventKey={1} href="/demos">
          {/*<Link to='/demos' className="linkToDemos"> Explore Demos </Link>*/}
          <Button href="/demos" bsStyle="link"> Explore Demos </Button>
        </NavItem>

        <NavItem eventKey={2} href="#">
          <Button onClick={this.handleNewDemoClick} bsStyle="link"> Create </Button>
        </NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem className="navbar-right" eventKey={2}>
          {displaySignUp}
        </NavItem>
          {displayLogOut}
        <NavItem className="navbar-right" eventKey={1}>
          {displayLogin}
        </NavItem>
        <LogoutModal className="navModals" show={this.state.isToggleOn} toggleLogOutModal={this.handleLogoutClick} onSave={this.handleLogoutPost}/>
        <SignUpModal className="navModals" show={this.state.SignUpShow} toggleModal={this.handleSignUpClick} />
        <LoginModal className="navModals" show={this.state.LoginShow} toggleModal={this.handleLoginClick} />
        <NewDemoCreate className="navModals" user={this.state.user} show={this.state.NewDemoShow} toggleModal={this.handleNewDemoClick} />
        <ErrorModal toggleErrorModal={this.toggleErrorModal} show={this.state.ShowErrorModal} />
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
  }

  export default TopNav
