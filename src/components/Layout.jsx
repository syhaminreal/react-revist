import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Outlet, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Layout = () => {
  return (
    <Container fluid className="bg-white">
      <Row>
        <Navbar expand="lg" className="bg-primary navbar-dark">
          <Container>
            <Navbar.Brand>Demo</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Item>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
