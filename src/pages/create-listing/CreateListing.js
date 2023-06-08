import React from 'react'
import './CreateListing.css'

export default function CreateListing() {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
            <input autoFocus={true} type='text' placeholder='Property Title' className='create-listing-text' />
            <label htmlFor='listingImg' className='create-listing-img-upload'>
                <i class='fas fa-upload upload-icon'></i>
            </label>
            <input type='file' id='listingImg'  style={{display: 'none'}}/>
            </div>
            <div className='create-listing-form-group'>
                <textarea className='create-listing-text create-listing-description' placeholder='Property Description'></textarea>
            </div>

            
        </form>
        <button className='create-listing-button'>Submit</button>
    </div>
  )
}
