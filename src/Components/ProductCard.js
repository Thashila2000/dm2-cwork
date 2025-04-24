import React from 'react'
import './prdct.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="prd"><img src="/img/Productnm/j1.jpeg" className='prd-img' alt='' />
      <div>
        <h1 className='prd-name'>Necklace Earrings Ring Set</h1>
        <p className='prd-price'>Rs. 60,000.00</p>
        <p className='prd-desc'>Bridal Earrings Necklace Ring Set Smooth Water Drop Dangle Wedding Jewelry Set</p>
        <Button variant='warning'>Add to Cart</Button>
      </div>
    
    </div>

  )
}

export default ProductCard