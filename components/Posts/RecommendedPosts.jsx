import { useRouter } from "next/router";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function RecommendedPosts({ posts }) {
  const router = useRouter();
  const openPost = (id) => {
    router.push(`/posts/${id}`);
  };
  return (
    <Row xs={1} md={4} className="g-4">
      {posts.map((post) => (
        <Col
          key={post._id}
          onClick={() => {
            openPost(post._id);
          }}
        >
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.name}</Card.Text>
              <Card.Text>{post.message.substring(0, 80)}...</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={post.selectedFile} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default RecommendedPosts;
