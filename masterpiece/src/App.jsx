// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/HomePage/Home";
// // import Cart from "./pages/CartPage/CartPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import DetailsPage from "./pages/DetailsPage/DetailsPage";
// import PaymentCard from "./pages/Card/PaymentCard";
// import ThankYouCard from "./pages/Card/ThankYouCard";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import CartIcon from "./pages/CartPage/CartIcon";
// import CartPage from "./pages/CartPage/CartPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";


// function App() {
//   return (
//     <>
//       <PayPalScriptProvider
//         options={{
//           "client-id":
//             "ATh60NQr0fs5ZkrJylhozShzvlUgxtrAtQDblwWQnmwpsuWNIBsqNRQwF5lwRf0VBrNzB80scTW09Eqq",
//         }}
//       >
//         <ToastContainer />

//         {/* <PaymentCard/> */}
//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:id" element={<DetailsPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />

//           {/* <Route path="/Cart" element={<Cart />} /> */}
//           <Route path="/ProfilePage" element={<ProfilePage />} />
//           <Route path="/PaymentCard" element={<PaymentCard />} />
//           <Route path="/ThankYouCard" element={<ThankYouCard />} />
//         </Routes>
//         {/* Routes */}
//         <ToastContainer position="bottom-right" autoClose={3000} />
//       </PayPalScriptProvider>
//     </>
//   );
// }

// export default App;


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
import PaymentCard from "./pages/Card/PaymentCard";
import ThankYouCard from "./pages/Card/ThankYouCard";
import CartPage from "./pages/CartPage/CartPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

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
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/PaymentCard" element={<PaymentCard />} />
          <Route path="/ThankYouCard" element={<ThankYouCard />} />
        </Routes>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </PayPalScriptProvider>
    </>
  );
}

export default App;