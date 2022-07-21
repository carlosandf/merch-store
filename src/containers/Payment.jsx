import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '@context/AppContext';
import '@stylesComponents/Payment.css';

const id = "AZn9G7xHYxV2lkElDQNcbiIAn8LPz4j6yio20VSpcdJfDYvQ2Q3DiPnEZR_OIcqkdpIuOgCOgvKnUCwM";

function Payment() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => (
      accumulator + currentValue.price
    )
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const [paidFor , setPaidFor] = useState(false)

  const handleApprove = (orderID) => {
    setPaidFor(true)
  }

  const history = useNavigate()
  if(paidFor) history('/checkout/success')

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
                console.log(name);
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
