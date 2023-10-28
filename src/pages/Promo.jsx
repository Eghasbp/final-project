import React from "react";
import Sidebar from "../component/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import ContentRight from "../component/Content/ContentRight";
import TemplateDashboard from "../component/TemplateDashboard";

const Promo = () => {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]); // kalau mau store pict pake array

  const getPictures = () => {
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
        const pict = res?.data?.data;
        console.log(pict);
        setPictures(pict); // Set the pictures in state as an array
      });
  };

  useEffect(() => {
    getPictures();
  }, []); // Add an empty dependency array to call getPictures only once

  return (
    <TemplateDashboard title="PROMO">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:mx-20 mx-2 grid-rows-1 gap-5 mb-10 mt-20">
          {pictures.map((item, key) => (
            <div className="w-screen max-w-sm bg-white border border-primary rounded-lg shadow-lg ">
              <a href="#">
                <img
                  className="p-8 w-96 h-60 rounded-t-lg"
                  src={item.imageUrl}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5x">
                <h5 className="text-md  font-normal tracking-tight text-gray-500 capitalize">
                  {item.title}
                </h5>

                <div className="flex items-center justify-between">
                  <span className="text-sm mb-2 font-normal text-gray-500">
                    {item.description}
                  </span>
                  <button
                    onClick={() => navigate(`/promo/${item.id}`)}
                    className=" text-white bg-violet-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TemplateDashboard>
  );
};

export default Promo;
