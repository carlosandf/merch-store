import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@containers/Home';
import Checkout from '@containers/Checkout';
import Information from '@containers/Information';
import Payment from '@containers/Payment';
import Success from '@containers/Success';
import NotFound from '@containers/NotFound';
import Layout from '@components/Layout';
import { AppContextProvider } from '@context/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '@stylesComponents/App.css';

const id = "AX3Mv8oAEVajeJPAxXjE2ULO-Ac6nD8K5hy1XMR8SeXDe8BxUfgFo5YCjmFB8vNUob3XS7fvrtBU-7fw";

const initialOptions = {
  "client-id": id,
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <PayPalScriptProvider
      options={initialOptions}>
      <AppContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/checkout/information" element={<Information />} />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContextProvider>
    </PayPalScriptProvider>
  );
}

export default App;
