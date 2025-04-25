
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import {HelmetProvider} from 'react-helmet-async';
import Login from './Pages/Login';


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
