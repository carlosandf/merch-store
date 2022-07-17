import React from 'react';
import '@stylesComponents/Success.css';

function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Carlos, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  )
}

export default Success;
