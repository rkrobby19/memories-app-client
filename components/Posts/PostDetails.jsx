import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

function PostDetails({ data }) {
  return (
    <Card className="border-0 m-3">
      <Card.Title>{data.post.title}</Card.Title>
      <Card.Text className="text-secondary">
        {data.post.tags.map((tag) => `#${tag} `)}
      </Card.Text>
      <Card.Text>{data.post.message}</Card.Text>
      <Card.Text>Created By: {data.post.name}</Card.Text>
      <Card.Text>{moment(data.post.createdAt).fromNow()}</Card.Text>
    </Card>
  );
}

export default PostDetails;
