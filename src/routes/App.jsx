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

const initialOptions = {
  "client-id": process.env.CLIENT_ID,
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
