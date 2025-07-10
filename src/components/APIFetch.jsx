import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const APIFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // try {
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   setData(res.data);
    // } catch (err) {
    //   console.log(err);
    // }

    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="grid grid-cols-5 gap-4">
      {data.map((item, index) => {
        return <Card title={item.title} body={item.body} index={index} />;
      })}
    </div>
  );
};

export default APIFetch;
