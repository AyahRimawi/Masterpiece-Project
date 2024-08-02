import './App.css'
import{Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import { Home } from './pages/HomePage/Home';
import Cart from './pages/Cart/Cart';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/CartItem" element={<Cart />} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
      </Routes>
      {/* Routes */}
    </>
  );
}

export default App
