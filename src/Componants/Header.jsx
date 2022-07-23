import React from "react";
import "../App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../index.css";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="container" href="#home">
            <NavLink className="loginlink" to={`/`}>
              Home
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="container" href="#home">
              <NavLink className="loginlink" to={`/Form`}>
                Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
        <Form style={{ width: "40%" }} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            className="btn"
            style={{
              color: "white",
              borderColor: "White",
            }}
            variant="outline-success"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
}
