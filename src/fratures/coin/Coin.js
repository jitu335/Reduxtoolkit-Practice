import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { increment, decrement } from "../counter/counterSlice";


function Coin() {
    const coin = useSelector((state) => state.counterme.count);
     const themelala = useSelector((state) => state.theme.color);

    const dispatch = useDispatch() 

  return (
    <div>
    <h4>fratures/coin/Coin.js</h4> 
    <style>{'body { background-color: #ffcc66 }'}</style>
        <button onClick={()=>{dispatch(increment()) }}>increment</button>  
        <br></br><br></br>


        <h5>Coin:{coin}</h5>
        <button  onClick={()=>{dispatch(decrement()) }}>decrement</button> 
        <br></br><br></br>

    </div>
  )
}

export default Coin