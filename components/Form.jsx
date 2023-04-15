import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/reducer/posts";
import FileBase from "react-file-base64";

// TODO: set create logic animation for reset form value

function InputForm({ user }) {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = async () => {
    const data = postData;
    await dispatch(addPost(data));

    // TODO create alert notification
  };

  const handleReset = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (!user.email) {
    return (
      <div
        className="border rounded p-3 bg-white m-4"
        style={{ width: "19rem" }}
      >
        <h5 className="text-center">
          Please Sign In to create your own memories and like other's memories.
        </h5>
      </div>
    );
  }

  return (
    <div className="border rounded p-3 bg-white m-4" style={{ width: "19rem" }}>
      <Form>
        <h3 className="text-center">Create a Memory</h3>

        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tags">
          <Form.Control
            type="text"
            placeholder="Tags (separate with comma)"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="selectedFile" className="mb-3">
          <FileBase
            type="file"
            size="sm"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          onClick={() => {
            handleSubmit();
            handleReset();
          }}
        >
          Submit
        </Button>
        <Button variant="danger" size="sm" onClick={handleReset}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default InputForm;
