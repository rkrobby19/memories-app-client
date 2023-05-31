import React, { useState } from "react";
import Link from "next/link";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { Authentication } from "@/constants/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import FormFeedback from "./formFeedback";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/reducer/user";

function SignInForm({ switchMode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters minimum")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const { status, data } = await dispatch(signIn(values)).unwrap();
      if (status === 200) {
        router.push("/posts?pages=1");
      } else {
        // TODO add toast error notification
        alert(data.message);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
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

      <Row className="mb-4">
        <Col className=" d-flex justify-content-center align-items-center">
          <Form.Group className="mb-3">
            <Form.Check required type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
        <Col>
          <Link href="#!">Forgot password?</Link>
        </Col>
      </Row>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          {Authentication.SignIn}
        </Button>
      </div>

      <div className="text-center">
        <p>
          Not a member?{" "}
          <Link href="" onClick={() => switchMode()}>
            {Authentication.SignUp}
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default SignInForm;
