
import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">

        <span className="close-btn">x</span>

        {/* <div className="form-content-left"></div> */}
        {/* this is the logic for sign up button to redirect to FormSuccess.js */}
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;