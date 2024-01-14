import React from "react";

function InputField({ label, placeholder, name, type, className }) {
  return (
    <div className={className}>
      <label className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 rounded-xl text-[10px] lg:text-xs"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
