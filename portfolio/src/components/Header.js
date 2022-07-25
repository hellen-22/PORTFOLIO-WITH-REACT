import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./../css/Header.css";
import Avatar from "./../images/avatar.jpg";

function Header() {
  return (
    <Navbar expand="lg" className="headerr">
      <Navbar.Brand ><img src={Avatar} alt="portfolio" className="avatar" ></img></Navbar.Brand>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mx-auto items">
          <Nav.Item className="item">
            <Nav.Link className="link"> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link className="link"> About </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link className="link"> Services </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link className="link"> Resume </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link className="link"> Projects </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link className="link"> Contact </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
