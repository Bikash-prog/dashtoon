import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Dashtoon</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
