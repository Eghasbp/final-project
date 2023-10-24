import { BiUser,BiNotification } from 'react-icons/bi';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';



const ContentRight = () => {
  const [data,getData] =useState('')
  
  const getProfile = () => {
  axios
    .get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user`,{headers:  {'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', 'Authorization':`Bearer ${localStorage.getItem('token')}`}})
    .then((res) => {
      const data = res?.data?.data
      getData(data)
    })
  }

  useEffect(() => {
    getProfile()
  })

  return (
        <>
        <section className='w-96 bg-gray-100 rounded rounded-tl-70px overflow-hidden px-8'>
        <div className='pt-12 flex justify-end space-x-9 items-center'>
        <Tooltip
        title="Profile"
        position="top" // You can change the position (top, bottom, left, right)
        trigger="mouseenter" // Trigger event (mouseenter, click, etc.)
        animation="shift-away" // Animation style (you can change this)
        arrow={true} // Show arrow or not
        arrowSize="small" // Customize arrow size
      >
       <Link to={'/profile'}>
          <BiUser size={20}/>
          </Link>
      </Tooltip>
        
          <Tooltip
        title="Log out"
        position="top" // You can change the position (top, bottom, left, right)
        trigger="mouseenter" // Trigger event (mouseenter, click, etc.)
        animation="shift-away" // Animation style (you can change this)
        arrow={true} // Show arrow or not
        arrowSize="small" // Customize arrow size
      >
      <div className='flex items-center justify-center'>
      <BiNotification size={20}/>
        </div>
      </Tooltip>
       
          {/* <div className='relative before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all
          after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent 
          after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip="improve workflow"> */}
          
     {/* Hover effect */}
      <Tooltip
        title={data.name}
        position="top" // You can change the position (top, bottom, left, right)
        trigger="mouseenter" // Trigger event (mouseenter, click, etc.)
        animation="shift-away" // Animation style (you can change this)
        arrow={true} // Show arrow or not
        arrowSize="small" // Customize arrow size
      >
       <img src={data.profilePictureUrl}
          className='h-9 w-9 object-cover rounded-full'/>
      </Tooltip>
    
        </div>
        {/* </div> */}
        <div className='card mt-9'>
          <div className='relative p-5'>
          <div className='text-white text-xl font-medium'>{data.name}</div>
          <div className='mt-10 space-y-2 text-white'>
          <div>{data.email}</div>
          <div>{data.phoneNumber}</div>
          </div>
          </div>
        </div>
        <button className='py-3 rounded border border-indigo-400 border-dashed text-indigo-400 w-full mt-10' > Add New Card </button>
      </section>
    </>
  )
}

export default ContentRight