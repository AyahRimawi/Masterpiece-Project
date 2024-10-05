import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: null,
  loading: false,
  error: null,

  fetchCart: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/api/cart");
      set({ cart: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addToCart: async (item) => {
    set({ loading: true });
    try {
      const response = await axios.post("/api/cart/addToCart", item);
      set({ cart: response.data.cart, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to add item to cart",
        loading: false,
      });
      throw error;
    }
  },

  updateCartItem: async (itemId, quantity) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/api/cart/updateCartItem/${itemId}`, {
        quantity,
      });
      set({ cart: response.data.cart, loading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update cart",
        loading: false,
      });
      throw error;
    }
  },

  removeCartItem: async (itemId) => {
    set({ loading: true });
    try {
      const response = await axios.delete(`/api/cart/removeCartItem/${itemId}`);
      set({ cart: response.data.cart, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  clearCart: async () => {
    set({ loading: true });
    try {
      const response = await axios.delete("/api/cart/clearCart");
      set({ cart: response.data.cart, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCartStore;