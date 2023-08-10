import React from 'react'

export default function product({data, cartItem, setCartItem}) {
    const {id, productName, price, productImage} = data;
    const cartItemHandler = (e) => {
      e.preventDefault();
      const list = cartItem;
      const newProduct = {id: id, productName: productName, price: price, productImage: productImage, amount: 1};
      
      function itemExist(id){
        return list.some(function(el) {
          return el.id === id;
        });
      }
      if(itemExist(id) === false){
        setCartItem([...list, newProduct]);
      }
    }
  return (
    <div className='product'>
        <img src={productImage} alt="shoe" />
        <h3>{productName}</h3>
        <h4>R{price}</h4>
        <button onClick={cartItemHandler}>Add To Cart<hr /></button>
    </div>
  )
}

