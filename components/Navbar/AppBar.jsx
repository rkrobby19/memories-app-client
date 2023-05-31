import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Container, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOut, setCurrentUser } from "@/redux/reducer/user";
import { useRouter } from "next/router";
import decode from "jwt-decode";

function AppBar() {
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogout = () => {
    dispatch(logOut());
    router.push("/auth");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && token) {
      dispatch(setCurrentUser(user));
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        userLogout();
      }
    }
  }, [router]);

  return (
    <Navbar bg="light" className="rounded-bottom border-bottom">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="ms-4">
          {currentUser?._id ? (
            <Link
              href="/posts?pages=1"
              className="text-decoration-none text-dark fs-3 fw-bold font-monospace"
            >
              Memories <i className="fa-solid fa-images"></i>
            </Link>
          ) : (
            <Link
              href="/"
              className="text-decoration-none text-dark fs-3 fw-bold font-monospace"
            >
              Memories <i className="fa-solid fa-images"></i>
            </Link>
          )}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {currentUser?._id ? (
            <NavDropdown
              title={currentUser.firstName}
              id="basic-nav-dropdown"
              className="me-4"
            >
              <NavDropdown.Item
                href="#"
                onClick={() => console.log(currentUser)}
              >
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
  );
}

export default AppBar;
