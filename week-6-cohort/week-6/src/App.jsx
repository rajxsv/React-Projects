import React, { useState } from 'react'
import './index.css'

function App() {
  const [name,setName] = useState("Initial")

  const change = () => {
    setName("Rerendered")
  }

  return (
    <>
    <button onClick={change} > Make all re-render </button>

    <HeaderWithButton/>
    <HeaderWithButton/>
    <HeaderWithButton/>
    <Header name = "raju">  </Header>
    <Header> Not props  </Header>
    <Header name = "not raju"></Header>
    <Header name = {name}> passed as props </Header>
    </>
  )
}

function HeaderWithButton(){
  const [title,setTitle] = useState("Initial Render")
  const change = () => {
    setTitle("Rerender")
  }
  return (
    <>
    <div id = "divA">
      <button onClick={change} > Make this re-render </button>
      <Header> Status = {title} </Header>
    </div>
    </>
  )
}

const Header = React.memo(
  function(props) {

    const name = props.name
    return (
      <>
        <div>Name is {name}</div>
        <p>I can also dodge re render using hooks (useMemo) if props dont change !</p>
      </>
    );
}
)


export default App
