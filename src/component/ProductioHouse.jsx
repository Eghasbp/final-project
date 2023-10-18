import React from 'react'
import disney from '../assets/Image/disney.png'
import nationalG from '../assets/Image/nationalG.png'
import marvel from '../assets/Image/marvel.png'
import pixar from '../assets/Image/pixar.png'
import starwars from '../assets/Image/starwars.png'

import disneyV from '../assets/video/a.mp4'
import nationalGV from '../assets/video/b.mp4'
import marvelV from '../assets/video/c.mp4'
import pixarV from '../assets/video/d.mp4'
import starwarsV from '../assets/video/e.mp4'

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwars,
            video:starwarsV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV
        },

    ]



  return (
    <div className='w-screen h-56 justify-center items-center mt-10 md:flex grid gap-2 md:gap-5 p-2 px- md:px-20 lg:px-20 '>
    {productionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 bg-black
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800
        '>
             <video src={item.video} autoPlay loop playsInline muted 
        className='w-screen absolute z-0 top-0 rounded-md 
        opacity-0 hover:opacity-70'/> 
            <img src={item.image} className='w-full md:z-[1] opacity-100' /> 
           
        </div>
        ))}
    </div>
  )
}

export default ProductionHouse