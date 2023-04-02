import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputForm() {
  const [inputData, setInputData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setInputData((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const handleSubmit = async () => {
    const data = inputData;
  };

  const handleReset = () => {
    setInputData({
      creator: "",
      title: "",
      message: "",
      tags: "",
    });
  };

  return (
    <div className="border rounded p-3">
      <Form>
        <h3>Create a Memory</h3>
        <Form.Group className="mb-3" controlId="creator">
          <Form.Control
            type="text"
            placeholder="Creator"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tags">
          <Form.Control
            type="text"
            placeholder="Tags (separate with comma)"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control type="file" size="sm" onChange={handleOnChange} />
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
        <Button variant="danger" size="sm" onClick={() => handleReset()}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default InputForm;
