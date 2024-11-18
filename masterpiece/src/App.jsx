import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { checkAuthStatus } from "./Redux/AuthRedux/authThunks";

import { Home } from "./pages/HomePage/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATh60NQr0fs5ZkrJylhozShzvlUgxtrAtQDblwWQnmwpsuWNIBsqNRQwF5lwRf0VBrNzB80scTW09Eqq",
        }}
      >
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Routes>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </PayPalScriptProvider>
    </>
  );
}

export default App;