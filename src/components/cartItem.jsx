import React from 'react'

export default function cartItem({data, counter, setCounter}) {
    const {id, productName, price, productImage, amount} = data;
    const increaseHandle = () =>{
        setCounter(counter.map((number) => {
            if(number.id === id){
                return{
                    ...number,
                    amount: number.amount + 1
                };
            }else{
                return number;
            }
        }))
    }
    const decreaseHandle = () =>{
        setCounter(counter.map((number) => {
            if(number.id === id){
                if(number.amount === 0){
                    return number
                }else{
                    return{
                        ...number,
                        amount: number.amount -= 1
                    }
                }
            }else{
                return number
            }
        }));
    }
    const deleteItem = () =>{
        setCounter(counter.filter(data => data.id !== id));
    }
    
  return (
    <div className='cart-product'>
        <div className="item">
            <img src={productImage} alt="shoe" />
            <div className="item-text">
                <h2>{productName}</h2>
                <h4>R {price}</h4>
            </div>
            <select name="option" id="">
                <option value="6UK">6 UK</option>
                <option value="7UK">7 UK</option>
                <option value="8UK">8 UK</option>
                <option value="9UK">9 UK</option>
                <option value="10UK">10 UK</option>
            </select>
            <div className="qty">
                <h3>Qty:</h3>
                <button onClick={decreaseHandle} className="decrease">-</button>
                <h4>{amount}</h4>
                <button onClick={increaseHandle} className="increase">+</button>
            </div>
            <button onClick={deleteItem} className="delete">Delete</button>
        </div>
    </div>
  )
}
