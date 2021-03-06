import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import '@stylesComponents/Layout.css';

function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      <main className='Main-container'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
