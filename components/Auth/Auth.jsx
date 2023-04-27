import React, { useState } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import styles from "./Auth.module.css";
import Link from "next/link";
import SignUpMenu from "./SignUpMenu";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "@/redux/reducer/user";
import { useRouter } from "next/router";

// TODO add form validation

function Auth() {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  const handleOnChange = (e) => {
    const name = e.target.id;
    const { value } = e.target;

    setInputs((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const handleSubmit = async () => {
    // TODO sign up logic redirection
    if (isSignup) {
      dispatch(signUp(inputs));
      router.push("/");
    } else {
      dispatch(signIn(inputs));
      router.push("/");
    }
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <Container className={styles.container}>
      <h2 className={styles.tittle}>{isSignup ? "Sign Up" : "Sign In"}</h2>
      <Form>
        {isSignup && (
          <>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              onChange={handleOnChange}
            />
            <Button
              variant="outline-secondary"
              id="showPassword"
              onClick={togglePassword}
            >
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </Button>
          </InputGroup>
        </Form.Group>

        {isSignup && (
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                onChange={handleOnChange}
              />
              <Button
                variant="outline-secondary"
                id="showConfirmPassword"
                onClick={toggleConfirm}
              >
                {showConfirm ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </Button>
            </InputGroup>
          </Form.Group>
        )}

        {!isSignup && (
          <>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center align-items-center">
                {/* Checkbox */}
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </div>

              <div className="col">
                {/* Simple link */}
                <Link href="#!">Forgot password?</Link>
              </div>
            </div>
          </>
        )}

        {/* Submit button */}
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </div>

        <div className="text-center">
          {isSignup ? (
            <>
              <p>
                Already have an account?{" "}
                <Link href="" onClick={switchMode}>
                  Sign In
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>
                Not a member?{" "}
                <Link href="" onClick={switchMode}>
                  Sign Up
                </Link>
              </p>
            </>
          )}
        </div>
      </Form>
      <SignUpMenu />
    </Container>
  );
}

export default Auth;
