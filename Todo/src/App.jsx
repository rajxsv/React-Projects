import { useState } from "react"

let GLOBAL_ID = 4;

export default function App(){
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])

  
  function addTodo() {
    GLOBAL_ID++;
    setTodos([...todos, {
      id: GLOBAL_ID,
      title: `Title of ${GLOBAL_ID}`,
      description: `Description of ${GLOBAL_ID}`
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}