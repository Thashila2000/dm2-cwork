
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import {HelmetProvider} from 'react-helmet-async';

import Footer from './Components/Footer';
import Navb from './Components/Nav'
import Category from './Pages/Category';
import About from './Pages/About';
import CreateAccount from './Pages/CreateAccount';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
         </Routes>
         </HelmetProvider>

     
    </div>
    </Router>
  );
}

export default App;
