import React, { useEffect, useState } from 'react'
import { BiUser,BiNotification } from 'react-icons/bi';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
          <Link to={'/profile'}>
          <BiUser size={20}/>
          </Link>
          <div className='flex items-center justify-center'>
          <BiNotification size={20}/> <h2 className='font-semibold'>Logout</h2>
          </div>
          <img src={data.profilePictureUrl}
          className='h-9 w-9 object-cover rounded-full'/>
        </div>
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