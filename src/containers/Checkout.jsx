import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '@stylesComponents/Checkout.css';
import handleSumTotal from '@utils/handleSumTotal';
import AppContext from '@context/AppContext';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => {
    removeFromCart(product);
    console.log(product)
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 
          ? <h3>Lista de pedidos</h3>
          : <h3>Aún no hay pedidos</h3>
        }
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type='button' onClick={() => handleRemove(item.id)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <aside className='Checkout-sidebar'>
          <h3>{`Precio total: $${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            Continuar pedido
          </Link>
        </aside>
      )}
    </div>
  )
}

export default Checkout;