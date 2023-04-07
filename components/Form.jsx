import { addPost } from "@/redux/reducer/posts";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

function InputForm() {
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
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    // TODO: selectedFile clear doesnt work
  };

  const test = () => {
    console.log(postData);
  };

  return (
    <div className="border rounded p-3 bg-light m-4">
      <Form>
        <h3 className="text-center">Create a Memory</h3>
        <Form.Group className="mb-3" controlId="creator">
          <Form.Control
            type="text"
            placeholder="Creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </Form.Group>

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
            // TODO: filebase payload too large
          />
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleSubmit}>
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
