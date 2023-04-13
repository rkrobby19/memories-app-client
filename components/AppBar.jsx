import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/reducer/user";
import { useRouter } from "next/router";
import decode from "jwt-decode";

function AppBar() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogout = () => {
    dispatch(logOut());
    setUser({});
    router.push("/auth");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && token) {
      setUser(user);
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logOut();
      }
    }
  }, [router]);

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
            {user?.email ? (
              <NavDropdown
                title={user.firstName}
                id="basic-nav-dropdown"
                className="me-4"
              >
                <NavDropdown.Item href="#" onClick={() => console.log(user)}>
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={() => userLogout()}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link href="/auth" className="me-4">
                <Button>Sign In</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppBar;
