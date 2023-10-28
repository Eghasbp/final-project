import hero from "../assets/Group 1.png";
import travel from "../assets/bag.svg";
import play from "../assets/play-circle.5 1.svg";
import airbnb from "../assets/airbnb.svg";
import booking from "../assets/booking.svg";
import expedia from "../assets/expedia.svg";
import trip from "../assets/tripadvisor.svg";
import orbits from "../assets/orbits.svg";
import book from "../assets/book.png";
import cloudy from "../assets/cloudy.png";
import destination from "../assets/destination.png";
import Navbar from "../component/Navbar";
import ShuffleHero from "../component/Shuffle";
import ProductionHouse from "../component/ProductioHouse";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import ShiftingCountdown from "../component/ShiftingCountdown";
import { useNavigate } from "react-router";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

function App() {
  const navigate = useNavigate();
  const [data, getData] = useState([]);
  const [totalPromo, setTotalPromo] = useState(8); //setTotalptomo diset isinya total promo dikali 2

  const getProfile = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const data = res?.data?.data;
        getData(data);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />

      {/* hero */}
      <section className="px-20">
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
                <img src={hero} alt="" className="w-full" />
              </div>
            </div>
            <div className="col-span-12 order-3 py-8 ">
              <div className="flex justify-center lg:justify-between gap-6 sm:gap-7 flex-wrap">
                <div>
                  <div>
                    <img src={orbits} className="h-5 sm:h-8 " alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={airbnb} className="h-5 sm:h-8" alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={expedia} className="h-5 sm:h-8" alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={booking} className="h-5 sm:h-8" alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={trip} className="h-5 sm:h-8" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service */}
      <section className="py-16 overflow-x-hidden px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 flex gap-4 flex-col">
              <span className="text-blue-500 font-bold leading-tight">
                SERVICES
              </span>
              <h2 className="font-bold text-5xl leading-tight text-gray-700">
                Our top value categories for you
              </h2>
            </div>
            <div className="col-span-8 flex gap-5 w-screen">
              <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                <div>
                  <img src={destination} alt="" />
                </div>
                <div className="flex gap-8 flex-col">
                  <h2 className="font-bold text-gray-600 text-lg text-center">
                    Best Travel buddies
                  </h2>
                  <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">
                    Immerse yourself in local cultures through guided tours,
                    interactive workshops
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                <div>
                  <img src={destination} alt="" />
                </div>
                <div className="flex gap-8 flex-col">
                  <h2 className="font-bold text-gray-600 text-lg text-center">
                    Best Tour Guide
                  </h2>
                  <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">
                    We leverage our local expertise to curate budget-friendly
                    tours and activities compromising
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-16 flex-col items-center w-[350px] rounded-[32px] border p-16">
                <div>
                  <img src={destination} alt="" />
                </div>
                <div className="flex gap-8 flex-col">
                  <h2 className="font-bold text-gray-600 text-lg text-center">
                    Best Price
                  </h2>
                  <p className="font-inter text-lg font-normal leading-relaxed text-gray-800 opacity-50 text-center">
                    we understand the importance of value and finding the best
                    price for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* END SECTION */}

      <section>
        <div>
          <ShuffleHero />
        </div>
      </section>

      <section>
        <div>
          <ProductionHouse />
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center mt-10 md:mt-52">
          <h2 className="font-poppins text-red-500 shadow-md font-extrabold text-4xl text-primary">
            Promos!
          </h2>
        </div>
        <ShiftingCountdown />
        <div className="flex justify-center items-center">
          <h2 className="font-poppins text-sm py-10 px-10 font-light md:w-2/4 text-justify text-slate-400">
            Are you ready for the adventure of a lifetime? TravelAsia invites
            you to embark on a journey like no other, where ancient traditions
            meet modern marvels, and natural beauty awaits at every turn. Our
            exclusive travel promotion offers you the opportunity to explore the
            diverse and enchanting continent of Asia in style and
            comfort.Discover iconic landmarks, serene landscapes, and hidden
            gems in countries like Japan, Thailand, India, China, and more. Asia
            offers an unparalleled array of cultures and landscapes, all waiting
            for you to explore. Tailor your journey to your preferences. Whether
            you're an adventure seeker, a history buff, a foodie, or a nature
            lover, we've got the perfect itinerary for you. Enjoy your stay in
            handpicked luxury hotels and resorts, ensuring you experience the
            utmost comfort and relaxation during your travels. Immerse yourself
            in local cultures through guided tours, interactive workshops
          </h2>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <input
            className="border border-black/30 w-60 rounded-lg p-2"
            placeholder="Search here"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-20 mx-2 grid-rows-1 gap-5">
            {data.map((item, key) => {
              if (key + 1 <= totalPromo) {
                return (
                  <div key={key}>
                    <div className=" py-5 group shadow-lg rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className=" md:h-80 md:w-96 h-40 w-auto bg-transparent border rounded-lg">
                        <img
                          className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src={item.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h4 className="text-2xl font-bold font-poppins text-white lg:mt-[-30px]  mt-30">
                          {item.title}
                        </h4>
                        <p className="my-3 text-xs font-light font-poppins italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {item.description}
                        </p>
                        <button
                           onClick={() => navigate(`/promo/${item.id}`)}
                          className="rounded-full font-poppins bg-primary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/20"
                        >
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {/* SAMPLE TOTAL PROMO BUAT PAGINATION */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setTotalPromo(totalPromo * 2)}
            className="font-medium text-xl mt-40 border p-2 rounded-lg bg-blue-500 text-white"
          >
            See more
          </button>
        </div>
      </section>

       

      <section>
        <div className="mt-20">
          <Footer />
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
