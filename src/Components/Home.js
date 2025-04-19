import React, { Fragment } from "react"
import Navb from "./nav"
import './cmn.css'



export default function Home() {
    return <>
        <Navb />
    <div>
      <img src="/img/img3.jpg" alt="Description" className="bnr_img" />
      <input type="search" className="shr" /> 
    </div>   
    </>    
}