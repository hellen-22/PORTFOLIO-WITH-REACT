import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./../css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="headerr">
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mx-auto items">
          <Nav.Item className="item">
            <Link className="nav-link link"  to="/"  > Home </Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Link className="nav-link link" to="/about">About</Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Link className="nav-link link" to="/resume"> Resume </Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Link className="nav-link link" to="/projects"> Projects </Link>
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
