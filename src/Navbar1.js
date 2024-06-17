import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addUser } from "./state/usersSlice";

const Navbar1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h4>src/Navabar1.js</h4>

      <style>{"body { background-color: #ffcc66 }"}</style>

      <h2>UserForm</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <br></br>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br></br>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br></br>
        <br></br>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Navbar1;
