import React from "react";

const Card = ({ title, body, index }) => {
  return (
    <div key={index} className="h-[18rem] border-2 flex flex-col">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Card;
