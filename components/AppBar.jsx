import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <Container>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            Memories <i className="fa-solid fa-images"></i>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppBar;
