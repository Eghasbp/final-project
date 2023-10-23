import React from 'react'
import Logo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import {BiHomeSmile, BiCheckboxSquare,BiSolidDiscount,BiPulse,BiCategory} from 'react-icons/bi'

const Sidebar = () => {
    const menu = [
        {name: "Home", icon:<BiHomeSmile/>,href:'/'},
        {name: "Dashboard Admin", icon:<BiCheckboxSquare/>},
        {name: "Promo", icon:<BiSolidDiscount/>,href:'promo'},
        {name: "Activity", icon:<BiPulse/>,href:'activity'},
        {name: "Category", icon:<BiCategory/>,href:'category'},
    ]

    const schedule = ["Monthly","Weekly"]

  return (
    <>
    <div className='h-screen border-r border-gray-300 w-64 px-9 py-9 space-y-24'>
        <div className='flex flex-row items-center pt-8 gap-4'>
            <img src={Logo} alt="" className='w-9 h-9' />
            <div className='font-Circular font-semibold'>Travelasia</div>
        </div>
        <div className='space-y-24'>

       
    <div>
    <ul className='space-y-7'>
    <div className='mb-4 mt-24 font-inter text-blue-600 font-semibold'>Menu</div>
    {
        menu.map((val,index) => {
            return (
            <Link to={val.href} key={index} className=' flex flex-row items-center text-gray-500 hover:text-blue-600 hover:border hover:rounded-lg hover:border-indigo-300 hover:p-1 hover:font-medium
            \'>
                <div className='mr-5'>{val.icon}</div>
                <div>{val.name}</div>
            </Link>
            )        
        })}
    </ul>
    </div>
    <div>
        <div className='mb-7 font-inter font-semibold text-blue-600'>Trivia Area</div>
        <div className='space-y-7'>
        {
            schedule.map((val,index) => {
                return (    
                    <div key={index} className='flex items-center text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 mr-4 rounded-full'></div>
                            <div>{val}</div>
                        
                    </div>
                )
            })
        }
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar