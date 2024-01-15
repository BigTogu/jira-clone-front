import EyeOpen from "../../public/assets/eye-opened.svg";
import EyeClose from "../../public/assets/eye-closed.svg";

import Image from "next/image";
import React, { useState } from "react";

function PasswordComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Password
        </label>
        <div className="flex flex-row items-center gap-3  w-full bg-gray-50 focus:bg-white focus:border-blue-400 border-gray-200 rounded-xl py-2 lg:py-3 mb-1 lg:mb-3 ">
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
                className="w-auto h-5"
                src={EyeOpen}
                alt="Icono ojo abierto"
                onClick={() => password && setIsVisible(!isVisible)}
              />
            ) : (
              <Image
                className="w-auto h-5"
                src={EyeClose}
                alt="Icono ojo cerrado"
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
  );
}

export default PasswordComponent;
