// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import useCartStore from "../../pages/CartPage/CartStore";

// axios.defaults.withCredentials = true;

// // إضافة interceptor لـ axios
// axios.interceptors.request.use(
//   function (config) {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       config.headers["user-id"] = userId;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (userData, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/users/register", userData);
//       localStorage.setItem("userId", response.data.userId);
//       await dispatch(transferGuestCart());
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response.data.message || "Registration failed"
//       );
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (credentials, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/users/login", credentials);
//       localStorage.setItem("userId", response.data.userId);
//       await dispatch(transferGuestCart());
//       useCartStore.getState().fetchCart(); // Fetch the updated cart after login
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Login failed");
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post("/api/users/logout");
//       localStorage.removeItem("userId");
//       useCartStore.getState().fetchCart(); // Fetch the guest cart after logout
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Logout failed");
//     }
//   }
// );

// export const transferGuestCart = createAsyncThunk(
//   "cart/transferGuestCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/cart/transferGuestCart");
//       useCartStore.getState().fetchCart(); // Fetch the updated cart after transfer
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response.data.message || "Failed to transfer guest cart"
//       );
//     }
//   }
// );



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import useCartStore from "../../pages/CartPage/CartStore";

// نحن لا نحتاج لتعيين baseURL لأن Vite يقوم بتوجيه الطلبات
axios.defaults.withCredentials = true;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", userData);
      localStorage.setItem("userId", response.data.userId);
      await dispatch(transferGuestCart());
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Registration failed"
      );
    }
  }
);

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (credentials, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/users/login", credentials);
//       localStorage.setItem("userId", response.data.userId);
//       await dispatch(transferGuestCart());
//       useCartStore.getState().fetchCart();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Login failed");
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", credentials);
      localStorage.setItem("token", response.data.token); // تخزين التوكن
      localStorage.setItem("userId", response.data.userId);
      await dispatch(transferGuestCart());
      useCartStore.getState().fetchCart();
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
      localStorage.removeItem("userId");
      useCartStore.getState().fetchCart();
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Logout failed");
    }
  }
);

export const transferGuestCart = createAsyncThunk(
  "cart/transferGuestCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/cart/transferGuestCart");
      useCartStore.getState().fetchCart();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to transfer guest cart"
      );
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/profile");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Authentication check failed"
      );
    }
  }
);