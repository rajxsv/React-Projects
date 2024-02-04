import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Hooks() {
    console.log('Rerendered')
  return (
    <>
      <h1>Hooks</h1>
      <CardUseEffect />
    </>
  );
}

const CardUseEffect = () => {
  // useEffect hook the lifecycle
  const [data, setData] = useState({});
  const [call, setCall] = useState(false);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (response) => {
        const dataJson = await response
          .json()
          .catch((err) => console.err("error with json", err));
        setData(dataJson);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [call]);

  return (
    <>
      <h1>Hi from CardUseEffect</h1>

      <button onClick={() => setCall(!call)}>Fetch</button>

      {Array.isArray(data.todos) && data.todos.length ? (
        data.todos.map((entry) => (
          <Todo key={entry.id} title={entry.title} desc={entry.description} />
        ))
      ) : (
        <h1>No Todos for today</h1>
      )}
    </>
  );
};

const Todo = ({ title, desc }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{desc}</h3>
    </>
  );
};

export default Hooks;
