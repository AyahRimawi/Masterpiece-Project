import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartAsync,
  removeFromCartAsync,
  updateQuantityAsync,
  checkoutAsync,
  initializeCartAsync,
} from "./cartThunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      })
      .addCase(checkoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutAsync.fulfilled, (state) => {
        state.loading = false;
        state.items = [];
      })
      .addCase(checkoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(initializeCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
