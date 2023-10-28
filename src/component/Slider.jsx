import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import axios from "axios";
import bg from "../assets/bg.png";
import ButtonBanner from "./Content/ButtonBanner";

const Slider = () => {
  const [pictures, setPictures] = useState([]); // kalau mau store pict pake array

  const getPictures = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const pict = res?.data?.data;
        console.log(pict);
        setPictures(pict); // Set the pictures in state as an array
      });
  };

  useEffect(() => {
    getPictures();
  }, []); // Add an empty dependency array to call getPictures only once

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getPictures();
      });
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div
        className="w-full border border-gray-300 rounded-xl bg-gradient-to-r from-gray-300  to-gray-300 h-full"
        style={{
          background: `url(${bg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div></div>
        <h2 className="text-center p-4 font-bold font-inter text-2xl text-white bg-violet-600 rounded-lg">
          Banner Showcase & Logged Users
        </h2>
        <ButtonBanner />
        <div className=" h-[500px] w-1/2 m-auto px-4 relative group">
          <div className="flex justify-end items-center">
            <button
              onClick={() => handleDelete(pictures[currentIndex]?.id)}
              className="group relative h-10 w-20 overflow-hidden rounded-2xl bg-red-600 text-lg font-medium font-inter mb-2 text-white"
            >
              Delete
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
          <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            <img
              className="h-[380px] w-full rounded-lg border border-gray-600 p-4 shadow-2xl"
              src={pictures[currentIndex]?.imageUrl}
              alt=""
            />
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
