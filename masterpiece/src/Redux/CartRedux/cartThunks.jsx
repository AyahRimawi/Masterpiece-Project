import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (productId, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/product/${productId}`);
      const { cart } = getState();
      const updatedItems = [...cart.items];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === data.id
      );

      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...data, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCartAsync",
  async (productId, { getState }) => {
    const { cart } = getState();
    const updatedItems = cart.items.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    return productId;
  }
);

export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantityAsync",
  async ({ id, quantity }, { getState }) => {
    const { cart } = getState();
    const updatedItems = cart.items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    return { id, quantity };
  }
);

export const checkoutAsync = createAsyncThunk(
  "cart/checkoutAsync",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { cart, auth } = getState();
      if (!auth.isAuthenticated) {
        throw new Error("يجب تسجيل الدخول لإتمام عملية الشراء");
      }
      await axios.post("/api/order/createOrder", { items: cart.items });
      localStorage.removeItem("cart");
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const initializeCartAsync = createAsyncThunk(
  "cart/initializeCartAsync",
  async () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
);
