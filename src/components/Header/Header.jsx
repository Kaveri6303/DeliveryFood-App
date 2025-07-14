import React from 'react';
import './Header.css';
import header_img from '../../assets/frontend_assets/header_img.png';
const Header = () => {
  //  console.log("Header Image Path →", header_img);
  return (
    <div className='header'
        style={{ backgroundImage: `url(${header_img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Craving satisfied, happiness delivered</p>
        <button>View Menu</button>

      </div>
    </div>
  );
};

export default Header
