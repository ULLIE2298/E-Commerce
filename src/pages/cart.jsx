import React from 'react';
import Cartitem from '../components/cartItem';

export default function cart({item, setItem}) {
  let total = [];
  let tax = [];
  let delivery = 60;

  let calTax = item.map(data => data.price * data.amount * 0.01);
  tax.push(calTax);

  let amount = item.map(data => data.price * data.amount);
  total.push(amount);
  
  let totalAmount = total[0].reduce((a, b) =>{
    return a + b;
  }, 0);

  let totalTax = tax[0].reduce((a, b) =>{
    let sum = a + b; 
    return Math.round((sum + Number.EPSILON) * 100 / 100);
  }, 0);
  
  let totalOrder = totalAmount + totalTax + delivery;
  return (
    <div className="Cart">
      <div className="cart-list">
      {item.map((product) => (
        <Cartitem key={product.id} data={product} counter={item} setCounter={setItem}/>
      ))}
      </div>
      <div className="total">
        <div className="top">
          <div className="left-top">
            <h4>Total Product</h4>
            <h4>Tax</h4>
            <h4>Delivery</h4>
          </div>
          <div className="right-top">
            <h4>R {totalAmount}</h4>
            <h4>R {totalTax}</h4>
            <h4>R {delivery}</h4>
          </div>
        </div>
        <hr />
        <div className="bottom">
            <div className="left-bottom"><h4>Total Order:</h4></div>
            <div className="right-bottom"><h4>R {totalOrder}</h4></div>
        </div>
      </div>
    </div>
  )
}
