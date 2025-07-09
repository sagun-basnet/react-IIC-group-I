import React, { useState } from "react";

const Form = () => {
  const user = {
    email: "jhon@gmail.com",
    password: "12345678",
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length === 0) {
      alert("Name fild is required");
      return;
    }
    if (formData.phone.length < 10) {
      alert("Enter correct phone number");
      return;
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className="h-screen grid place-items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 rounded shadow-2xl gap-8 w-[40%]"
      >
        <h1 className="text-2xl text-center">Registration Form</h1>
        <input
          onChange={handleChange}
          className="border-2 p-2 rounded-lg w-full"
          type="text"
          name="name"
          id=""
          placeholder="Enter your name"
        />
        <input
          onChange={handleChange}
          className="border-2 p-2 rounded-lg w-full"
          type="number"
          name="phone"
          id=""
          placeholder="Enter your phone number"
        />
        <input
          onChange={handleChange}
          className="border-2 p-2 rounded-lg w-full"
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          className="border-2 p-2 rounded-lg w-full"
          type="password"
          name="password"
          id=""
          placeholder="Enter password"
        />
        <button
          type="submit"
          className="
        p-2 px-4 bg-blue-600 cursor-pointer rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
