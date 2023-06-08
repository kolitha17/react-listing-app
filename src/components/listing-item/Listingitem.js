import React from 'react'
import './Listingitem.css'
import {Link} from 'react-router-dom'

export default function Listingitem() {
  return (
    <div className='listing-item'>
        <img className='listing-img' src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className='listing-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
            
            <Link to='/detail/2'><span className='listing-title'>Awesome property.</span></Link>
            <hr/>
            <span className='listing-time'>2 hrs ago.</span>
        </div>
        <p className='listing-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}
