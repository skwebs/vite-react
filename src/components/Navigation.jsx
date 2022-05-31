import {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar bg="light" expanded={expanded} expand="md" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Anshu Memorial Academy</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)}  as={NavLink} to="/register">Register</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)}  as={NavLink} to="/login">Login</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/link1">Link 1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/link2">Link 2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/link3">Link 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/link3">Link 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
