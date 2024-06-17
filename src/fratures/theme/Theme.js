import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { changeTextColor } from "./themeSlice";
import Button from "react-bootstrap/Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toogleChange } from "./themeSlice";

function Theme() {

  const themelala = useSelector((state) => state.theme.color);

 
  const [show, setshow]=useState(false) 

   const dispatch = useDispatch() 

   return ( 
    <> 
    <h4>fratures/theme/Theme.js</h4> 
    <style>{'body { background-color: #ffcc66 }'}</style>
    
     {  
     show? <h5>Welcome to Theme.js</h5>: ''  
     }  

     <button onClick={()=>{dispatch(toogleChange(setshow(true)))}}>show data</button> 

      </>
  )
}

export default Theme