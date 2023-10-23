import  Sidebar  from '../component/Sidebar'
import React from 'react'
import ContentRight from '../component/Content/ContentRight';
// import { GrNotification } from 'react-icons/gr ';

const Dashboard = () => {

//panggil API untuk id pengguna

  return (
    <>
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar/>
      <section className='flex-1 bg-white'>
        content left
      </section>
      <ContentRight/>
    </div>
    </>
  )
}

export default Dashboard