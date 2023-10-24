import React from 'react'
import Logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav>
      <div className='hidden md:flex justify-between items-center p-10 text-xl'>
        <div className=''>
          <Link to={'/dashboard'} className='text-2xl font-semibold flex items-center space-x-3'><img className='w-10 inline-block items-center' src={Logo} alt="" /><span>Travelasia dashboard</span></Link>
        </div>
        <div>
            <Link to={'/login'}>
                <button className='bg-violet-600 p-3 text-white rounded-lg font-medium font-sans hover:bg-violet-800'>Log out</button>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar