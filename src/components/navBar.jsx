import React from 'react';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Cart from '../assets/cart.png';

export default function navBar({item}) {
  const amount = item.length;
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <h2>E-Commerce</h2>
            <div className='navRight'>
                <div className='navLinks'>
                  <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                  <li><HashLink className='nav-link' to='/#features'>Featured</HashLink></li>
                  <li><HashLink className='nav-link' to='/#newProducts'>New</HashLink></li>
                </div>
                <div className='shopAndCart'>
                    <li><NavLink className='nav-link' to='/shop'>Shop</NavLink></li>
                    <li><NavLink className='nav-link trolly' to='/cart'><img className='cart' src={Cart} alt="cart" /><h4>{amount}</h4></NavLink></li>
                </div>
            </div>
        </div>
    </div>
  );
};
