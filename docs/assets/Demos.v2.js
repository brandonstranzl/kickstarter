import React, { Component } from 'react'
import Demo from './Demo'
import TopNav from './TopNav'
import {DropdownButton, MenuItem, ButtonToolbar, Tab, Tabs} from 'react-bootstrap'
import Cookies from 'universal-cookie'
import FilterNavbar from './FilterNavbar'

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
      filter: false,
      // showDemoId: false,
      errors: null,
      isOpen: false,

      }
    if (props.location.state) {
      this.state.user = this.props.location.state.user
    }

    }
    componentDidMount() {
      fetch('http://localhost:3000/demos')
      .then(response => response.json())
      .then((response) => this.setState({ demos: response.data }))
      .catch(e => console.log('parsing failed'))
      // *****the below function can be uncommented and used in lieu of fetch:
      // DemoStore.findAll() // DemoStore does the API fetching!
      // .then((result) => this.setState({demos: result, errors: null}))
      // .catch((errors) => this.setState({errors: errors}))
    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    // toggleShowDemoId = () => {
    //   this.setState({
    //     false: !this.state.false
    //   });
    // }

    addHardwareFilter = () => {
      this.setState({filter: true})
    }

    removeHardwardFilter = () => {
      this.setState({filter: false})
    }

  render() {

    // let demosarr = this.state.demos
    // let categoriesToShow;
    // if (this.state.filter) {
    //   categoriesToShow = demosarr.filter(demo => this.state.demos.category.name == this.state.filter.type )
    //   } else {
    //   categoriesToShow = demosarr
    //   }
    //
    // console.log(this.state)
    // <Button onClick={this.addFilter({ type: 'category', name: 'Applications' })}>Applications Demos</Button>


    return (
<div>

<FilterNavbar />

      <div>
        <Grid>
          <Row>
            {this.state.demos.map((demo, id) => {
              return (

            <Col xs={6} md={4}>
              <Thumbnail>
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

                  <p className="clearfix">

                  <Button className="clickToDetailsButton" href={`/demos/${demo.id}`} bsStyle="">
                  <img className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/glasses.svg"}></img>
                  <p>Details</p>
                  </Button>

                  <Button className="clearfix" className="contributeButton" bsStyle="warning" href="/order">
                  <img className="contributeButtonImage" src={process.env.PUBLIC_URL + "/images/lightninglike.svg"}></img>
                  Back It
                  </Button>

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
