import React from 'react';
import { Link } from 'react-router-dom';
import '@stylesComponents/Checkout.css';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type='button'>
            <i className="fas fa-trash-alt" title="Eliminar" />
          </button>
        </div>
      </div>
      <aside className='Checkout-sidebar'>
        <h3>Precio total: $10</h3>
        <button type='button'>
          <Link to="/checkout/information">
            Continuar pedido
          </Link>
        </button>
      </aside>
    </div>
  )
}

export default Checkout;
