import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navb from './Components/nav'; 
import Home from './Pages/Home';
import Category from './Pages/Category';
import Login from './Pages/Login';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import CreateAccount from './Pages/CreateAccount';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Chain from './Cat/Chain';
import Bracelet from './Cat/Bracelet';
import Ring from './Cat/Ring';
import {HelmetProvider} from 'react-helmet-async';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <HelmetProvider>
     
      <BrowserRouter>
        <Navb />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/ContactPage' element={<ContactPage />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />

          {/* Category Pages for Chain, Ring, Bracelet */}
          <Route path='./Cat/Chain' element={<Chain onAddToCart={handleAddToCart} />} />
          <Route path='./Cat/Ring' element={<Ring onAddToCart={handleAddToCart} />} />
          <Route path='./Cat/Bracelet' element={<Bracelet onAddToCart={handleAddToCart} />} />
          
          {/* Cart Page */}
          <Route path='/Cart' element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      </HelmetProvider>
    </div>
  );
}

export default App;