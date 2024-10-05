import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthRedux/authSlice";
// import cartReducer from "./CartRedux/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
  },
});
