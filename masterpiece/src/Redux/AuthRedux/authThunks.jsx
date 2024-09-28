import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Registration failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/api/users/logout");
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Logout failed");
    }
  }
);
