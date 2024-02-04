import React, { useState } from 'react'

export default function Colors() {
    const [index, setIndex] = useState(0)
    const color = ["green", "black", "lavender", "red", "yellow", "blue","olive"]

    function handleClick() {
        setIndex((index+1)%color.length)
    }

  return (
    <>
        <div style={{borderRadius:'10px', marginTop:'40px',marginBottom:'20px',margin:'auto',backgroundColor:`${color[index]}`, width:'600px',height:'200px'}}></div>
        <button onClick={handleClick} >Change Color</button>
    </>
  )
}
