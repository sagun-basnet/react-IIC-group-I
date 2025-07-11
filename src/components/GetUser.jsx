import axios from "axios";
import React, { useEffect } from "react";

const GetUser = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwiaWF0IjoxNzUyMjEyMzE2LCJleHAiOjE3NTQ4MDQzMTZ9.YjlNMyDfddUI7G_0-E5MIL7DFsok2AXb_r5kBfaYa_E";
  const fetchData = async () => {
    await axios
      .get("http://192.168.1.26:5555/api/get-all-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>GetUser</div>;
};

export default GetUser;
