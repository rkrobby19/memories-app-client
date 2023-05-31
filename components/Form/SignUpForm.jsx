import React, { useState } from "react";
import Link from "next/link";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { Authentication } from "@/constants/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormFeedback from "./formFeedback";
import { signUp } from "@/redux/reducer/user";
import { useDispatch } from "react-redux";

function SignUpForm({ switchMode }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Minimum of 3 characters")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Minimum of 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters minimum")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(8, "Must be 8 characters minimum")
        .oneOf([Yup.ref("password"), null], "Passwords doesnt match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const { status, data } = await dispatch(signUp(values)).unwrap();
      if (status === 201) {
        router.push("/posts?pages=1");
      } else {
        // TODO add toast error notification
        alert(data.message);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              id="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              isValid={formik.touched.firstName && !formik.errors.firstName}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <FormFeedback message={formik.errors.firstName} />
            ) : null}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              id="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <FormFeedback message={formik.errors.lastName} />
            ) : null}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Control
          required
          type="email"
          placeholder="Email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <FormFeedback message={formik.errors.email} />
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            required
            type={showPassword ? Authentication.Text : Authentication.Password}
            placeholder="Password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="outline-secondary"
            id="showPassword"
            onClick={togglePassword}
          >
            {showPassword ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </Button>
        </InputGroup>
        {formik.touched.password && formik.errors.password ? (
          <FormFeedback message={formik.errors.password} />
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            required
            type={showConfirm ? Authentication.Text : Authentication.Password}
            placeholder="Confirm Password"
            id="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            isValid={
              formik.touched.confirmPassword && !formik.errors.confirmPassword
            }
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button
            variant="outline-secondary"
            id="showConfirmPassword"
            onClick={toggleConfirm}
          >
            {showConfirm ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </Button>
        </InputGroup>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <FormFeedback message={formik.errors.confirmPassword} />
        ) : null}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          {Authentication.SignUp}
        </Button>
      </div>
      <div className="text-center">
        <p>
          Already have an account?{" "}
          <Link href="" onClick={() => switchMode()}>
            {Authentication.SignIn}
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default SignUpForm;
