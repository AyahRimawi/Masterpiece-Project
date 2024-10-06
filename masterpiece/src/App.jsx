import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
// import Cart from "./pages/CartPage/CartPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import PaymentCard from "./pages/Card/PaymentCard";
import ThankYouCard from "./pages/Card/ThankYouCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CartIcon from "./pages/CartPage/CartIcon";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function App() {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATh60NQr0fs5ZkrJylhozShzvlUgxtrAtQDblwWQnmwpsuWNIBsqNRQwF5lwRf0VBrNzB80scTW09Eqq",
        }}
      >
        <ToastContainer />

        {/* <PaymentCard/> */}
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />

          {/* <Route path="/Cart" element={<Cart />} /> */}
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/PaymentCard" element={<PaymentCard />} />
          <Route path="/ThankYouCard" element={<ThankYouCard />} />
        </Routes>
        {/* Routes */}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </PayPalScriptProvider>
    </>
  );
}

export default App;
