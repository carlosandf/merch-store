import React from 'react';
import '@stylesComponents/Products.css';
import Product from '@components/Product';

function Products({ products }) {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
