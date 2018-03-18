import React from 'react'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

const FilterNavbar = (props) => (

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

)

export default FilterNavbar;
