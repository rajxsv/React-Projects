import { useState, useEffect } from "react";

import './MyStyle.css'

const Card = ({cardNo}) => {

    const [color, setCoLour] = useState(0)   // 0 -> black, 1 -> white  // array destructuring
    const [checked,check] = useState(true);

    function handle(){
        console.log("jatt aan");
    }
    useEffect(() => {
        
        return () => {
        handle()
        };
    }, [checked]);

    const colors = ["white", "black", "green", "red"]
    // console.log(props)
    return (
        <>
        <h1>This is Card {cardNo}</h1>
        <div className='div1' >
          <div style={{ background: colors[color], height: "200px", width: "200px" }}>
          </div>
          <div className="div11" >
            <button style={{ margin:"15px"}} onClick={() => setCoLour(0)} > White </button>
            <button style={{  margin:"15px"}} onClick={() => setCoLour(1)} > Black </button>
            <button style={{  margin:"15px"}} onClick={() => setCoLour(2)} > Green </button>
            <button style={{  margin:"15px"}} onClick={() => setCoLour(3)} > Red </button>
          </div>
          <div>
            <input style={{margin : "10px"}} type='checkbox' onClick={()=>check(!checked)} ></input>
          </div>
        </div>
        </>
    )
}

export default Card