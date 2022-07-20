import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import '@stylesComponents/Header.css';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-solid fa-cart-shopping"></i>
        </Link>
        {cart.length > 0 && (
          <div className="Header-alert">
            {cart.length}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
