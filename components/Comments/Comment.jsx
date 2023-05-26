import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

function Comment({ comment }) {
  return (
    <Card className="p-3 my-2">
      <Card.Title>{comment.username}</Card.Title>
      <Card.Text>{comment.comment}</Card.Text>
      <Card.Text className="text-secondary">
        {moment(comment.createdAt).fromNow()}
      </Card.Text>
    </Card>
  );
}

export default Comment;
