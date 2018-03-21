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
      showDemoId: false,
      errors: null,
      isOpen: false,
      trendingFilter: false,
      webAppFilter: false,
      iOSAppFilter: false,
      UXUIAppFilter: false,
      ioTandHardwareAppFilter: false,
      liveEventsFilter: false
      }
    // if (props.location.state) {
    //   this.state.user = this.props.location.state.user
    }

    componentDidMount() {
      fetch('http://localhost:3000/demos')
      .then(response => response.json())
      .then((response) => this.setState({ demos: response.data }))
      .catch(e => console.log('parsing failed'))
    }

// state change functions:
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
      this.setState({
        trendingFilter: false,
        webAppFilter: false,
        iOSAppFilter: false,
        UXUIAppFilter: false,
        ioTandHardwareAppFilter: false,
        liveEventsFilter: false
      })
    };

    turnTrendingFilterOn = () => {
      this.setState({ trendingFilter: true })
    };
    turnWebAppFilterOn = () => {
      this.setState({ webAppFilter: true })
    };
    turniOSAppFilterOn = () => {
      this.setState({ iOSAppFilter: true })
    };
    turnUXUIAppFilterOn = () => {
      this.setState({ UXUIAppFilter: true })
    };
    turnioTandHardwareAppFilterOn = () => {
      this.setState({ ioTandHardwareAppFilter: true })
    };
    turnLiveEventsFilterOn = () => {
      this.setState({ liveEventsFilter: true })
    };

  render() {

    let categoriesToShow;
    if (this.state.trendingFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.id == 101 )
    } else if (this.state.webAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.id == 100 )
    } else if (this.state.iOSAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.id == 102 )
    } else if (this.state.UXUIAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.id == 103 )
    } else if (this.state.ioTandHardwareAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.id == 101 )
    } else if (this.state.liveEventsFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.event.id == 34 )
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

    <FilterNavbar
      filterbyNone={this.turnAllFiltersOff}
      filterbyTrending={this.turnTrendingFilterOn}
      filterbyWebApps={this.turnWebAppFilterOn}
      filterbyiOSApps={this.turniOSAppFilterOn}
      filterbyUXUIApps={this.turnUXUIAppFilterOn}
      filterbyiOTApps={this.turnioTandHardwareAppFilterOn}
      filterbyLiveEvents={this.turnLiveEventsFilterOn}
      />

      <div>
        <Grid>
          <Row>
            {categoriesToShow.map((demo, id) => {
              return (

            <Col xs={6} md={4}>
              <Thumbnail className="demoThumbnail">
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


                  <Link to={`/demos/${demo.id}`}>
                    <Button className="clickToDetailsButton"  bsStyle="">
                    <img className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/glasses.svg"}></img>
                    <p>Details</p>
                    </Button>
                  </Link>

                  <Link to={"/order"}>
                  <Button className="clearfix" className="contributeButton" bsStyle="warning">
                  <img className="contributeButtonImage" src={process.env.PUBLIC_URL + "/images/lightninglike.svg"}></img>
                  Back It
                  </Button>
                  </Link>



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
