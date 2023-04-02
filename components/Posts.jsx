import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2">
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Posts;
