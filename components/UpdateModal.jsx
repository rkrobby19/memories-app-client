import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatedPost } from "@/redux/reducer/posts";

function UpdateModal({ show, handleClose, id }) {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    id ? state.posts.posts.find((message) => message._id === id) : null
  );

  const [inputData, setInputData] = useState({
    creator: post.creator,
    title: post.title,
    message: post.message,
    tags: post.tags,
    selectedFile: post.selectedFile,
  });

  const handleOnChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setInputData((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        setInputData({ ...inputData, selectedFile: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Memories</Modal.Title>
      </Modal.Header>
      <Container>
        <Form.Group className="my-3" controlId="creator">
          <Form.Control
            type="text"
            placeholder="Creator"
            defaultValue={post.creator}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            defaultValue={post.title}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            defaultValue={post.message}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tags">
          <Form.Control
            type="text"
            placeholder="Tags (separate with comma)"
            defaultValue={post.tags}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group
          controlId="selectedFile"
          className="mb-3"
          onChange={handleFileChange}
        >
          <Form.Control type="file" />
        </Form.Group>
      </Container>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <i className="fa-solid fa-ban"></i> Discard
        </Button>
        <Button variant="danger" onClick={() => dispatch(deletePost(id))}>
          <i className="fa-solid fa-trash"></i> Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(updatedPost({ id, inputData }));
            handleClose();
          }}
        >
          <i className="fa-solid fa-floppy-disk"></i> Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModal;
