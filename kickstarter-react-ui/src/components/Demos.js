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
      showDemoId: false,
      errors: null,
      isOpen: false,

      }
    if (props.location.state) {
      this.state.user = this.props.location.state.user
    }
    // this.state.map = this.state.map.bind(this);
    }

    componentDidMount() {
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

    toggleShowDemoId = () => {
      this.setState({
        false: !this.state.false
      });
    }

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
      <MenuItem eventKey={3.4}>Products</MenuItem>
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

        <Grid>
          <Row>
            {this.state.demos.map((demo, id) => {
              return (

                    <Col xs={6} md={4}>
                      <Thumbnail /*src={"https://img.youtube.com/vi/" + demo.videos + "/0.jpg"}*/>
                      <iframe width="240" height="200" src={"https://www.youtube.com/embed/"+demo.videos} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <h3>{demo.name}</h3>
                        <p>{demo.description}</p>
                        <p>{demo.category.name}</p>
                        <p>{demo.event.name}</p>
                        <p>{demo.live}</p>
                        <p>{demo.fundingreq}</p>
                        <p>{demo.votes}</p>
                        <p>{demo.videos}</p>
                        <p className="clearfix">
                          <Button className="clickToDetailsButton" href={`/demos/${demo.id}`} bsStyle="">
                          <img className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/glasses.svg"}></img>
                          <p>Details</p></Button>
                          <Button className="clearfix" className="contributeButton" bsStyle="warning" href="/order">
                          <img className="contributeButtonImage" src={process.env.PUBLIC_URL + "/images/lightninglike.svg"}></img>
                          Back It</Button>
                        </p>
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

// <Demo onClick={this.toggleShowDemoId} state={this.props} />
