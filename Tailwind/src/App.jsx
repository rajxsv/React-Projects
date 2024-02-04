import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Colors from "./components/Colors";

function App() {
  let me = {
    name: "Raj",
    course: "ECE",
    friends: ["afriend", "bfriend", "cfriend"],
  };

  return (
    <>
      <h1 className=" flex justify-center items-center m-4 p-5 object-cover bg-black text-white rounded-xl mb-10">
        Tailwind Test
      </h1>
      <div className="columns-3 bg-blue-400">
        <Card name={"Raj"} />
        <Card name={"Raj"} notPassed="Passed" />
      </div>
      <Counter />
      <div className="mx-5 my-5 p-5">
        <Colors />
      </div>
    </>
  );
}

export default App;
