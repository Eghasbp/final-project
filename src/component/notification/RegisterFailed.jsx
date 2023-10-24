import React from 'react'
import {FcSynchronize} from 'react-icons/fc'

const RegisterFailed = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-200'>
        <div className='flex flex-col gap-5'>
            <div className='max-w-lg rounded bg-red-100 text-red-700 overflow-hidden shadow-md shadow-red-500/20'>
                <div className='flex'>
                    <div className='flex items  -center gap-4 p-4'>
                        <div className='shrink-0'>
                            <FcSynchronize className='w-8 h-8'/>
                        </div>
                        <div className='space-y-1'>
                            <p className='font-bold capitalize'>Register Failed</p>
                            <p className="text-sm">Please try again! check your data correctly</p>
                        </div>
                        <button className='ml-4 mt-3 w-8 p-1 h-8 text-red-500 font-bold hover:bg-red-200 hover:rounded-full'>X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterFailed