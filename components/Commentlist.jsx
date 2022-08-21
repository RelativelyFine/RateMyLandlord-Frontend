import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => response.data);

const Commentlist = () => {
  const { data, error } = useSWR("http://127.0.0.1:5000/landlords", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Commentlist;
