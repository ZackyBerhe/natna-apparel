import React from "react";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="text-primary text-sm placeholder:text-primary/50 placeholder:text-sm px-2 py-2.5 border border-primary focus:border-primary focus:ring-primary w-full"
      />
    </>
  );
};

export default Input;
