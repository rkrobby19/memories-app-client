import { PostDetails, RecommendedPosts } from "@/components/Index";
import { fetchPostsBySearch } from "@/redux/reducer/posts";
import { getAllPostsId, getPostById } from "@/services/posts";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

function PostDetailsPage({ data }) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const recommendedPosts = posts.filter((post) => post._id !== data.post._id);

  useEffect(() => {
    dispatch(
      fetchPostsBySearch({ query: "none", tags: data.post.tags.join(",") })
    ).then((result) => setPosts(result.payload.posts));
  }, [data]);
  return (
    <>
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
      <Container>
        <h4>You Might Also Like:</h4>
        <RecommendedPosts posts={recommendedPosts} />
      </Container>
    </>
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
