import React, { useState } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import styles from "./Auth.module.css";
import Link from "next/link";
import SignUpMenu from "./SignUpMenu";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "@/redux/reducer/user";
import { useRouter } from "next/router";
import { Authentication, Message } from "@/constants/auth";
import FormFeedback from "./formFeedback";

function Auth() {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    form: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { id: name, value } = e.target;

    setInputs({ ...inputs, [name]: value });

    setTouched({ ...touched, [name]: true });
  };

  const handleOnBlur = (e) => {
    const { id: name, value } = e.target;

    validateField({ name, value });

    validateForm();
  };

  const validateField = ({ name, value }) => {
    switch (name) {
      case Authentication.FirstName:
        if (value.length >= 3) {
          setErrors({
            ...errors,
            [name]: { isError: false, message: Message.Good },
          });
        } else {
          setErrors({
            ...errors,
            [name]: { isError: true, message: Message.MinimumName },
          });
        }

        break;
      case Authentication.LastName:
        if (value.length >= 3) {
          setErrors({
            ...errors,
            [name]: { isError: false, message: Message.Good },
          });
        } else {
          setErrors({
            ...errors,
            [name]: { isError: true, message: Message.MinimumName },
          });
        }

        break;
      case Authentication.Email:
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(mailformat)) {
          setErrors({
            ...errors,
            [name]: { isError: true, message: Message.EmailInvalid },
          });
        } else {
          setErrors({
            ...errors,
            [name]: { isError: false, message: Message.EmailValid },
          });
        }

        break;
      case Authentication.Password:
        if (value.length >= 6) {
          setErrors({
            ...errors,
            [name]: { isError: false, message: Message.Good },
          });
        } else {
          setErrors({
            ...errors,
            [name]: { isError: true, message: Message.MinimumPass },
          });
        }

        break;
      case Authentication.ConfirmPassword:
        if (value.length >= 6) {
          const isConfirm = inputs[name] === inputs[Authentication.Password];
          if (isConfirm) {
            setErrors({
              ...errors,
              [name]: { isError: false, message: Message.MatchPass },
            });
          } else {
            setErrors({
              ...errors,
              [name]: { isError: true, message: Message.WrongPass },
            });
          }
        } else {
          setErrors({
            ...errors,
            [name]: { isError: true, message: Message.MinimumPass },
          });
        }

        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (isSignup) {
      if (
        !errors?.firstName?.isError &&
        !errors?.lastName?.isError &&
        !errors?.email?.isError &&
        !errors?.password?.isError &&
        !errors?.confirmPassword?.isError
      ) {
        setInputs({ ...inputs, form: true });
      } else {
        setInputs({ ...inputs, form: false });
      }
    } else {
      if (!errors?.email?.isError && !errors?.password?.isError) {
        setInputs({ ...inputs, form: true });
      } else {
        setInputs({ ...inputs, form: false });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup) {
      console.log(`signup`);
      dispatch(signUp(inputs));
      router.push("/");
    } else {
      console.log(`signin`);
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
      <h2 className={styles.tittle}>
        {isSignup ? Authentication.SignUp : Authentication.SignIn}
      </h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {isSignup && (
          <>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    className={`${
                      touched.firstName
                        ? errors.firstName?.isError
                          ? "border-danger"
                          : "border-success"
                        : ""
                    }`}
                  />
                  <FormFeedback value={errors.firstName} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    className={`${
                      touched.lastName
                        ? errors.lastName?.isError
                          ? "border-danger"
                          : "border-success"
                        : ""
                    }`}
                  />
                  <FormFeedback value={errors.lastName} />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className={`${
              touched.email
                ? errors.email?.isError
                  ? "border-danger"
                  : "border-success"
                : ""
            }`}
          />
          <FormFeedback value={errors.email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              required
              type={
                showPassword ? Authentication.Text : Authentication.Password
              }
              placeholder="Password"
              id="password"
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={`${
                touched.password
                  ? errors.password?.isError
                    ? "border-danger"
                    : "border-success"
                  : ""
              }`}
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
          <FormFeedback value={errors.password} />
        </Form.Group>

        {isSignup && (
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                required
                type={
                  showConfirm ? Authentication.Text : Authentication.Password
                }
                placeholder="Confirm Password"
                id="confirmPassword"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                className={`${
                  touched.confirmPassword
                    ? errors.confirmPassword?.isError
                      ? "border-danger"
                      : "border-success"
                    : ""
                }`}
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
            <FormFeedback value={errors.confirmPassword} />
          </Form.Group>
        )}

        {!isSignup && (
          <>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center align-items-center">
                {/* Checkbox */}
                <Form.Group className="mb-3">
                  <Form.Check required type="checkbox" label="Check me out" />
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
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={!inputs.form}
          >
            {isSignup ? Authentication.SignUp : Authentication.SignIn}
          </Button>
        </div>

        <div className="text-center">
          {isSignup ? (
            <>
              <p>
                Already have an account?{" "}
                <Link href="" onClick={switchMode}>
                  {Authentication.SignIn}
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>
                Not a member?{" "}
                <Link href="" onClick={switchMode}>
                  {Authentication.SignUp}
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
