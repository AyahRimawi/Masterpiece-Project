import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
import Cart from "./pages/Cart/Cart";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import PaymentCard from "./pages/Card/PaymentCard";
import ThankYouCard from "./pages/Card/ThankYouCard";

function App() {
  return (
    <>
      {/* <PaymentCard/> */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailsPage />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/PaymentCard" element={<PaymentCard />} />
        <Route path="/ThankYouCard" element={<ThankYouCard />} />
      </Routes>
      {/* Routes */}
    </>
  );
}

export default App;
