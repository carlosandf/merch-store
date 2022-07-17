import React from 'react';
import { Link } from 'react-router-dom';
import '@stylesComponents/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <section className="Information-form">
          <form action="">
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="email" placeholder='Correo Electronico' name='email' />
            <input type="text" placeholder='Direction' name='address' />
            <input type="text" placeholder='Apto' name='apto' />
            <input type="text" placeholder='Pais' name='country' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Codigo postal' name='cp' />
            <input type="text" placeholder='Telefono' name='phone' />
          </form>
        </section>
        <section className='Information-buttons'>
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment">
              Pagar
            </Link> 
          </div>
        </section>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;