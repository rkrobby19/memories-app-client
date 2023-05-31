import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./Auth.module.css";
import SignUpMenu from "./SignUpMenu";
import { Authentication } from "@/constants/auth";
import SignInForm from "../Form/SignInForm";
import SignUpForm from "../Form/SignUpForm";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <Container className={styles.container}>
      <h2 className={styles.tittle}>
        {isSignup ? Authentication.SignUp : Authentication.SignIn}
      </h2>
      {isSignup ? (
        <SignUpForm switchMode={switchMode} />
      ) : (
        <SignInForm switchMode={switchMode} />
      )}
      <SignUpMenu />
    </Container>
  );
}

export default Auth;
