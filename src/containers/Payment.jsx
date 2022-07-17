import React from 'react';
import '@stylesComponents/Payment.css';

function Payment() {
  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3> Resume del pedido:</h3>
        <div className="Payment-button">
          Pagar con PayPal
        </div>
      </div>
      <div />
    </section>
  )
}

export default Payment;
