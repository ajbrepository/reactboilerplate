import React from 'react';
import ReactDOM from 'react-dom';
import { Bootstrap, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Projects</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Contact</NavItem>
          <NavItem eventKey={2} href="#">Link 2</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>,
  document.getElementById('app')
);




console.log('My Minimal React Webpack Babel Setup ----Stage 2');