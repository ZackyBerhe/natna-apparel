import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="px-2 py-2.5 flex justify-center items-center bg-primary gap-2 text-light text-sm hover:shadow-sm hover:shadow-primary/50 transition-shadow ease-in-out duration-200 w-full">
        {children}
      </button>
    </>
  );
};

export default Button;
