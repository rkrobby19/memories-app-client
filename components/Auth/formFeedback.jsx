import React from "react";

function FormFeedback({ value }) {
  return (
    <p className={value?.isError ? "text-danger" : "text-success"}>
      {value?.message}
    </p>
  );
}

export default FormFeedback;
