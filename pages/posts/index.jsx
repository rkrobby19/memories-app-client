import React from "react";
import { useSelector } from "react-redux";
import { Posts, LoadingSpinner, Layout } from "@/components/Index";
import { Status } from "@/constants/reducer";

function PostIndex() {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);

  const postStatus = useSelector((state) => state.posts.status);

  let content;
  if (postStatus === Status.Loading) {
    content = (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <LoadingSpinner />;
      </div>
    );
  } else if (postStatus === Status.Success) {
    content = <Posts data={posts} user={user} />;
  } else if (postStatus === Status.Failed) {
    content = (
      <div>
        <p>Error happens</p>
      </div>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
}

export default PostIndex;

PostIndex.getLayout = function getLayout(PostIndex) {
  return <Layout>{PostIndex}</Layout>;
};
