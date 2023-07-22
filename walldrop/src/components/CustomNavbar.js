import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CustomNavbar = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-left">
          {t('navbar.brand')}
        </Navbar.Brand>
      </Container>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about">
            {t('navbar.about')}
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            {t('navbar.contact')}
          </Nav.Link>
          <Nav.Link as={Link} to="/faq">
            {t('navbar.faq')}
          </Nav.Link>
          <Nav.Link as={Link} to="/explore">
            {t('navbar.explore')}
          </Nav.Link>
          <Nav.Link as={Link} to="/upload">
            {t('navbar.upload')}
          </Nav.Link>
          <Nav.Link as={Link} to="/join" className="joinbtn">
            {t('navbar.join')}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
