import { PostDetails } from "@/components/Index";
import { getAllPostsId, getPostById } from "@/utils/posts";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function PostDetailsPage({ data }) {
  return (
    <Container
      style={{ width: "90%", backgroundColor: "white" }}
      className="my-3 py-3 rounded"
    >
      <Row className="align-items-center">
        <Col md="6" className="p-2">
          <PostDetails data={data} />
        </Col>
        <Col md="6" className="p-2">
          <img
            src={data.post.selectedFile}
            style={{ width: "95%" }}
            className="rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetailsPage;

export async function getStaticPaths() {
  const paths = await getAllPostsId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await getPostById(params.id);
  return {
    props: {
      data,
    },
  };
}
