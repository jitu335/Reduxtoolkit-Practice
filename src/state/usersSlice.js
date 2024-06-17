import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:8000/api/users');
  return response.data.data;
});

// Async thunk for adding a user
export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
  const response = await axios.post('http://localhost:8000/api/users', newUser);
  return response.data;
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`http://localhost:8000/api/users/${id}`);
  return id;
});

// Async thunk for updating a user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updatedUser }) => {
  const response = await axios.put(`http://localhost:8000/api/users/${id}`, updatedUser);
  return response.data.data; // Assuming the updated user is returned in response.data.data
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user._id === action.payload._id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      }); 
  },
});

export default usersSlice.reducer;

