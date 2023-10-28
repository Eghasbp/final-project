import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TemplateDashboard from "../component/TemplateDashboard";
import addButton from "../assets/plus2.png";
import AddPromo from "../component/AddPromo";

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

  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  return (
    <TemplateDashboard title="PROMO">
      <div className="mx-auto bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Travelasia
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Promo
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-20 mx-2 grid-rows-1 gap-5 mb-10 mt-20 ">
            {pictures.map((item, key) => (
              <div
                key={key}
                className="w-screen h-96 max-w-sm bg-white border border-primary rounded-lg shadow-lg "
              >
                <img
                  className="p-8 w-96 h-60 rounded-t-lg"
                  src={item.imageUrl}
                  alt="product image"
                />

                <div className="px-5 pb-5x">
                  <h5 className="text-md  font-normal tracking-tight text-gray-500 capitalize">
                    {item.title}
                  </h5>

                  <div className="flex items-center justify-between">
                    <span className="text-sm mb-2 font-normal text-gray-500">
                      <p className="font-bold mt-2">
                        Promo code : {item.promo_code}
                      </p>
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(`/promo/${item.id}`)}
                    className="mt-4 w-full text-white bg-violet-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    details
                  </button>
                </div>
              </div>
            ))}
            {/* ADD PROMOS */}

            <AddPromo />
          </div>
        </div>
      </div>
    </TemplateDashboard>
  );
};

export default Promo;
