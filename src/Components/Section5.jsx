import React, { useEffect } from "react";
import useStore from "../Store/pubordeeStore";

const Section5 = () => {
  const data = useStore((state) => state.data);
  const isLoading = useStore((state) => state.isLoading);
  const error = useStore((state) => state.error);
  const errorMessage = useStore((state) => state.errorMessage);
  const getData = useStore((state) => state.getData);
  console.log(data, isLoading, error, errorMessage);

  const fetchData = () => {
    getData();
  };
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <button onClick={fetchData}>Get data</button>
      {isLoading ? (
        <h1>Loadding...</h1>
      ) : error ? (
        <p>{errorMessage}</p>
      ) : (
        data.map((item, index) => <li key={index}>{item.name}</li>)
      )}
    </div>
  );
};

export default Section5;
