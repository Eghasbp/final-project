import { useState } from "react";
import hero from "../assets/Group 1.png";
import travel from "../assets/bag.svg";
import play from "../assets/play-circle.5 1.svg"
import airbnb from '../assets/airbnb.svg'
import booking from '../assets/booking.svg'
import expedia from '../assets/expedia.svg'
import trip from '../assets/tripadvisor.svg'
import orbits from '../assets/orbits.svg'
import book from '../assets/book.png'
import cloudy from '../assets/cloudy.png'
import destination from '../assets/destination.png'
import Navbar from "../component/Navbar";
import ShuffleHero from "../component/Shuffle";
import ProductionHouse from "../component/ProductioHouse";

function App() {


  return (
    <>
    <Navbar/>
      {/* hero */}
      <section>
        <div className="container mx-auto px-4 py-4 lg:py-16">
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-4 col-span-12 order-2 lg:order-1">
              <div>
                <button className="flex gap-4 my-8 mx-auto rounded-full px-8 py-4 text-blue-500 text-sm font-bold shadow-lg drop-shadow-md lg:mx-0">
                 Lifetime Experiences
                  <img src={travel} alt="" />
                </button>
                <h2 className="md:mb-[43px] md:mt-[43px] lg:text-[69px] lg:text-start font-bold text-[40px] md:text-[56px] text-gray-800 leading-tight text-center">
                    Travel top destination of the world
                </h2>
                <p className="text-center text-gray-400 lg:text-start py-4 font-inter mb-8 mt-2 md:text-[18px] md: w-3/4 mx-auto lg:w-full">
                Explore Extraordinary Culture, Cuisine, and Natural Beauty
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">

                  <button className="justify-center items-center mb-4 z-10 flex gap-2 py-6 px-8 bg-white border border-blue-700 rounded-full text-sm font-bold">
                    <img src={play} alt="" />
                      Watch Demo
                    </button>
                    
                  <button className="justify-center items-center mb-4 z-10 flex gap-2 py-6 px-8 text-white bg-blue-500 border hover:bg-blue-700 rounded-full text-sm font-bold">
                     Get started
                    </button>
                    
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12 order-1 lg:order-2 ">
              <div>
                <img src={hero} alt="" className="w-full"  />
              </div>
            </div>
            <div className="col-span-12 order-3 py-8 ">
              <div className="flex justify-center lg:justify-between gap-6 sm:gap-7 flex-wrap">
                <div><div><img src={orbits} className="h-5 sm:h-8 " alt="" /></div></div>
                <div><div><img src={airbnb} className="h-5 sm:h-8" alt="" /></div></div>
                <div><div><img src={expedia} className="h-5 sm:h-8" alt="" /></div></div>
                <div><div><img src={booking} className="h-5 sm:h-8" alt="" /></div></div>
                <div><div><img src={trip} className="h-5 sm:h-8" alt="" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service */}
      <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 flex gap-4 flex-col">
              <span className="text-blue-500 font-bold leading-tight">SERVICES</span>
              <h2 className="font-bold text-5xl leading-tight text-gray-700">Our top value categories for you</h2>
            </div>
            <div className="col-span-8 flex gap-5 w-screen">
                <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                  <div><img src={destination} alt="" /></div>
                  <div className="flex gap-8 flex-col">
                    <h2 className="font-bold text-gray-600 text-lg text-center">Best Tour Guide</h2>
                    <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">What looked like a small patch of blue grass, above five feet</p>
                  </div>
                </div>
                <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                  <div><img src={destination} alt="" /></div>
                  <div className="flex gap-8 flex-col">
                    <h2 className="font-bold text-gray-600 text-lg text-center">Best Tour Guide</h2>
                    <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">What looked like a small patch of blue grass, above five feet</p>
                  </div>
                </div>
                <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                  <div><img src={destination} alt="" /></div>
                  <div className="flex gap-8 flex-col">
                    <h2 className="font-bold text-gray-600 text-lg text-center">Best Tour Guide</h2>
                    <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">What looked like a small patch of blue grass, above five feet</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* END SECTION */}

      <section>
        <div>
          <ShuffleHero/>  
        </div>  
      </section>
      
      <section>
        <div>
          <ProductionHouse/>
        </div>
      </section>
      
      
      
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
    </>
  );
}

export default App;
