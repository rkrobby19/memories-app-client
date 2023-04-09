import React from "react";

function SignUpMenu() {
  return (
    <div className="text-center">
      <p>or Sign up with:</p>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f" />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google" />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-twitter" />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github" />
      </button>
    </div>
  );
}

export default SignUpMenu;
