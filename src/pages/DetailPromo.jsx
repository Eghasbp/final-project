import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DetailPromo = () => {
  const [DetailPromo, setDetailPromo] = useState("");
  const { id } = useParams();
  const getDetail = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const item = res?.data?.data;
        setDetailPromo(item);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
  
  return (
    <div>
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={DetailPromo.imageUrl}
            alt=""
            className="md:w-full md:h-full h-96 aspect-square object-cover rounded-xl"
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4 p-8">
          <div>
            <span className=" text-violet-600 font-semibold">
              Special Promo
            </span>
            <h1 className="md:text-3xl text-xl font-bold md:mb-10">{DetailPromo.title}</h1>
          </div>
          <p className="text-gray-700 text-sm md:text-base ">{DetailPromo.description}</p>
          <p className="text-gray-700 sm:text-md text-sm">
            Terms and condition: <br />
            {DetailPromo.terms_condition}
          </p>
          <h6 className="border rounded-md md:w-56 w-40 border-blue-600 md:p-4 p-2 md:text-2xl text-md font-semibold md:mt-10 ">
            Promo Code : {DetailPromo.promo_code}
          </h6>
          <div className="flex justify-center">
          <Link to={"/promo"}>
            <button className=" border border-violet-600 text-black font-semibold py-3 px-16 rounded-xl w-40 md:w-96 mt-10 md:mt-40">
              Back
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPromo;
