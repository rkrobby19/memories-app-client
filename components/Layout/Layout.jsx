import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "../Navbar/AppBar";
import InputForm from "../Form/InputForm";
import MyPagination from "../MyPagination";
import { useSelector } from "react-redux";
import Search from "../SearchBar";

function Layout({ children }) {
  const user = useSelector((state) => state.user.user);

  return (
    <main>
      {/* TODO: reverse row stack when resizing */}
      <Container>
        <AppBar />
        <Row>
          <Col xs={12} md={6} lg={8}>
            {children}
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Search />
            <InputForm user={user} />
            <Container
              className="d-flex justify-content-center"
              style={{ width: "19rem" }}
            >
              <MyPagination />
            </Container>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Layout;
