import React from "react";

export default function App() {
  return (
    <>
      <CardWrapper> <h1>Card1</h1> </CardWrapper>
      <CardWrapper> <h1>Card2</h1> </CardWrapper>
      <CardWrapper> <h1>Card3</h1> </CardWrapper>
      <CardWrapper> <Text title = "props passed to child" /> </CardWrapper>
    </>
  );
}

function Text({title}){
    return (
        <h1>Text Sample Component with message from parent = {title}</h1>
    )
}



function CardWrapper({children}) {
  return (
    <div style={{border: "2px solid black", padding: 20, margin: 30}}>
      <h1> Hi from Wrapper </h1>
      {children}
    </div>
  );
}
