import React from 'react'
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar-section'>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>About me</span>
            <img className='sidebar-img' src='https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Image'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='sidebar-subsection'>
          <span className='sidebar-title'>Categories</span>
          <ul className='sidebar-categories'>
            <li className='sidebar-category'>Buy</li>
            <li className='sidebar-category'>Sell</li>
            <li className='sidebar-category'>Rent</li>
            <li className='sidebar-category'>Residential</li>
            <li className='sidebar-category'>B & B</li>
            <li className='sidebar-category'>Commercial</li>
            <li className='sidebar-category'>Hostel</li>
            <li className='sidebar-category'>Hotel</li>
            <li className='sidebar-category'>Motel</li>
          </ul>
        </div>
        <div className='sidebar-subsection'>
          <span className='sidebar-title'>Follow us on : </span>
          <div className='sidebar-social-icons'>
            <i className='sidebar-social-icon fab fa-instagram'></i>
            <i className='sidebar-social-icon fab fa-facebook'></i>
            <i className='sidebar-social-icon fab fa-linkedin'></i>
            <i className='sidebar-social-icon fab fa-twitter'></i>
          </div>
        </div>
    </div>
  )
}
