import React, { Component } from 'react'
import Demo from './Demo'
import TopNav from './TopNav'
import FilterNavbar from './FilterNavbar'
import Cookies from 'universal-cookie'
import {DropdownButton, MenuItem, ButtonToolbar, ProgressBar, Tab, Tabs, Image} from 'react-bootstrap'
import {ListGroupItem, ListGroup, Grid, Button, Navbar, Nav, NavItem, NavDropdown, Thumbnail, Row, Col, PageHeader, Modal, Table} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

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
      liveEventsFilter: false,
      shouldHide: true
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
      categoriesToShow = this.state.demos.sort((a,b) => {
          if (a.votes > b.votes) {
            return -1;
          } else if (a.votes < b.votes ) {
            return 1;
          } else {
            return 0;
          }}).slice(0,10)
    } else if (this.state.webAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.name == "Web Apps")
    } else if (this.state.iOSAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.name == "iOS Apps")
    } else if (this.state.UXUIAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.name == "UI/UX Apps")
    } else if (this.state.ioTandHardwareAppFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.category.name == "iOT Apps")
    } else if (this.state.liveEventsFilter) {
      categoriesToShow = this.state.demos.filter(demo => demo.event.name == "LHL Toronto")
    } else {
    categoriesToShow = this.state.demos
    }
    console.log(this.state)

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
        {/*<TopNav user={this.state.user}/>*/}
        <Grid className="grid">
          <Row>
            {categoriesToShow.map((demo, id) => {
              return (

            <Col xs={6} md={4}>
              <Thumbnail className="demoThumbnail" >
              <Link to={{ pathname: `/demos/${demo.id}`, state: { demo:demo.name, goal:demo.fundingreq, demo_id:demo.id}} }>
              <img src={`https://img.youtube.com/vi/${demo.videos}/0.jpg`} title="Example Image Link" width="240" height="200" />
              </Link>
                <Table className="thumbnailtable">

                <thead>
                  <tr>
                    <th>{demo.name}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      {demo.category.name}
                    </td>
                  </tr>

                  <tr className="descriptionrow">
                    <td>
                    {demo.description}
                    </td>
                  </tr>
                <tr><td>
                ${demo.fundingreq}
                </td></tr>
                <tr><td>
                <ProgressBar now={(demo.progress/demo.fundingreq)*100} />
                </td></tr>
                </tbody>
                </Table>
                  <Link to={{ pathname: `/demos/${demo.id}`, state: { demo:demo.name, progress: demo.progress, goal: demo.fundingreq, demo_id:demo.id, event: demo.event}} }>
                    <Button className="clearfix" className="clickToDetailsButton"  bsStyle="">
                    <img className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/glasses.svg"}></img>
                    <p>Details</p>
                    </Button>
                  </Link>

                  <Link to={{ pathname: "/order", state: {demo: demo.name, goal: demo.fundingreq, progress: demo.progress, demo_id: demo.id }} }>
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
