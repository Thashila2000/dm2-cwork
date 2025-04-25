import React from "react"
import { Router,Link,BrowserRouter } from "react-router-dom"
import { Button } from 'react-bootstrap';
import './Nav.css';
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack';
import './cmn.css'

import CustomizedBadges from "./CustomizedBadges";


function Navb(){
   return <>
         <div className= "header">
        <div className="logo-container"><img  src="/img/lg1-nw.png"  className="logo-img" /></div>
        <div className="nav-link-all">
               <Link to='/' className="nav-link link-txt">Home</Link>
               <Link to='/Category' className="nav-link link-txt">Category</Link>

               <Link to='/About' className="nav-link link-txt">About</Link>
               <Link to='/ContactPage' className="nav-link link-txt">Contact</Link>
               
               
               <div className="ac"> 
               <Link to='/CreateAccount'  className="nav-linklg1"><Button>Create account</Button></Link>
               <Link to='/Login'   className="nav-linklg link-txt">Login</Link>

              

               
        </div>
        <div className="icn">
               <CustomizedBadges />
               </div>
       <div className="prfl">
              <Stack direction="row" spacing={2}>
                     <Avatar alt="Cindy Baker" src="" />
               </Stack></div>
        </div>
   </div> 

          </>
  
}
export default Navb