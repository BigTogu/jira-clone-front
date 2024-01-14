import React, { useState, FormEvent } from "react";
import {
  validateEmail,
  validatePassword,
  validateTelephone,
} from "../../utils/validate/index.js";
import registerCall from "../../services/registerCall.js";
import SuccessSubmit from "../../UI/succesSubmit/index.js";
import FormComponent from "../../components/form/index.js";

const loginFields = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "silvia.kenaan@gmail.com",
    className: "w-full px-3",
  },
  {
    type: "password",
  },
];

function Login() {
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const values = [...formData.values()];
    const isEmpty = values.some((value) => value === "");

    const data = Object.fromEntries(formData.entries());

    const password = data.password;
    const telephone = data.telephone;
    const email = data.email;
    if (!validateTelephone(telephone)) {
      alert("mobile number is invalid.");
      return;
    }
    if (isEmpty) {
      alert("Please fill all the fields");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password does not meet the requirements.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Email is invalid.");
      return;
    }
    registerCall(data, setIsRegistrationSuccessful);

    event.currentTarget.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen custom-gradient">
      {!isRegistrationSuccessful ? (
        <FormComponent
          fields={loginFields}
          handleSubmit={handleSubmit}
          buttonText="Log In"
          buttonLabel="Register"
          linkInfo="/register"
          descriptionLink="Do not have an account?"
        />
      ) : (
        <SuccessSubmit />
      )}
    </div>
  );
}

export default Login;
