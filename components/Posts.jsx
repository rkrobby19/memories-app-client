import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function Posts({ user }) {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2">
        {posts.map((post) => (
          <Post key={post._id} data={post} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
