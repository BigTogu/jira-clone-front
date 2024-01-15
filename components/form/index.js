import React, { useState, useRef } from "react";
import InputField from "../inputField/index.js";
import PasswordComponent from "../password/index.js";
import Button from "../button/index.js";
import Image from "next/image";
import IconoJira from "../../public/assets/icono_Jira_Clone.svg";

const FormHeader = () => (
  <div className="flex flex-col justify-center items-center mb-6 md:my-8 w-full">
    <Image className="w-auto h-[70px] mb-2" src={IconoJira} alt="Icono Jira" />
    <p className="font-bold text-3xl">Jira</p>
  </div>
);

const FormField = ({ field, index }) => {
  if (field.type === "password") {
    return <PasswordComponent key={index} {...field} />;
  }

  return (
    <div key={index} className="flex flex-wrap -mx-3 mb-1 md:mb-6">
      <InputField {...field} />
    </div>
  );
};

const FormRow = ({ fields }) => (
  <div className="flex flex-row w-full gap-3">
    {fields.map((field, index) => (
      <div key={index} className="w-full md:w-1/2 mb-3 md:mb-6">
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
  const boundingRef = useRef(null);
  return (
    <div className="[perspective:800px]">
      <form
        className="group relative max-w-lg md:border-[#111D37] rounded-3xl md:border-[10px] px-4 ,md:p-4 md:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:custom-gradient-mobile hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] transition-transform ease-out"
        onSubmit={handleSubmit}
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(e) => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(e) => {
          if (!boundingRef.current) return;
          const x = e.clientX - boundingRef.current.left;
          const y = e.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          e.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          e.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
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
        <div className="absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y), rgba(255,255,255,0.3)_20%,transparent_80%)] pointer-events-none"></div>
      </form>
    </div>
  );
};

export default FormComponent;
