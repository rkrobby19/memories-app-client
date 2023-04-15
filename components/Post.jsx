import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UpdateModal from "./UpdateModal";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost } from "@/redux/reducer/posts";
import { useRouter } from "next/router";

function Post({ data }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const router = useRouter();

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
          <i class="fa-regular fa-thumbs-up"></i> {data.likes.length}{" "}
          {data.likes.length > 1 ? "Likes" : "Like"}
        </>
      );
    }

    return (
      <>
        <i class="fa-regular fa-thumbs-up"></i>
      </>
    );
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && token) {
      setUser(user);
    }
  }, [router]);

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
