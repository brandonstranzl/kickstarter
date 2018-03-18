import React, { Component } from 'react'
import Demo from './Demo'
import TopNav from './TopNav'
import FilterNavbar from './FilterNavbar'
import Cookies from 'universal-cookie'
import {DropdownButton, MenuItem, ButtonToolbar, Tab, Tabs} from 'react-bootstrap'
import {ListGroupItem, ListGroup, Grid, Button, Navbar, Nav, NavItem, NavDropdown, Thumbnail, Row, Col, PageHeader, Modal, Table} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'

class Demos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      demos: [],
      webAppFilter: false,
      iOSAppFiler: false,
      hardwareFilter: false,
      showDemoId: false,
      errors: null,
      isOpen: false,

      }
    // if (props.location.state) {
    //   this.state.user = this.props.location.state.user
    // this.turnAllFiltersOff = this.turnAllFiltersOff.bind(this);
    // this.filter1 = this.filter1.bind(this);
    // this.turnHardwareFilterOn = this.turnHardwareFilterOn.bind(this);
    }

    componentDidMount() {
      fetch('http://localhost:3000/demos')
      .then(response => response.json())
      .then((response) => this.setState({ demos: response.data }))
      .catch(e => console.log('parsing failed'))
      // .then(this.setState({hardwareFilter: false}))
      // *****the below function can be uncommented and used in lieu of fetch:
      // DemoStore.findAll() // DemoStore does the API fetching!
      // .then((result) => this.setState({demos: result, errors: null}))
      // .catch((errors) => this.setState({errors: errors}))
    }

// event functions:
    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    toggleShowDemoId = () => {
      this.setState({
        false: !this.state.false
      });
    };

    turnAllFiltersOff = () => {
        this.setState({ hardwareFilter: false })
    };

    turnHardwareFilterOn = () => {
        this.setState({ hardwareFilter: true })
    };

    filterbyHardware = (event) => {
      event.preventDefault();
      this.turnAllFiltersOff()
      this.turnHardwareFilterOn()
    };


  render() {

    let categoriesToShow;
    if (this.state.hardwareFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.name == "Hardware" )
      } else {
      categoriesToShow = this.state.demos
      }
    //
    console.log(this.state)

// Facebook:
    // <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false">
    // <div class="fb-xfbml-parse-ignore">
    // </div>
    // </div>

    return (
  <div>

    <FilterNavbar />

    <ButtonToolbar />
      <Button bsStyle="primary" onClick={this.filterbyHardware}>
        Hardware Demos
      </Button>
    <ButtonToolbar />

      <div>
        <Grid>
          <Row>
            {categoriesToShow.map((demo, id) => {
              return (

            <Col xs={6} md={4}>
              <Thumbnail>
                <iframe width="240" height="200" src={"https://www.youtube.com/embed/"+demo.videos} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <Table className="thumbnailtable">
                <thead><tr>
                <th>{demo.name}</th>
                </tr></thead>
                <tbody>
                <tr><td>
                {demo.category.name}
                </td></tr>
                <tr className="descriptionrow"><td>
                {demo.description}
                </td></tr>
                <tr><td>
                {demo.event.name}
                </td></tr>
                <tr><td>
                {demo.live}
                </td></tr>
                <tr><td>
                {demo.fundingreq}
                </td></tr>
                </tbody>
                </Table>

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
