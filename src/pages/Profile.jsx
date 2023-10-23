import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

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
    <div className='w-screen h-screen bg-gray-300'>
        <div className='flex items-center justify-center'>
            <div className='w-1/3 mt-10 rounded-lg bg-white '>
                <div className='flex items-center justify-center pt-10 flex-col'>
                <img src={data.profilePictureUrl } className='rounded-full w-32' alt="" />
                <h2 className='text-gray-800 font-semibold text-xl mt-5'>{data.name}</h2>
                <h2 className='text-gray-400 text-sm p-4'>{data.email}</h2>
                <h2 className='text-gray-400 text-sm'>{data.phoneNumber}</h2>
                <h2 className='text-gray-400 text-sm pt-4'>{data.role}</h2>
                </div>
                <div className='flex items-center justify-center '>
                    <Link to={'/dashboard'}>
                    <button className='m-8 p-4 bg-blue-600 w-[200px] text-white font-medium rounded-lg shadow-md'>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile