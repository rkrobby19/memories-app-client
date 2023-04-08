import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UpdateModal from "./UpdateModal";
import moment from "moment";

// TODO add like counter

function Post({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const date = new Date(data.createdAt);
  const d = date.toDateString();

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
              <h5 className="fw-bold text-dark">{data.creator}</h5>
            </div>
            <div>
              <a className="icon-link">
                <i
                  className="fa-solid fa-pen-to-square text-dark"
                  onClick={handleShow}
                ></i>
              </a>
            </div>
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
          onClick={() => alert("Like Clicked")}
        >
          <i className="fa-solid fa-thumbs-up"></i> Like
        </Button>
      </Card>

      <UpdateModal show={show} handleClose={handleClose} id={data._id} />
    </div>
  );
}

export default Post;
