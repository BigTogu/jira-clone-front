import React, { useState, useRef } from "react";
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
  // [
  //   {
  //     label: "Country",
  //     name: "country",
  //     type: "text",
  //     placeholder: "Spain",
  //     className: "",
  //   },
  //   {
  //     label: "Telephone",
  //     name: "telephone",
  //     type: "text",
  //     placeholder: "+34 601200422",
  //     className: "",
  //   },
  // ],
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
  const boundingRef = useRef(null);

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center custom-gradient md:gap-11 lg:gap-24">
      <div className="w-1/2 flex  justify-end flex-col md:items-end md:leading-[4rem] lg:leading-[6rem]  md:text-6xl font-bold text-end max-md:hidden">
        <h2 className="">Be</h2>
        <h2 className="">More</h2>
        <h2 className="">Productive</h2>
      </div>
      <div className="flex flex-col justify-center items-start h-screen md:w-1/2 ">
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
    </div>
  );
}
