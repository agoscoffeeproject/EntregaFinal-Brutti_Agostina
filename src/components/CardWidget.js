import React from "react";
import '../App.css';

export const CartWidget = () => {
    return (
        <>
                
                <button className="btn btn-secondary cartWidget">
                <i className="bi bi-cart4"></i>
                <span className="cantCarrito">0</span>
                </button>

            </> 
        
    )
}

export default CartWidget; 