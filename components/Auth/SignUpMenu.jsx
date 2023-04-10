import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function SignUpMenu() {
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
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
