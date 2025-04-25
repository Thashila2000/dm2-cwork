import logo from './logo.svg';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

     
     <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
