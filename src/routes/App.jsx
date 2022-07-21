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
import '@stylesComponents/App.css';

function App() {
  return (
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
  );
}

export default App;
