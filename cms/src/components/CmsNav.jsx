import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'

export const CmsNav = () => {
    const user = useSelector(state => state.user.value)


  return Object.keys(user).length ? 
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Reed Monkey</Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Item>
              <NavLink to="/staffs" className="nav-link">
                <i className="fa-solid fa-users me-2"></i>Staffs
              </NavLink>
            </Nav.Item>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <NavDropdown title={<><i className="fa-solid fa-user-circle me-2"></i>Demo user</>}>
              <NavDropdown.Item>
                <Link to="/profile" className="dropdown-item">
                  <i className="fa-solid fa-user-edit me-2"></i>Edit Profile
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>: null
  
}
