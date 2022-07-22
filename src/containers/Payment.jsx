import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '@context/AppContext';
import handleSumTotal from '@utils/handleSumTotal';
import '@stylesComponents/Payment.css';

const id = "AX3Mv8oAEVajeJPAxXjE2ULO-Ac6nD8K5hy1XMR8SeXDe8BxUfgFo5YCjmFB8vNUob3XS7fvrtBU-7fw";

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart,buyer } = state;

  const history = useNavigate()

  const handleApprove = (data) => {
    const newOrder = {
      buyer,
      products: cart,
      payment: data
    }
    addNewOrder(newOrder);
    history('/checkout/success')
  }

  return (
    <PayPalScriptProvider
      options={{"client-id": id}}>

      <section className="Payment">
        <div className="Payment-content">
          <h3> Resume del pedido:</h3>
          {cart.map(item => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="Payment-button">
            <PayPalButtons
              style={{layout: "vertical"}}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: handleSumTotal(cart),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                handleApprove(data.orderID);
                console.log(`transacion aprovada`);
              }}
            />
          </div>
        </div>
        <div />
      </section>
    </PayPalScriptProvider>
  )
}

export default Payment;
