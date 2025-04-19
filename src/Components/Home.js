import React, { Fragment } from "react"
import Navb from "./nav"
import './cmn.css'
import ProductCard from "./ProductCard"



export default function Home() {
    return <>
        <Navb />
    <div >
      <img src="/img/img3.jpg" alt="Description" className="bnr_img" />
    </div>

    <div className="slogn">
    <span className="part-one">Designed With</span> <span className="part-two">You in Mind</span>
    </div>
    <div class="slogan-text"><p class="slogan-text">What shine are you looking for?</p></div>

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