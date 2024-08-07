import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
import Cart from "./pages/Cart/Cart";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductPage from "./pages/Card/ProductPage";
import PaymentCard from "./pages/Card/PaymentCard";

function App() {
  return (
    <>
      <PaymentCard/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
      {/* Routes */}
    </>
  );
}

export default App;
