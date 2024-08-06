import React, { useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../images/Capture.JPG";
import "./Header.css";

function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleNavItemClick = (item) => {
    if (window.innerWidth < 992) {
      setActiveItem(item);
      setDropdownOpen(dropdownOpen === item ? null : item); // Toggle dropdown
    } else {
      setActiveItem(item);
    }
  };

  return (
    <Navbar expand="lg" className="px-md-3" style={{ height: "70px" }}>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Imedesk Logo"
          style={{ width: "120px", height: "40px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-links">
          <div className="nav-bg w-100">
            <div className="navbar-styles d-flex">
              <Dropdown
                as={Nav.Item}
                onClick={() => handleNavItemClick("features")}
                className={activeItem === "features" ? "active" : ""}
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="d-flex align-items-center me-3"
                >
                  Features <FaChevronDown style={{ marginLeft: "5px" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="custom-dropdown-menu"
                  show={dropdownOpen === "features"}
                >
                  <Dropdown.Item href="#feature1">Feature 1</Dropdown.Item>
                  <Dropdown.Item href="#feature2">Feature 2</Dropdown.Item>
                  <Dropdown.Item href="#feature3">Feature 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                as={Nav.Item}
                onClick={() => handleNavItemClick("apps")}
                className={activeItem === "apps" ? "active" : ""}
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="d-flex align-items-center me-3"
                >
                  Apps <FaChevronDown style={{ marginLeft: "5px" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="custom-dropdown-menu"
                  show={dropdownOpen === "apps"}
                >
                  <Dropdown.Item href="#feature1">Feature 1</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Item
                onClick={() => handleNavItemClick("pricing")}
                className={activeItem === "pricing" ? "active" : ""}
              >
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav.Item>

              <Nav.Item
                onClick={() => handleNavItemClick("blog")}
                className={activeItem === "blog" ? "active" : ""}
              >
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav.Item>
            </div>
            <div className="btn-group">
              <button className="btn btn-danger mx-2 px-4">Sign In</button>
            </div>
            <div className="btn-group">
              <button className="btn custom-login-btn ms-4 px-4">Log In</button>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
