import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../images/Capture.JPG';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" style={{ height: '70px' }}>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Imedesk Logo"
          style={{ width: '120px', height: '40px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-links">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="d-flex align-items-center me-3">
              Features <FaChevronDown style={{ marginLeft: '5px' }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#feature1">Feature 1</Dropdown.Item>
              <Dropdown.Item href="#feature2">Feature 2</Dropdown.Item>
              <Dropdown.Item href="#feature3">Feature 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#apps" className="d-flex align-items-center">
            Apps <FaChevronDown style={{ marginLeft: '5px' }} />
          </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <button className="btn btn-danger mx-2 px-4">Sign In</button>
          <button className="btn custom-login-btn ms-4 px-4">Log In</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
