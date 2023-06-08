import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header-section'> 
        <div className='hero-text'>
            <div className='hero-text-title'>Market Place</div>
            <div className='hero-text-subtitle'>Property Listing Application</div>
        </div>
        <img className='hero-img' src='https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </div>
  )
}
