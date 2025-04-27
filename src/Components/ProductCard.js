import React, { useEffect, useState } from 'react';
import './prdct.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ handleclick }) {

  const [addproducts, setaddproduct] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((json) => setaddproduct(json.products)); 
  }, []);

  const navigate = useNavigate();

  function gocart() {
    navigate('/Cart');
  }

  return (
    <div>
      {addproducts.map(item => (
        <div className="prd" key={item.id}>
          <img src={item.images} className="prd-img" alt="" />
          <div>
            <h1 className="prd-name">{item.title}</h1>
            <p className="prd-price">{item.price}</p>
            <p className="prd-desc">{item.description}</p>
            
            <Button variant="warning" >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
