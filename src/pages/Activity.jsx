import React from "react";
import TemplateDashboard from "../component/TemplateDashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash } from "react-icons/bi";

const Activity = () => {
  const [activities, setActivities] = useState([]);

  const getActivity = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        const cat = res?.data?.data;
        setActivities(cat); // Set the pictures in state as an array
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getActivity();
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <TemplateDashboard>
        <div className="mx-auto ml-8 md:ml-0 bg-white py-24  sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Travelasia
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Activity
              </p>
              <p className="mt-6 text-sm md:text-md lg:text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
          </div>
          <div className="container w-1/2 my-24 mx-auto md:px-6">
            {activities.map((items, key) => (
              <section
                key={key}
                className="mb-32 border p-6 rounded-xl shadow-xl border-blue-200"
              >
                <img
                  src={items?.category?.imageUrl}
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />

                <div className="mb-6 flex items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <div>
                    <span>
                      {" "}
                      Published <u>{items?.category?.createdAt}</u> at category{" "}
                      {items?.category?.name}
                    </span>
                  </div>
                </div>

                <h2 className="mb-6 text-3xl font-bold">{items?.title}</h2>
                <p>{items?.description}</p>
                <div className="flex justify-between py-4">
                  <h2 className="mt-2 text-md font-medium border p-2 rounded-xl bg-violet-500 text-white">
                    Price : {items?.price}
                  </h2>
                  <h2 className="mt-2 text-md font-medium border p-2 rounded-xl bg-violet-500 text-white">
                    Reviews ⭐ : {items?.total_reviews}
                  </h2>
                  <h2 className="mt-2 text-md font-medium border p-2 rounded-xl bg-violet-500 text-white">
                    Location : {items?.province}
                  </h2>
                </div>
                <h2 className="mt-2 text-sm font-bold">
                  Address : {items?.address}
                </h2>
                <div className="flex justify-end items-center">
                  <button
                    onClick={() => handleDelete(items?.id)}
                    className="mt-2 font-medium font-inter text-2xl text-black hover:text-red-600"
                  >
                    <BiTrash/>
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </TemplateDashboard>
    </div>
  );
};

export default Activity;
