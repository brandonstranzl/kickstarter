import React from 'react'
import {ButtonToolbar, Button, Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'


// <img className="contributeButtonImage" src={process.env.PUBLIC_URL + "/images/lightninglike.svg"}></img>
class FilterNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  showTrending = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyTrending()
  };

  showWebApps = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyWebApps()
  };

  showiOSApps = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyiOSApps()
  };

  showUXUIApps = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyUXUIApps()
  };

  showiOTApps = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyiOTApps()
  };

  showLiveEvents = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
    this.props.filterbyLiveEvents()
  };

  showAll = (event) => {
    event.preventDefault();
    this.props.filterbyNone()
  };


render() {
     return (

  <ButtonToolbar>
      <Button bsStyle="default" className="filterButton" onClick={this.showTrending}>
        Trending
      </Button>
      <Button className="filterButton" onClick={this.showWebApps}>
        Web Apps
      </Button>
      <Button className="clearfix" className="filterButton" onClick={this.showiOSApps}>
        iOS Apps
      </Button>
      <Button className="clearfix" className="filterButton" onClick={this.showUXUIApps}>
        UX/UI Apps
      </Button>
      <Button className="clearfix" className="filterButton" onClick={this.showiOTApps}>
        iOT Apps
        </Button>
      <Button className="clearfix" className="filterButton" onClick={this.showLiveEvents}>
        Live Events
      </Button>
      <Button className="clearfix" className="filterButton" onClick={this.showAll}>
        Show All
      </Button>
  </ButtonToolbar>

            )
          }
        }

export default FilterNavbar;
