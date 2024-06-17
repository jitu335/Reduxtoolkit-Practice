import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeNumber, toogleChange } from "./fratures/theme/themeSlice";
import { changeTextColor } from "./fratures/theme/themeSlice";
import { fetchUsers, deleteUser, updateUser } from "./state/usersSlice"; 

function Home() {

  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


const handleEdit = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleSave = (id) => {
    dispatch(updateUser({ id, updatedUser: { name, email, password } }));
    setEditingUser(null);
  };
  

  return (
    <>
      <h4>src/Home.js.....</h4>
      <style>{"body { background-color: #ffcc66 }"}</style>

       <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users?.map((user) => (
          <li key={user._id}>
            {editingUser && editingUser._id === user._id ? (
              <form onSubmit={(e) => { e.preventDefault(); handleSave(user._id); }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>


   
    </>
  );
}

export default Home;
