import React from 'react'
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';

export default function footer() {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div className='footer-links'>
          <h3>E-Commerce</h3>
          <h4>Feel freedom at every step 2023</h4>
        </div>
        <div className='footer-links'>
          <h3>EXPLORE</h3>
          <h4>Home</h4>
          <h4>Featured</h4>
          <h4>New</h4>
          <h4>Shop</h4>
        </div>
        <div className='footer-links'>
          <h3>SUPPORT</h3>
          <h4>Product Help</h4>
          <h4>Customer Care</h4>
          <h4>authorized service</h4>
        </div>
      </div>
      <div className='footer'>
        <div className='social'>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
        </div>
        <div className='footer-copyright'>
          <h4>© 2023 E-Commerce. All rights reserved</h4>
        </div>
      </div>
    </div>
  )
}
