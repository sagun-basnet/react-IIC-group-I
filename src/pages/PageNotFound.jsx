import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div>PageNotFound</div>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
};

export default PageNotFound;
