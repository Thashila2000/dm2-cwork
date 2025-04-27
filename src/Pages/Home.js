import React, { Fragment, useState } from "react"
import '../Components/cmn.css'
import ProductCard from "../Components/ProductCard"
import Footer from "../Components/Footer"
import Prd_slide from "../Components/Prd_slide"
import MetaData from "../Components/MetaData"
import Navb from "../Components/nav"



export default function Home() {

  const [cart,setcart] = useState([]);
  

  const handleclick = (item )=>{
    let isPresent =false;
    cart.forEach((product)=>{
      if(item.id === product.id)
        isPresent=true;

    })
    if(isPresent)
      return;
    setcart([...cart,item])
  }

 
    return <>
    <Fragment>
      <MetaData title={'Find your Own Desing'} />
        <Navb size={cart.length} />
    <div >
      <img src="/img/img3.jpg" alt="Description" className="bnr_img" />
    </div>

    <div className="slogn">
    <span className="part-one">Designed With You in Mind</span> <span className="part-two">Crafted To Complement Every Sparkle You Seek</span>
    </div>
    <div ><p className="slogan-text"><span className="prt-one">What shine are you looking for?</span> </p></div>

    <div className="shr_cont">
          <input type="search" placeholder="Search Here" className="shr" /> 
      </div>
          <div className="shr_contBtn">
            <img src="/img/srch_lg.png" type="Button" className="src_btn" />
          </div>

          <div>
            <Prd_slide  />
          </div>
          <div>
          <ProductCard handleclick={handleclick} />
         
          <Footer/>
          
      </div>
      </Fragment>
    </>    
}