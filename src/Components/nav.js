import React from "react"
import { Router,Link,BrowserRouter } from "react-router-dom"
import { Button } from 'react-bootstrap';
import './nav.css';



function Navb(){
   return <>
         <div className= "header">
        <img src="c:\Users\WW\Pictures\Screenshots\my logo.png" />
        <div className="nav-link-all">
               <Link to='/' className="nav-link">Home</Link>
               <Link to='/Login' className="nav-link">Category</Link>

               <Link to='/Login' className="nav-link">About</Link>
               <Link to='/Login' className="nav-link">Contact</Link>
               <div className="ac"> 
               <Link to='/'><Button>Create account</Button></Link>
               <Link to='/'>Login</Link>
               </div>
        </div>
   </div> 

          </>
  
}
export default Navb