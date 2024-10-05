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

function App() {
  return (
    <>
      <ToastContainer />
    
       
      {/* <PaymentCard/> */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* <Route path="/Cart" element={<Cart />} /> */}
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/PaymentCard" element={<PaymentCard />} />
        <Route path="/ThankYouCard" element={<ThankYouCard />} />
      </Routes>
      {/* Routes */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
