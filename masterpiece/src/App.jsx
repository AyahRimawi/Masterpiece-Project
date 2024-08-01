import './App.css'
import{Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import { Home } from './pages/HomePage/Home';

function App() {

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path='/Home' element= {<Home/>} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
      {/* Routes */}
    </>
  );
}

export default App
