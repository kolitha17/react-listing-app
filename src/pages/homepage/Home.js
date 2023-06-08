import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Listing from '../../components/listing/Listing'
import SideBar from '../../components/sidebar/SideBar'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='home-page'>
        <Listing />
        <SideBar />
    </div>
    </div>
    
  )
}
