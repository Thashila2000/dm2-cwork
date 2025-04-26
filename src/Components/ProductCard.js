import React from 'react'
import './prdct.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

export default function ProductCard() {

  const navigate =useNavigate();
    function onsubmit(){
        //cheking to  login creditianal
        // if credits valid ,login successful
        navigate('/Cart');
    }
  return (
    <div className="prd"><img src="/img/Productnm/j1.jpeg" className='prd-img' alt='' />
      <div>
        <h1 className='prd-name'>Necklace Earrings Ring Set</h1>
        <p className='prd-price'>Rs. 60,000.00</p>
        <p className='prd-desc'>Bridal Earrings Necklace Ring Set Smooth Water Drop Dangle Wedding Jewelry Set</p>
        <Button variant='warning' onClick={onsubmit} >Add to Cart</Button>
      </div>
    
    </div>

  )
}
