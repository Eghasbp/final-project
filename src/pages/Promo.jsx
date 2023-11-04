import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TemplateDashboard from "../component/TemplateDashboard";
import addButton from "../assets/plus2.png";
import AddPromo from "../component/AddPromo";
import {BiTrash,BiSolidDetail, BiDetail, BiSolidChevronsRight,BiPencil, BiSolidChevronsLeft} from "react-icons/bi"

const Promo = () => {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]); // kalau mau store pict pake array
  const [totalPromo, setTotalPromo] = useState(7);

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

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        getPictures();
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
            <p className="mt-6 text-sm leading-8 text-gray-400">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
        </div>
        <AddPromo />
        <div className="flex items-center justify-center mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2    lg:mx-20 mx-2 grid-rows-1 gap-5 mb-10 mt-10 ">
            {pictures.map((item, key) => {
              if (key + 1 <= totalPromo) {
                return (
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
                      <div className="flex justify-end items-center gap-3">

                        <button
                          onClick={() => navigate(`/promo/${item.id}`)}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black "
                        >
                          <BiPencil/>
                        </button>
                        <button
                          onClick={() => navigate(`/promo/${item.id}`)}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black "
                        >
                          <BiDetail/>
                        </button>
                        <button
                          onClick={() => handleDelete(item?.id)}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black hover:text-red-600"
                        >
                        <BiTrash/>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div className="flex flex-col gap-4 justify-center align-middle items-center">
              <button
                onClick={() => setTotalPromo(totalPromo * 2)}
                className="w-36 text-md border p-2 rounded-lg border-violet-600 text-black "
              > <div className="flex items-center justify-center gap-2 font-medium">
                <BiSolidChevronsRight/>
                More
              </div>
              </button>
              {
                setTotalPromo <= 8 ? null :
                
              <button
                onClick={() => setTotalPromo(totalPromo / 2)} 
                className="w-36 text-md border p-2 rounded-lg border-violet-600 text-black hover:bg-blue-500 hover:text-white"
              > <div className="flex items-center justify-center gap-2 font-medium">
                <BiSolidChevronsLeft/>
                Less
              </div>
              </button>
              }
            </div>
          </div>
        </div>
      </div>
    </TemplateDashboard>
  );
};

export default Promo;
