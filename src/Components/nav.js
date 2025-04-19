import React from "react"
import { Router,Link,BrowserRouter } from "react-router-dom"
import { Button } from 'react-bootstrap';
import './nav.css';



function Navb(){
   return <>
         <div className= "header">
        <div className="logo-container"><img  src="/img/srclg.png"  className="logo-img" /></div>
        <div className="nav-link-all">
               <Link to='/' className="nav-link link-txt">Home</Link>
               <Link to='/Login' className="nav-link link-txt">Category</Link>

               <Link to='/Login' className="nav-link link-txt">About</Link>
               <Link to='/Login' className="nav-link link-txt">Contact</Link>
               <div className="ac"> 
               <Link to='/'  className="nav-linklg1"><Button>Create account</Button></Link>
               <Link to='/'   className="nav-linklg link-txt">Login</Link>
               </div>
        </div>
   </div> 

          </>
  
}
export default Navb