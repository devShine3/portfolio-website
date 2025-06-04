import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profileImage from '../assets/shine.jpeg' // Adjust the path as necessary

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>

        <div className="d-flex align-items-center me-3">
          {/* Circular profile image */}
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle me-2"
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'cover'
            }}
          />

          {/* Color Indicators circles on the left side */}
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-danger me-1" style={{ width: '12px', height: '12px' }}></div>
            <div className="rounded-circle bg-dark me-1" style={{ width: '12px', height: '12px' }}></div>
            <div className="rounded-circle bg-info" style={{ width: '12px', height: '12px' }}></div>
          </div>
        </div>

        <Navbar.Brand as={Link} to="/">HTET AUNG SHINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Color Indicators on the right side */}
        <div className="d-flex align-items-center ms-2">
          <div className="rounded-circle bg-danger me-1" style={{ width: '12px', height: '12px' }}></div>
          <div className="rounded-circle bg-dark me-1" style={{ width: '12px', height: '12px' }}></div>
          <div className="rounded-circle bg-info" style={{ width: '12px', height: '12px' }}></div>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header
