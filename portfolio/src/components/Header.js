import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./../css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="headerr">
      <Navbar.Brand className="brand">Hellen Wainaina</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
            <Link className="nav-link link" to="/contact"> Contact </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
