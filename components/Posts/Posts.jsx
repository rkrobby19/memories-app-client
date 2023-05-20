import React from "react";
import Post from "./Post";

function Posts({ data, user }) {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2">
        {data.map((post) => (
          <Post key={post._id} data={post} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
