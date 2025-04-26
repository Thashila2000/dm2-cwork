import React from "react"
import { useState } from "react";

export default function Cart(){
        const p = 60000;
        const [price,setprice]= useState(p);
        const [quantity, setQuantity] = useState(1); 
        
      
        const handleIncrement = () => {
          setQuantity(prevQuantity => prevQuantity + 1);
          setprice(prevprice =>prevprice +p );
        };
      
        const handleDecrement = () => {
          if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setprice(prevprice =>prevprice - p );
          }
        };

    return(
        <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>2 items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src="./imag/productnm/j1.jpeg" alt="Earing" height="90" width="115" />
                        </div>

                        <div className="col-5 col-lg-3">
                            <a href="#">Necklace Earrings Ring Set (Bridal Earrings Necklace Ring Set Smooth Water Drop Dangle Wedding Jewelry Set) with No Cost EMI/Additional Exchange Offers</a>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">Rs. {p}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={handleDecrement}>-</span>
                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />

								<span className="btn btn-primary plus" onClick={handleIncrement} >+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
                        </div>

                    </div>
                </div>
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{quantity}(Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">Rs.{price}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block">Check out</button>
                </div>
            </div>
        </div>
    </div>
    )
}