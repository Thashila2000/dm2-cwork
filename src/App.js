
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import {HelmetProvider} from 'react-helmet-async';
import Login from './Pages/Login';
import ContactPage from './Pages/ContactPage';
import CreateAccount from './Pages/CreateAccount';
import Cart from './Components/Cart';
import { useState } from 'react';


function App() {


  const [show,setshow] =useState(true);
  const [cart,setcart] = useState([]);
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/ContactPage' element={<ContactPage />} />
            <Route path='/CreateAcount' element={<CreateAccount />} />
            <Route path='/Cart' element={<Cart />} />

         </Routes>
         </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;
