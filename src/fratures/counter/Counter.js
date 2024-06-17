import react from "react";
import { useDispatch} from 'react-redux' 
import {useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice';  
 import React, { useState } from "react";
import Button from 'react-bootstrap/Button';  
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";



function Counter() {

     const themeTextColor = useSelector((state)=>state.theme.color) 
    
    const count = useSelector((state)=>state.counterme.count) 

  const dispatch = useDispatch() 

  return (
    <>
    <h4>fratures/counter/counter.js</h4> 
    <style>{'body { background-color: #ffcc66 }'}</style>
    
    <Button onClick={()=>{dispatch(increment()) }} >+</Button>  
 <br></br><br></br> 

 <h2>count:{count}</h2>
 <h3>{themeTextColor}</h3>  
 <Button onClick={()=>{dispatch(decrement()) }} >-</Button> 
  <br></br><br></br> 

  <Button onClick={()=>{dispatch(incrementByAmount(5)) }} >by 5</Button> 
    
  <Link to='/' style={{color: 'red'}}>Go to home</Link> 
    </> 
  )
}

export default Counter