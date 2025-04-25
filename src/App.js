import logo from './logo.svg';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import {HelmetProvider} from 'react-helmet-async';

import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
         <Routes>
            <Route path='/' element={<Home />} />
            
         </Routes>
         </HelmetProvider>
     
    </div>
    </Router>
  );
}

export default App;
