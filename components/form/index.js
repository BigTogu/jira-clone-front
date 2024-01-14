import React, { useState } from "react";
import InputField from "../inputField/index.js";
import PasswordComponent from "../password/index.js";
import Button from "../button/index.js";
import Image from "next/image";
import IconoJira from "../../public/assets/icono_Jira_Clone.svg";

const FormHeader = () => (
  <div className="flex flex-col justify-center items-center mb-6 lg:mb-12 w-full">
    <Image className="w-auto h-[70px] mb-2" src={IconoJira} alt="Icono Jira" />
    <p className="font-bold text-3xl">Jira</p>
  </div>
);

const FormField = ({ field, index }) => {
  if (field.type === "password") {
    return <PasswordComponent key={index} {...field} />;
  }

  return (
    <div key={index} className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
      <InputField {...field} />
    </div>
  );
};

const FormRow = ({ fields }) => (
  <div className="flex flex-row w-full gap-3">
    {fields.map((field, index) => (
      <div key={index} className="w-full md:w-1/2 mb-3 lg:mb-6">
        <InputField {...field} />
      </div>
    ))}
  </div>
);
const FormComponent = ({
  fields,
  handleSubmit,
  buttonLabel,
  linkInfo,
  descriptionLink,
  buttonText,
}) => {
  return (
    <form
      className=" max-w-lg md:border-[#111D37] rounded-3xl md:border-[10px] p-4 lg:p-12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:custom-gradient-mobile"
      onSubmit={handleSubmit}
    >
      <FormHeader />
      {fields.map((field, index) =>
        field.length > 1 ? (
          <FormRow key={index} fields={field} />
        ) : (
          <FormField key={index} field={field} />
        )
      )}

      <Button
        value={buttonText}
        text={descriptionLink}
        link={linkInfo}
        textLink={buttonLabel}
      />
      <p className="text-[8px] text-gray-500 flex justify-center mt-6">
        Designed and developed by silvia.kenaan@gmail.com
      </p>
    </form>
  );
};

export default FormComponent;
