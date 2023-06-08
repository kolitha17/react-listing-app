import React from 'react'
import './Listing.css'
import Listingitem from '../listing-item/Listingitem'

export default function Listing() {
  return (
    <div className='listing-section'>
        <Listingitem />
        <Listingitem />
        <Listingitem />

        <Listingitem />
        <Listingitem />
        <Listingitem />

    </div>
  )
}
