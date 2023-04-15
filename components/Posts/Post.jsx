import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost } from "@/redux/reducer/posts";
import UpdateModal from "../Modals/UpdateModal";

function Post({ data, user }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Likes = () => {
    if (data.likes.length > 0) {
      return data.likes.find((like) => like === user?._id) ? (
        <>
          <i className="fa-solid fa-thumbs-up"></i> {data.likes.length}{" "}
          {data.likes.length > 1 ? "Likes" : "Like"}
        </>
      ) : (
        <>
          <i className="fa-regular fa-thumbs-up"></i> {data.likes.length}{" "}
          {data.likes.length > 1 ? "Likes" : "Like"}
        </>
      );
    }

    return (
      <>
        <i className="fa-regular fa-thumbs-up"></i>
      </>
    );
  };

  return (
    <div style={{ width: "18rem" }}>
      <Card style={{ width: "100%" }} className="m-4">
        <Card.Img
          style={{ height: "10rem", objectFit: "cover" }}
          variant="top"
          src={data.selectedFile}
        />

        <div className="container z-3 position-absolute mt-2">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="fw-bold text-dark">{data.name}</h5>
            </div>

            {data.creator === user._id && (
              <div>
                <a className="icon-link">
                  <i
                    className="fa-solid fa-pen-to-square text-dark"
                    onClick={handleShow}
                  ></i>
                </a>
              </div>
            )}
          </div>
          <p className="text-dark text-start">
            {moment(data.createdAt).fromNow()}
          </p>
        </div>

        <Card.Body className="text-start">
          <Card.Text className="text-center text-secondary">
            {data.tags.map((tag) => `#${tag} `)}
          </Card.Text>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.message}</Card.Text>
        </Card.Body>

        <Button
          variant="primary"
          className="m-2"
          onClick={() => dispatch(likePost(data._id))}
          disabled={!user._id}
        >
          <Likes />
        </Button>
      </Card>

      <UpdateModal show={show} handleClose={handleClose} id={data._id} />
    </div>
  );
}

export default Post;
