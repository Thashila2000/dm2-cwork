import React, { useState } from "react"
import { Router,Link,BrowserRouter } from "react-router-dom"
import { Button } from 'react-bootstrap';
import './nav.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Avatar from '@mui/material/Avatar'
import './cmn.css'


function Navb({size}){

       
   return <>
         <div className= "header">
        <div className="logo-container"><img  src="/img/lg1-nw.png"  className="logo-img" /></div>
        <div className="nav-link-all">
               <Link to='/' className="nav-link link-txt">Home</Link>
                            <div className="dropdown">
                     <span className="nav-link link-txt">Category ▾</span>
                     <ul className="dropdown-menu">
                     <li><Link to="/category/ring">Ring</Link></li>
                     <li><Link to="/category/chain">Chain</Link></li>
                     <li><Link to="/category/bracelet">Bracelet</Link></li>
                     <li><Link to="/category/All">All</Link></li>
                     </ul>
                    </div>

     
               <Link to='/Category' className="nav-link link-txt">Category</Link>
               <Link to='/About' className="nav-link link-txt">About</Link>
               <Link to='/ContactPage' className="nav-link link-txt">Contact</Link>
               
               
               <div className="ac"> 
               <Link to='/CreateAccount'  className="nav-linklg1"><Button>Create account</Button></Link>
               <Link to='/Login'   className="nav-linklg link-txt">Login</Link>
    
        </div>

        <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"><AddShoppingCartIcon /></i>
      <span className="cart-count" >{size}</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"><Avatar /></i>
    </a>
  </div>
        </div>
   </div> 

          </>
  
}
export default Navb



