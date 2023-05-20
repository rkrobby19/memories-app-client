import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatedPost } from "@/redux/reducer/posts";

// TODO update tags by separate comma

function UpdateModal({ show, handleClose, id, post }) {
  const dispatch = useDispatch();
  // const post = useSelector((state) =>
  //   id ? state.posts.posts.find((post) => post._id === id) : null
  // );

  const [inputData, setInputData] = useState({
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
        <Form.Group className="my-3" controlId="title">
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
            dispatch(
              updatedPost({
                id,
                inputData,
              })
            );
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
