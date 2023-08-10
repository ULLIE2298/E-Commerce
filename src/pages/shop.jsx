import React from 'react';
import {PRODUCTS} from '../products';
import Product from '../components/product';
import Footer from '../components/footer';

export default function shop({item, setItem}) {
  return (
    <div className='shop'>
        <div className="shop-list">
          {PRODUCTS.map((product) => (
            <Product key={product.id} cartItem={item} setCartItem={setItem} data={product} />
          ))}
        </div>
        <Footer />
    </div>
  )
}
