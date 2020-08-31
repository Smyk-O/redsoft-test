import React, { useEffect, useState } from 'react';
import './ProductShowcase.scss';
import ProductCard from './ProductCard/ProductCard';

function ProductCatalog({ products, cart }) {
  return (
    <div className={'product_cards__wrapper'}>
      {products.map((product) => (
        <ProductCard
          key={product.article}
          name={product.productName}
          number={product.numberOfUnits}
          price={product.price}
          oldPrice={product.oldPrice}
          currency={product.currency}
          article={product.article}
          imageUrl={product.imageUrl}
          cart={cart}
        />
      ))}
    </div>
  );
}

function ProductShowcase({ product, cart }) {

  return (
    <main className={'showcase'}>
      <h1 className={'showcase__name'}>{product.name}</h1>
      <ProductCatalog cart={cart} products={product.products} />
    </main>
  );
}

export default ProductShowcase;
