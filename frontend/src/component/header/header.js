import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import  {  Link } from "react-router-dom"

const header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{fontSize:30}}>NoteFy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav className>
            <Nav.Link>
              <Link to="/mynotes"> My Notes</Link>
            </Nav.Link>

            <NavDropdown title="Sayan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header
