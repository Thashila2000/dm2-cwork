
import Home from './Components/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Navb from './Components/Nav'
import Category from './Pages/Category';
import About from './Pages/About';
import CreateAccount from './Pages/CreateAccount';
import ContactPage from './Pages/ContactPage';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">

   
     <BrowserRouter>
     <Navb />
     
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Category' element={<Category/>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/About' element={<About />} />
            <Route path='/ContactPage' element={<ContactPage />} />
            <Route path='/CreateAccount' element={<CreateAccount />} />
         </Routes>
         <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
