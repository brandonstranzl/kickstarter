import React, { Component } from 'react'
import Demo from './Demo'
import TopNav from './TopNav'
import {DropdownButton, MenuItem, ButtonToolbar, Tab, Tabs} from 'react-bootstrap'
import Cookies from 'universal-cookie'

// import Dialog from './Dialog'
// import Modal from './Modal';

// import $ from 'jquery'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import {Grid, Button, Navbar, Nav, NavItem, NavDropdown, Thumbnail, Row, Col, PageHeader, Modal, Table} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'

  // Client-side model
import Resource from '../utilities/resource'

const DemoStore = Resource('demos')


class Demos extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      demos: [],
      selectedDemo: {},
      showDetails: false,
      errors: null,
      isOpen: false
      }
    if (props.location.state) {
      this.state.user = this.props.location.state.user
    }
    // this.state.map = this.state.map.bind(this);
    }

    componentWillMount() {
      // fetch('http://localhost:3000/demos')
      // .then(r => r.clone().json())
      // .then(data => this.setState({ demos: data }))
      // // .then(demos => this.setState({ demos: data }))
      // .catch(e => console.log('parsing failed'))

      // }
      DemoStore.findAll() // DemoStore does the API fetching!
      .then((result) => this.setState({demos: result, errors: null}))
      .catch((errors) => this.setState({errors: errors}))
    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    // show by category = () =>
    // change demos to categories with videos

  //

  //
  //   DemoStore.findAll() // DemoStore does the API fetching!
  //   .then((result) => console.log(result))//this.setState({demos: result.data, errors: null}))
  //   .catch((errors) => this.setState({errors: errors}))
  // }
  render() {
    return (
      <div>
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/demos">Trending</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavDropdown eventKey={3} title="Sort by Category" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Web Apps</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.2}>iOS Apps</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>UI/UX Apps</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Hardware</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={3} title="Sort by Location" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>LHL Toronto</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.2}>LHL Montreal</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Brainstation</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Hacker You</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
      <div>
        {/*<TopNav user={this.state.user}/>*/}
        <Grid>
          <Row>
            {this.state.demos.map((demo, id) => {
              return (

                    <Col xs={6} md={4}>
                      <Thumbnail src={"https://img.youtube.com/vi/" + demo.videos + "/0.jpg"}>
                        <iframe width="240" height="200" src={"https://www.youtube.com/embed/"+demo.videos} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <h3>{demo.name} <small> asking for ${demo.fundingreq}</small> </h3>
                        <p>
                          {demo.name} asking for ${demo.fundingreq}
                        </p>
                        <p>
                          Initially pitched their idea at {demo.event.name} 
                          on {demo.live}
                          Here is some quick info about 
                          {demo.name}: {demo.description}. Their main focus is {demo.category.name}.
                        </p>
                          <Button bsStyle="primary" href="/login">Contribute</Button>&nbsp;
                          <Button bsStyle="default" href={"https://www.youtube.com/watch?v="+demo.videos}>View Video</Button>
                          <Button bsStyle="primary" href="/demo/:id">See More Details</Button>&nbsp;
                          <Button bsStyle="warning" href="/order"></Button>
                          {/*<img src=""> </img>*/}
                          <Button>Back It!</Button>
                        <p></p>
                      </Thumbnail>
                    </Col>
              )
            })}
          </Row>
        </Grid>
      </div>
      </div>
    )
  }
}
export default Demos
