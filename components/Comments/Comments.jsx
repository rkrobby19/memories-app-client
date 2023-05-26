import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  return (
    <>
      {comments.map((c, i) => (
        <Comment comment={c} key={i} />
      ))}
    </>
  );
}

export default Comments;
