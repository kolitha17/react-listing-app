import React from 'react'
import './Detail.css'
import ListingDetail from '../../components/listing-detail/ListingDetail'
import SideBar from '../../components/sidebar/SideBar'
import Listing from '../../components/listing/Listing'

export default function Detail() {
  return (
    <div className='detail-page'>
        <ListingDetail />
        <SideBar />
        
    </div>
  )
}
