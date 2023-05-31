import { commentPost } from "@/redux/reducer/posts";
import React, { useEffect, useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function CommentSection({ id, setNewComment }) {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [userData, setUserData] = useState({});

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };
  const handleOnSubmit = async () => {
    if (userData) {
      const finalComment = {
        userId: userData._id,
        username: `${userData.firstName} ${userData.lastName}`,
        comment: comment,
      };
      const res = await dispatch(commentPost({ finalComment, id }));
      setNewComment(res.payload.data.post.comments);
      setComment("");
    } else {
      alert(`Please login first!`);
    }
  };
  const handleOnCancel = () => {
    setComment("");
  };

  useEffect(() => {
    let user;
    typeof window !== "undefined"
      ? (user = JSON.parse(localStorage.getItem("user")))
      : null;
    setUserData(user);
  }, []);

  return (
    <Card className="p-3 mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Write Your Comment Here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="What is your view?"
            onChange={handleOnChange}
            value={comment}
          />
        </Form.Group>

        <Row>
          <Col className="d-flex flex-row-reverse ">
            <Button variant="danger" className="mx-1" onClick={handleOnCancel}>
              Cancel
            </Button>

            <Button
              className="mx-1"
              disabled={!comment}
              onClick={handleOnSubmit}
            >
              Post Comment
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default CommentSection;
