import React from 'react'
import hero from '../assets/hero_img.png';
import discount from '../assets/discount.png'
import {PRODUCTS} from '../products';
import Footer from '../components/footer';
import {NavLink} from 'react-router-dom';

export default function home() {
  return (
    <div className='main'>
        <div className='hero-section'>
            <div className='text'>
                <h1>Feel Freedom At Every Step</h1>
                <p>Explore our collection of sneakers that is suited just for you</p>
                <NavLink className='nav-link' to='/shop'><button>Explore Now <hr /></button></NavLink>
            </div>
            <div className='image'>
                <img className='hero-img' src={hero} alt="hero_image" />
            </div>
        </div>
        <div className='feature-section' id='features'>
          <div className='feature-title'>
            <h1>FEATURED</h1>
            <hr />
          </div>
          <div className='feature-container'>
            <div className='feature'>
              <img src={PRODUCTS[9].productImage} alt="shoe" />
              <h2 className='product-name'>{PRODUCTS[9].productName}</h2>
              <h3 className='size'>All Sizes</h3>
              <div className="sale-container">
                <h3 className='sale'>For <b>SALE</b></h3>
              </div>
            </div>
            <div className='feature'>
              <img src={PRODUCTS[8].productImage} alt="shoe" />
              <h2 className='product-name'>{PRODUCTS[8].productName}</h2>
              <h3 className='size'>All Sizes</h3>
              <div className="sale-container">
                <h3 className='sale'>For <b>SALE</b></h3>
              </div>
            </div>
            <div className='feature'>
              <img src={PRODUCTS[10].productImage} alt="shoe" />
              <h2 className='product-name'>{PRODUCTS[10].productName}</h2>
              <h3 className='size'>All Sizes</h3>
              <div className="sale-container">
                <h3 className='sale'>For <b>SALE</b></h3>
              </div>
            </div>
          </div>
        </div>
        <div className='discount-section'>
          <img className='discount' src={discount} alt="discount" />
        </div>
        <div className='newProduct' id='newProducts'>
          <div className='newProduct-title'>
            <h1>NEW PRODUCTS</h1>
            <hr />
          </div>
          <div className="grid">
            <div className='grid-item-1'></div>
            <div className='grid-item-2'></div>
            <div className='grid-item-3'></div>
            <div className='grid-item-4'></div>
            <div className='grid-item-5'></div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
