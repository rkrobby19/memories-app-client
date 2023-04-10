import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function AppBar() {
  return (
    <Container>
      <Navbar bg="light" className="rounded">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="ms-4">
            <Link
              href="/"
              className="text-decoration-none text-dark fs-3 fw-bold font-monospace"
            >
              Memories <i className="fa-solid fa-images"></i>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Link href="/auth" className="me-4">
              <Button>Sign In</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppBar;
