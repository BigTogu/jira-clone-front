import React, { useState } from "react";
import { validateFields } from "../../utils/validate/index.js";
import registerCall from "../../services/registerCall.js";
import SuccessSubmit from "../../UI/succesSubmit/index.js";
import FormComponent from "../../components/form/index.js";

const registerFields = [
  [
    {
      label: "First Name",
      name: "username",
      type: "text",
      placeholder: "Silvia",
      className: "",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Kenaan Mulero",
      className: "",
    },
  ],
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
  [
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Spain",
      className: "",
    },
    {
      label: "Telephone",
      name: "telephone",
      type: "text",
      placeholder: "+34 601200422",
      className: "",
    },
  ],
];

export default function Register() {
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = [...formData.values()];
    const data = Object.fromEntries(formData.entries());
    const { password, telephone, email } = data;

    const errorMessage = validateFields(values, password, telephone, email);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    registerCall(data, setIsRegistrationSuccessful);
    event.currentTarget.reset();
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen custom-gradient">
      {!isRegistrationSuccessful ? (
        <FormComponent
          fields={registerFields}
          handleSubmit={handleSubmit}
          buttonText="Register"
          buttonLabel="Log In"
          linkInfo="/login"
          descriptionLink="Already a Member?"
        />
      ) : (
        <SuccessSubmit />
      )}
    </div>
  );
}
