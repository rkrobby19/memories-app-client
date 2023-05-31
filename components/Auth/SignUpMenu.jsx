import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import decode from "jwt-decode";
import { useRouter } from "next/router";

const DB_URI = process.env.NEXT_PUBLIC_DB_URI;

function SignUpMenu() {
  const router = useRouter();

  const loginGoogle = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await axios.post(`${DB_URI}/auth/google`, {
        code,
      });
      // console.log(tokens);

      const accessToken = tokens.data.tokens.id_token;
      const user = decode(accessToken);

      localStorage.setItem("token", JSON.stringify(accessToken));
      localStorage.setItem(
        "user",
        JSON.stringify({
          _id: user.sub,
          email: user.email,
          firstName: user.given_name,
          lastName: user.family_name,
        })
      );
      router.push("/posts?pages=1");
      // console.log(tokens.data.tokens.id_token); <- Google JWT access token
      // console.lgo(tokens.data.tokens.refresh_token) <- send this to BE for refresh the access token
    },
    flow: "auth-code",
  });

  const loginSocial = () => {
    alert(`Coming soon!`);
  };

  return (
    <div className="text-center">
      <p>or Sign up with:</p>
      <button
        type="button"
        className="btn btn-link btn-floating mx-1"
        onClick={() => loginSocial()}
      >
        <i className="fab fa-facebook-f" />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1"
        onClick={() => loginGoogle()}
      >
        <i className="fab fa-google" />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1"
        onClick={() => loginSocial()}
      >
        <i className="fab fa-twitter" />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1"
        onClick={() => loginSocial()}
      >
        <i className="fab fa-github" />
      </button>
    </div>
  );
}

export default SignUpMenu;
