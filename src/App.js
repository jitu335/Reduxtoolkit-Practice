import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Coin from './fratures/coin/Coin';
import Counter from './fratures/counter/Counter';
import Theme from './fratures/theme/Theme';
import Home from './Home';
import Navbar from 'react-bootstrap/Navbar';
import {  } from "react-router-dom";
import UserLFilterData from './Flipkart/UserLFilterData';
import ProductList from './Flipkart/ProductList';
import Login from './Flipkart/Login';
import Shop from './Shop';
import Navbar1 from './Navbar1';

import { Prepare1 } from './Interviewprepare/Prepare1';
import Prepare2 from './Interviewprepare/Prepare2';
import Prepare3 from './Interviewprepare/Prepare3';
import Webrecorder from './Interviewprepare/Webrecorder';

function App() {

  return (
    <div className="App">

    <h4>app.js</h4>

<BrowserRouter>
          <Navbar bg="black" variant="dark"> 
             <NavLink className='nav-counter' to= {'counter'}>Counter</NavLink> 
            <ul></ul>
            <NavLink className='nav-coin' to= {'coin'}>Coin</NavLink>    
            <ul></ul>
            <NavLink className='nav-theme' to= {'theme'}>Theme</NavLink>
            <ul></ul>
            <NavLink className='nav-userfilterdata' to= {'userfilterdata'}>UserLFilterData</NavLink>
            <ul></ul>
            <NavLink className='nav-productlist' to= {'productlist'}>ProductList</NavLink>
            <ul></ul>
            <NavLink className='nav-login' to= {'login'}>Login</NavLink>
            <ul></ul>
            <NavLink className='nav-productlist' to= {'shop'}>Empty1</NavLink>
            <ul></ul>
            <NavLink className='nav-productlist' to= {'navbar1'}>Empty2</NavLink>
            <ul></ul>
            <NavLink className='nav-Prepare1' to={'prepare1'} >Empty3</NavLink>
            <ul></ul>
            <NavLink className='nav-Prepare2' to={'prepare2'} >Empty4</NavLink>
            <ul></ul>
            <NavLink className='nav-Prepare3' to={'prepare3'} >Empty5</NavLink>
            <ul></ul>
            <NavLink className='nav-webrecorder' to={'webrecorder'}>Empty6</NavLink>
            </Navbar>

     <Routes> 
       <Route path="/" element={<Home />} />  
       <Route path='/counter' element={<Counter/>}/>  
      <Route path='/coin' element={<Coin/>}/>   
        <Route path='/theme' element={<Theme/>}/>  
        <Route path='/userfilterdata' element={<UserLFilterData/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/navbar1' element={<Navbar1/>}/>
        <Route path='/prepare1' element={<Prepare1/>} />
        <Route path='/prepare2' element={<Prepare2/>} />
        <Route path='/prepare3' element={<Prepare3/>} />
        <Route path='/webrecorder' element={<Webrecorder/>} />
      </Routes> 
  </BrowserRouter> 



    </div>
  );
}

export default App;
