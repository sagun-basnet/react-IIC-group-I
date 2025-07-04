import React from "react";

const Form = ({ type }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <input type="text" placeholder="Enter your name" />
      <button className="p-2 px-4 bg-blue-500 rounded-md">{type}</button>
    </div>
  );
};

export default Form;
