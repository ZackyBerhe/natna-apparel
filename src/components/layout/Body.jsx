import React from "react";

const Body = ({ children, custom }) => {
  return (
    <>
      <div
        className={`layout w-full flex flex-col gap-4 text-primary font-secondary ${custom}`}
      >
        {children}
      </div>
    </>
  );
};

export default Body;
