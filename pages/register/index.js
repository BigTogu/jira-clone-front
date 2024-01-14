import IconoJira from "../../public/assets/icono_Jira_Clone.svg";
import EyeOpen from "../../public/assets/eye-opened.svg";
import EyeClose from "../../public/assets/eye-closed.svg";
import CheckmarkIcon from "../../public/assets/check-square.svg";
import Image from "next/image";
import React, { useState, FormEvent } from "react";

function validatePassword(password) {
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  return regex.test(password);
}

function validateTelephone(mobile) {
  const regex = /^\+34[679]\d{8}$/;
  return regex.test(mobile);
}

function validateEmail(email) {
  // Regular expression for email validation
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
}

function emailComponent() {
  return null;
}

export default function Register() {
  const [isMember, setIsMember] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  function handleRegister(event) {
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

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setIsRegistrationSuccessful(true);
        } else {
          setIsRegistrationSuccessful(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //clear input
    event.currentTarget.reset();
    setPassword("");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen custom-gradient">
      <form
        className=" max-w-lg lg:border-[#111D37] rounded-3xl lg:border-[10px] p-4 lg:p-12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:custom-gradient-mobile"
        onSubmit={handleRegister}
      >
        <div className="flex flex-col justify-center items-center mb-6 lg:mb-12 w-full">
          <Image className="h-[70px] mb-2" src={IconoJira} alt="Icono Jira" />

          <p className="font-bold text-3xl">Jira</p>
        </div>
        {!isMember && (
          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 focus:border-blue-400 py-3 px-4 lg:mb-3 leading-tight focus:outline-none rounded-xl bg-gray-50 text-[10px] lg:text-xs"
                type="text"
                name="username"
                placeholder="Silvia"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 focus:border-blue-400 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-xl bg-gray-50 text-[10px] lg:text-xs"
                type="text"
                name="lastName"
                placeholder="Kenaan Mulero"
              />
            </div>
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 text-[10px] lg:text-xs"
              type="email"
              name="email"
              placeholder="silvia.kenaan@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <div className="flex flex-row items-center gap-3  w-full bg-gray-50 focus:bg-white focus:border-blue-400 border-gray-200 rounded-xl py-3 mb-1 lg:mb-3 ">
              <input
                className="appearance-none block w-full rounded-xl text-gray-700 border px-4  leading-tight focus:outline-none  text-[10px] lg:text-xs border-none bg-gray-50"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="px-3">
                {isVisible ? (
                  <Image
                    className="h-5"
                    src={EyeOpen}
                    alt="Icono ojo abierto"
                    onClick={() => password && setIsVisible(!isVisible)}
                  />
                ) : (
                  <Image
                    className="h-5"
                    src={EyeClose}
                    alt="Icono ojo abierto"
                    onClick={() => password && setIsVisible(!isVisible)}
                  />
                )}
              </span>
            </div>
            <p className="text-gray-600 text-[10px] lg:text-xs italic max-lg:mb-1">
              Make it as long and as crazy as you would like
            </p>
          </div>
        </div>
        {!isMember && (
          <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2 "
                htmlFor="grid-city"
              >
                Country
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 rounded-xl text-[10px] lg:text-xs"
                type="text"
                name="country"
                placeholder="Spain"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Telephone
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 text-[10px] lg:text-xs"
                type="text"
                name="telephone"
                placeholder="+34 601200422"
              />
            </div>
          </div>
        )}
        <div className="w-3/4 lg:mb-6 md:mb-0 m-auto">
          {isRegistrationSuccessful && (
            <div className="flex items-center justify-center text-green-500 mb-2">
              <Image className="h-6" src={CheckmarkIcon} alt="Icono de éxito" />
              <span className="ml-2">Registration successful!</span>
            </div>
          )}
          <input
            type="submit"
            value="Register"
            className="bg-blue-500 text-white py-2 rounded-3xl font-semibold shadow-blue-950 shadow-md cursor-pointer w-full text-[10px] lg:text-base"
          />
        </div>
        {!isMember ? (
          <p className="text-[10px] lg:text-base text-gray-500 flex justify-center mt-6">
            Already a Member?{"\u00A0"}
            <span className="text-blue-500" onClick={() => setIsMember(true)}>
              Log In
            </span>
          </p>
        ) : (
          <p className="text-[10px] lg:text-base text-gray-500 flex justify-center mt-6">
            Not a Member?{"\u00A0"}
            <span className="text-blue-500" onClick={() => setIsMember(false)}>
              Register
            </span>
          </p>
        )}
        <p className="text-[8px] text-gray-500 flex justify-center mt-6">
          Designed and developed by silvia.kenaan@gmail.com
        </p>
      </form>
    </div>
  );
}
