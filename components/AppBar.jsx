import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <Container>
      <Navbar bg="light" className="rounded">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home" className="fs-1 fw-bold font-monospace">
            Memories <i className="fa-solid fa-images"></i>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppBar;
