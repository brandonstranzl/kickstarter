import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, Image, Button, Modal} from 'react-bootstrap'
import LogoutModal from './LogoutModal'
// import SignUpModal from './LogoutModal'
import SignUpForm from './SignUpForm'
import Cookies from 'universal-cookie';



class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isToggleOn: false,
    SignUpShow: false,
    }
    if (props.location && props.location.state) {
        this.state.user = this.props.location.state.user
        }
    }

    handleLogoutClick = () => {
      this.setState({
        isToggleOn: !this.state.isToggleOn
      });
    }

    // handleSignUpClick = () => {
    //   <SignUpForm onSave={this.handleSignUpSuccess} />
    // }

    _onButtonClick = () => {
       this.setState({
         SignUpShow: true,
       });
     }


      // this.setState({
      //   SignUpShow: !this.state.SignUpShow
      // });


    // handleSignUpSuccess = (data) => {
    //   const cookies = new Cookies();
    //   fetch(`http://localhost:3000/users`,
    //   { method: "POST",
    //   body: JSON.stringify(data)
    //   })
    //   .then(response => response.json())
    //   .catch(error => console.error('Error:', error))
    //   .then((response) => {
    //     const cookies = new Cookies();
    //     cookies.set("userCookie", data.id, { path: '/'})
    //     this.setState({user: data})
    //     this.props.history.push('/demos', this.state);
    //     console.log('Success:', response)
    //   });
    // };


    // this.props.user.id
    handleLogout = (data) => {
      const cookies = new Cookies();
      fetch(`http://localhost:3000/sessions/${cookies.get('userCookie')}`,
      { method: 'DELETE' }).then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log('Success:', response)
        cookies.remove('userCookie')
      });
    };

    componentWillMount() {
        this.setState({
          isToggleOn: false,
          SignUpShow: false
        })
    }


render() {
  this.state ? console.log("HERE IS THE STATE", this.props) : console.log("MAJOR ISSUE")

  return(

  <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Demo88</Link>
          </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem eventKey={1}>
        <Link to='/demos'>Explore Demos</Link>
        </NavItem>
        <NavItem eventKey={2}>
        <Link to='/demos/new'>Create A Demo</Link>
        </NavItem>
      </Nav>

        <Nav pullRight>
          <NavItem className="navbar-right" eventKey={2}>
            <Button onClick={this._onButtonClick}>SignUp</Button>
          </NavItem>

          <NavItem className="navbar-right" eventKey={2}>
            <Button onClick={this.handleLogoutClick}>Logout</Button>
          </NavItem>

          <NavItem className="navbar-right" eventKey={1}>
            <Link to="/login">Login</Link>
          </NavItem>

          <LogoutModal show={this.state.isToggleOn} onClose={this.handleLogoutClick}
        onSave={this.handleLogout}/>

          {this.state.SignUpShow ?  <SignUpForm /> :null }


        </Nav>

      </Navbar>
    )
  }
}

export default TopNav

// <SignUpModal show={this.state.SignUpShow} onSave={this.handleSignUpSuccess}
// />
