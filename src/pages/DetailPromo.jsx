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

  //   const [images, setImages] = useState({
  //     img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //     img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //     img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //     img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
  // })
  // const [activeImg, setActiveImage] = useState(images.img1)
  // const [amount, setAmount] = useState(1);

  return (
    <div>
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={DetailPromo.imageUrl}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold">{DetailPromo.title}</h1>
          </div>
          <p className="text-gray-700">{DetailPromo.description}</p>
          <p className="text-gray-700">
            Terms and condition: <br />
            {DetailPromo.terms_condition}
          </p>
          <h6 className="text-2xl font-semibold mt-10">
            Promo code : {DetailPromo.promo_code}
          </h6>
          <Link to={"/promo"}>
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl w-96 mt-40">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPromo;
