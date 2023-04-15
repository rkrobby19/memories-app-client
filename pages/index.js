import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/reducer/posts";
import LoadingSpinner from "@/components/Animation/LoadingSpinner";
import AppBar from "@/components/Navbar/AppBar";
import InputForm from "@/components/Form/InputForm";
import Posts from "@/components/Posts/Posts";

export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.user.user);

  const postStatus = useSelector((state) => state.posts.status);

  let content;
  if (postStatus === "loading") {
    content = (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <LoadingSpinner />;
      </div>
    );
  } else if (postStatus === "succeeded") {
    content = <Posts data={posts} user={user} />;
  } else if (postStatus === "failed") {
    content = (
      <div>
        <p>Error happens</p>
        {error}
      </div>
    );
  }

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <>
      <Head>
        <title>Memories App</title>
        <title>Memories App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* TODO: reverse row stack when resizing */}
        <Container>
          <AppBar />
          <Row>
            <Col xs={12} md={6} lg={8}>
              {content}
            </Col>
            <Col xs={12} md={6} lg={4}>
              <InputForm user={user} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
