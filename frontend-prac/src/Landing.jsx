import React, { useEffect, useState } from "react";

export default function Landing() {
  const [message, setMessage] = useState("Loading...");
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.publicapis.org/entries");
        const fetchedData = await response.json();
        setData(fetchedData.entries)
      } catch (error) {
        setMessage("Error Fetching Data");
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return data ? (
    <div className="landing">
      {data.map((item) => {
        return (
          <div className="content" key={item.Link}>
            <div className="content-heading">{item.API}</div>
            <div className="description">{item.Description}</div>
            <div className="properties">
              <div className="property">{item.Auth ? item.Auth : "N/A"}</div>
              <div className="property">{item.HTTPS ? "True" : "False"}</div>
              <div className="property">{item.Cors}</div>
              <div className="property">{item.Link}</div>
              <div className="property">{item.Category}</div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="notice">{message}</div>
  );
}
