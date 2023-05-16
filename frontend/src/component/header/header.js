import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import  {  Link, useHistory } from "react-router-dom"
import { logout } from '../../actions/userAction';

const Header = () => {
   const history= useHistory();
   const dispatch=useDispatch();
    const userLogin = useSelector((state)=>state.UserLogin);
    const {userIno}= userLogin;
     const logouthandeler=()=>{
       dispatch(logout);
       history.push("/");
     }
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
              <NavDropdown.Item onClick={
                ()=>{
                 logouthandeler();
                }
              } >Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header




// {"_id":{"$oid":"62b2b8e4f606a7e57a816e71"},"name":"testuser1","email":"testuser1@gmail.com","password":"$2a$10$u1hKWdbtVeOszM3M7PgQ7OEKZEK4VFGxAn8qavzBn65adhu7ZgVh2","isAdmin":false,"pic":"https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png","createdAt":{"$date":{"$numberLong":"1655879908187"}},"updatedAt":{"$date":{"$numberLong":"1655879908187"}},"__v":{"$numberInt":"0"}}