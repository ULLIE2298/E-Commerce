import React, {useState} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Trolly from './pages/cart';
import Navbar from './components/navBar';

function App() {
  const [product, setProduct] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar item={product} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop key={product.id} item={product} setItem={setProduct}/>} />
          <Route path='/cart' element={<Trolly item={product} setItem={setProduct}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
