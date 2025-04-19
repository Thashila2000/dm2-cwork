import React, { Fragment } from "react"
import Navb from "./nav"
import './cmn.css'
import ProductCard from "./ProductCard"



export default function Home() {
    return <>
        <Navb />
    <div cla>
      <img src="/img/img3.jpg" alt="Description" className="bnr_img" />
    </div>

    <div className="shr_cont">
      <input type="search" placeholder="Search Here" className="shr" /> 
      </div>
      <div className="shr_contBtn">
        <img src="/img/srch_lg.png" type="Button" className="src_btn" />
      </div>
      <div>
      <ProductCard />
      </div>
     
    </>    
}